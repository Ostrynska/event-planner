import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import * as API from '../../services/api';
// import { useEventData } from '../../hooks/useEventData';
import { toast } from 'react-toastify';

import {
  validateTitle,
  validateLocation,
} from '../../validation/inputFormValidation';

import categoryList from '../../data/categories';
import priorityList from '../../data/priorityList';

import {
  InputSelect,
  EventFormWrapp,
  GridContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  GridItem7,
  GridItem8,
  Title,
  Input,
  InputTextArea,
  Error,
  ScrubInputBtn,
  ScrubIcon,
  CategoryWrapp,
  CategoryBtn,
  CategoryOptions,
  CategorySelected,
  CloseIcon,
  OpenIcon,
  CategoryList,
  CategoryItem,
  CategoryIcon,
} from './CreateEventForm.styled';

function CreateEventForm() {
  // const { setData } = useEventData();
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState('');
  const [showCategory, setShowCategory] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const handleSubmit = async values => {
    try {
      const uniqueId = nanoid();
      const eventData = { ...values, id: uniqueId, image: '' };

      const response = await API.postEvent(eventData);
      // setData(...response);
      toast.success('Event created');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong. Please try again');
    }
  };

  const handleDescriptionChange = e => {
    setDescriptionValue(e.target.value);
    setDescriptionTouched(true);
  };

  const handleScrubButtonClick = () => {
    setDescriptionValue('');
  };

  const handleCategoryClick = async category => {
    setSelectedCategory(category);
    setShowCategory(false);
  };

  const handlePriorityClick = async priority => {
    setSelectedPriority(priority);
    setShowPriority(false);
  };

  return (
    <EventFormWrapp>
      <Formik
        initialValues={{
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
          category: '',
          priority: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <GridContainer>
              <GridItem1>
                <Title htmlFor="title">Title</Title>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={values.title}
                  validate={validateTitle}
                  error={touched.title && errors.title}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.title || touched.title ? (
                  <ScrubInputBtn
                    onClick={() => {
                      handleChange('title')('');
                    }}
                  >
                    <ScrubIcon
                      error={touched.title && errors.title}
                      size={16}
                    />
                  </ScrubInputBtn>
                ) : null}
                <Error name="title" component="div" />
              </GridItem1>

              <GridItem2 style={{ height: '80px' }}>
                <Title htmlFor="date">Select date</Title>
                <Input type="text" id="date" name="date" />
                <div>
                  <button>Exit</button>
                  <button>Choose date</button>
                </div>
              </GridItem2>

              <GridItem3>
                <Title htmlFor="category">Category</Title>
                <InputSelect
                  type="text"
                  id="category"
                  name="category"
                  onClick={() => setShowCategory(!showCategory)}
                  $showcategory={showCategory}
                  value={selectedCategory}
                />

                {showCategory && (
                  <CategoryWrapp>
                    <CategoryBtn onClick={() => setShowCategory(!showCategory)}>
                      <CategorySelected>Select Category</CategorySelected>
                      {showCategory ? (
                        <CloseIcon size={20} />
                      ) : (
                        <OpenIcon size={20} />
                      )}
                    </CategoryBtn>
                    <CategoryList $showcategory={showCategory}>
                      {categoryList.map((item, index) => (
                        <CategoryItem
                          key={index}
                          onClick={() => handleCategoryClick(item)}
                        >
                          {item}
                        </CategoryItem>
                      ))}
                    </CategoryList>
                  </CategoryWrapp>
                )}
              </GridItem3>

              <GridItem4>
                <Title htmlFor="description">Description</Title>
                <InputTextArea
                  as="textarea"
                  id="description"
                  name="description"
                  onBlur={() => setDescriptionTouched(true)}
                  onChange={handleDescriptionChange}
                  value={descriptionValue}
                />
                {descriptionTouched && descriptionValue && (
                  <ScrubInputBtn onClick={handleScrubButtonClick}>
                    <ScrubIcon size={16} />
                  </ScrubInputBtn>
                )}
              </GridItem4>

              <GridItem5 style={{ height: '80px' }}>
                <Title htmlFor="time">Select time</Title>
                <Input type="text" id="time" name="time" />
              </GridItem5>
              <GridItem6 style={{ height: '80px' }}>
                <Title htmlFor="picture">Add picture</Title>
                <Input type="text" id="picture" name="picture" />
                {/* {errors.picture || touched.picture ? (
                  <ScrubInputBtn
                  // onClick={() => {
                  //   handleChange('picture')('');
                  // }}
                  >
                    <ScrubIcon
                      error={touched.picture && errors.picture}
                      size={16}
                    />
                  </ScrubInputBtn>
                ) : null} */}
                <Error name="picture" component="div" />
              </GridItem6>

              <GridItem7>
                <Title htmlFor="location">Location</Title>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  validate={validateLocation}
                  value={values.location}
                  error={touched.location && errors.location}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.location || touched.location ? (
                  <ScrubInputBtn
                    onClick={() => {
                      handleChange('location')('');
                    }}
                  >
                    <ScrubIcon
                      error={touched.location && errors.location}
                      size={16}
                    />
                  </ScrubInputBtn>
                ) : null}
                <Error name="location" component="div" />
              </GridItem7>

              <GridItem8 style={{ height: '80px' }}>
                <Title htmlFor="priority">Priority</Title>
                <Input
                  as="select"
                  id="priority"
                  name="priority"
                  onClick={() => setShowPriority(!showPriority)}
                  $showpropity={showPriority}
                  value={selectedPriority}
                >
                  {showPriority && (
                    <CategoryWrapp>
                      <CategoryBtn
                        onClick={() => setShowPriority(!showPriority)}
                      >
                        <CategorySelected>Select Priority</CategorySelected>
                        <CloseIcon size={24} />
                      </CategoryBtn>
                      <CategoryList $showcategory={showPriority}>
                        {priorityList.map((item, index) => (
                          <CategoryItem
                            key={index}
                            onClick={() => handlePriorityClick(item)}
                          >
                            {item}
                          </CategoryItem>
                        ))}
                      </CategoryList>
                    </CategoryWrapp>
                  )}
                  <OpenIcon size={24} />
                </Input>
              </GridItem8>
            </GridContainer>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
