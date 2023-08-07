import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import * as API from '../../services/api';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { BtnPrimary } from '../Buttons/index';

import {
  CloseIconSelect,
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
  DataWrapp,
} from './CreateEventForm.styled';

import defaultImage from '../../images/defaultImage.png';

import categoryList from '../../data/categories';
import priorityList from '../../data/priorityList';

import {
  validateTitle,
  validateLocation,
} from '../../validation/inputFormValidation';

function CreateEventForm() {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const [titleError, setTitleError] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const titleValidationResult = validateTitle(titleValue);
    const locationValidationResult = validateLocation(locationValue);

    if (titleValidationResult) {
      setTitleError(titleValidationResult);
      return;
    }

    if (locationValidationResult) {
      setLocationError(locationValidationResult);
      return;
    }
    try {
      const uniqueId = nanoid();
      const eventData = {
        id: uniqueId,
        image: defaultImage,
        title: titleValue || 'Event Title',
        supportingText: descriptionValue || 'Event Description',
        date: dateValue ? dateValue.toISOString() : '01.01.',
        time: timeValue || '00:00 am',
        location: locationValue || 'Kyiv',
        category: selectedCategory || 'Work',
        priority: selectedPriority || 'High',
      };

      await API.postEvent(eventData);
      console.log(eventData);
      // toast.success('Event created');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong. Please try again');
    }
  };

  const handleCategoryClick = async category => {
    setSelectedCategory(category);
    setShowCategory(false);
  };

  const handlePriorityClick = async priority => {
    setSelectedPriority(priority);
    setShowPriority(false);
  };

  const handleDateClick = async date => {
    // setSelectedPriority(priority);
    setShowDate(false);
  };

  const handleTimeClick = async time => {
    // setSelectedPriority(priority);
    setShowTime(false);
  };

  function ErrorMessage({ error }) {
    if (!error) {
      return null;
    }
    return <Error>{error}</Error>;
  }

  return (
    <EventFormWrapp>
      <GridContainer>
        <GridItem1>
          <Title htmlFor="title">Title</Title>
          <Input
            type="text"
            id="title"
            name="title"
            value={titleValue}
            onChange={e => {
              setTitleValue(e.target.value);
              setTitleError(validateTitle(e.target.value));
            }}
            error={titleError}
          />
          {titleError && <ErrorMessage error={titleError} />}
          {titleError && (
            <ScrubInputBtn
              onClick={() => {
                setTitleValue('');
                setTitleError(null);
              }}
            >
              <ScrubIcon error={titleError} size={16} />
            </ScrubInputBtn>
          )}
        </GridItem1>

        <GridItem2>
          <Title htmlFor="description">Description</Title>
          <InputTextArea
            as="textarea"
            id="description"
            name="description"
            value={descriptionValue}
            onChange={e => setDescriptionValue(e.target.value)}
          />
          {descriptionValue && (
            <ScrubInputBtn onClick={() => setDescriptionValue('')}>
              <ScrubIcon size={16} />
            </ScrubInputBtn>
          )}
        </GridItem2>

        <GridItem3>
          <Title htmlFor="date">Select date</Title>
          <Input
            type="text"
            id="date"
            name="date"
            onClick={() => setShowDate(!showDate)}
          />
          {showDate ? <OpenIcon size={20} /> : <CloseIcon size={20} />}
          <DataWrapp>
            <DatePicker
              selected={dateValue}
              onChange={date => setDateValue(date)}
            />
          </DataWrapp>
        </GridItem3>

        <GridItem4>
          <Title htmlFor="time">Select time</Title>
          <Input
            type="text"
            id="time"
            name="time"
            selected={timeValue}
            onChange={e => setTimeValue(e.target.value)}
            onClick={() => setShowTime(!showTime)}
          />
          {showTime ? <OpenIcon size={20} /> : <CloseIcon size={20} />}
        </GridItem4>

        <GridItem5>
          <Title htmlFor="location">Location</Title>
          <Input
            type="text"
            id="location"
            name="location"
            value={locationValue}
            onChange={e => {
              setLocationValue(e.target.value);
              setLocationError(validateLocation(e.target.value));
            }}
            error={locationError}
            autoComplete="off"
          />
          {locationError && <ErrorMessage error={locationError} />}
          {locationError && (
            <ScrubInputBtn
              onClick={() => {
                setLocationValue('');
                setLocationError(null);
              }}
            >
              <ScrubIcon error={locationError} size={16} />
            </ScrubInputBtn>
          )}
        </GridItem5>

        <GridItem6>
          <Title htmlFor="category">Category</Title>
          <InputSelect
            type="text"
            id="category"
            name="category"
            onClick={() => setShowCategory(!showCategory)}
            value={selectedCategory}
            $showcategory={showCategory}
            onChange={() => {}}
            autoComplete="off"
          />
          {showCategory && (
            <CategoryWrapp>
              <CategoryBtn onClick={() => setShowCategory(!showCategory)}>
                <CategorySelected>Select Category</CategorySelected>
                {showCategory && <CloseIconSelect size={20} />}
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
        </GridItem7>

        <GridItem8>
          <Title htmlFor="priority">Priority</Title>
          <InputSelect
            type="text"
            id="priority"
            name="priority"
            onClick={() => setShowPriority(!showPriority)}
            value={selectedPriority}
            onChange={() => {}}
            $showpriority={showPriority}
          />
          {showPriority && (
            <PriorityWrapp>
              <PriorityBtn onClick={() => setShowPriority(!showPriority)}>
                <PrioritySelected>Select Priority</PrioritySelected>
                <CloseIconSelect size={20} />
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
      <BtnWrapp onClick={handleSubmit}>
        <BtnPrimary text="Add event" icon={false} />
      </BtnWrapp>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
