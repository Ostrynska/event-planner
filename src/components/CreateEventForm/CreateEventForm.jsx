import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import * as API from '../../services/api';
// import { useEventData } from '../../hooks/useEventData';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import {
  validateTitle,
  validateLocation,
} from '../../validation/inputFormValidation';
import { BtnPrimary } from '../Buttons/index';

import categoryList from '../../data/categories';
import priorityList from '../../data/priorityList';

import {
  BtnWrapp,
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
  CategorySelected,
  CloseIcon,
  OpenIcon,
  CategoryList,
  CategoryItem,
  PriorityWrapp,
  PriorityItem,
  PriorityBtn,
  PrioritySelected,
  PriorityList,
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

              <GridItem2>
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
              </GridItem2>

              <GridItem3>
                <Title htmlFor="date">Select date</Title>
                <Input type="text" id="date" name="date" />
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                >
                  <div>
                    <button>Exit</button>
                    <button>Choose date</button>
                  </div>
                </DatePicker>
                <OpenIcon size={20} />
              </GridItem3>

              <GridItem4>
                <Title htmlFor="time">Select time</Title>
                <Input type="text" id="time" name="time" />
                <OpenIcon size={20} />
              </GridItem4>

              <GridItem5>
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
              </GridItem5>

              <GridItem6>
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
                      {showCategory && <CloseIcon size={20} />}
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
                <OpenIcon size={20} $showcategory={showCategory} />
              </GridItem6>

              <GridItem7>
                <Title htmlFor="picture" disabled>
                  Add picture
                </Title>
                <Input type="text" id="picture" name="picture" disabled />
                <OpenIcon size={20} disabled />
              </GridItem7>

              <GridItem8>
                <Title htmlFor="priority">Priority</Title>
                <InputSelect
                  type="text"
                  id="priority"
                  name="priority"
                  onClick={() => setShowPriority(!showPriority)}
                  $showpriority={showPriority}
                  value={selectedPriority}
                />
                {showPriority && (
                  <PriorityWrapp>
                    <PriorityBtn onClick={() => setShowPriority(!showPriority)}>
                      <PrioritySelected>Select Priority</PrioritySelected>
                      <CloseIcon size={20} />
                    </PriorityBtn>
                    <PriorityList $showpriority={showPriority}>
                      {priorityList.map((item, index) => (
                        <PriorityItem
                          key={index}
                          onClick={() => handlePriorityClick(item)}
                        >
                          {item}
                        </PriorityItem>
                      ))}
                    </PriorityList>
                  </PriorityWrapp>
                )}
                <OpenIcon size={20} $showpriority={showPriority} />
              </GridItem8>
            </GridContainer>
            <BtnWrapp>
              <BtnPrimary text="Add event" to="/" icon={false} />
            </BtnWrapp>
          </Form>
        )}
      </Formik>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
