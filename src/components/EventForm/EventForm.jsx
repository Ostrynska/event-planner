import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { fetchAddEvent } from '../../redux/events/operations';

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
} from './EventForm.styled';

import categoryList from '../../data/categories';
import priorityList from '../../data/priorityList';

import {
  validateTitle,
  validateDesctiption,
  validateLocation,
} from '../../validation/inputFormValidation';

import DatePicker from '../Calendar/Calendar';
import TimeInput from '../TimePicker/TimePicker';

function EventForm({ event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const ICON_SIZE = 20;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [image, setImage] = useState(null);
  const [showToggle, setShowToggle] = useState({
    category: false,
    priority: false,
    date: false,
    time: false,
  });

  const [errors, setErrors] = useState({
    title: null,
    description: null,
    location: null,
    category: null,
    priority: null,
    date: null,
    time: null,
  });

  useEffect(() => {
    if (!event) {
      return;
    }

    const {
      name,
      description,
      category,
      priority,
      location,
      date,
      time,
      image,
    } = event;

    setTitle(name);
    setDescription(description);
    setDate(date);
    setTime(time);
    setLocation(location);
    setCategory(category);
    setPriority(priority);
    setImage(image);
  }, [event]);

  const toggleHandler = toggleName => {
    const isValid = validateSelection(toggleName);
    if (!isValid) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [toggleName]: `Please select a ${toggleName}`,
      }));
      return;
    }
    setShowToggle(prev => ({
      ...prev,
      [toggleName]: !prev[toggleName],
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [toggleName]: null,
    }));
  };

  const InputValidation = ({ value, error, handleInputReset, name }) => (
    <>
      {value && (
        <ScrubInputBtn onClick={() => handleInputReset(name)}>
          {error ? (
            <ScrubIcon error={error} size={16} />
          ) : (
            <ScrubIcon size={16} />
          )}
        </ScrubInputBtn>
      )}
      {error && <ErrorMessage error={error} />}
    </>
  );

  const validateSelection = toggleName => {
    switch (toggleName) {
      case 'category':
        return category !== '';
      case 'priority':
        return priority !== '';
      case 'date':
        return date === '';
      case 'time':
        return time !== '';
      default:
        return true;
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        setErrors(prevErrors => ({
          ...prevErrors,
          title: validateTitle(value),
        }));
        break;
      case 'description':
        setDescription(value);
        setErrors(prevErrors => ({
          ...prevErrors,
          description: validateDesctiption(value),
        }));
        break;
      case 'location':
        setLocation(value);
        setErrors(prevErrors => ({
          ...prevErrors,
          location: validateLocation(value),
        }));
        break;
      default:
        return;
    }
  };

  const handleInputClick = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        setErrors(prevErrors => ({
          ...prevErrors,
          title: validateTitle(value),
        }));
        break;
      case 'description':
        setDescription(value);
        setErrors(prevErrors => ({
          ...prevErrors,
          description: validateDesctiption(value),
        }));
        break;
      case 'location':
        setLocation(value);
        setErrors(prevErrors => ({
          ...prevErrors,
          location: validateLocation(value),
        }));
        break;
      default:
        return;
    }
  };

  const handleInputReset = name => {
    switch (name) {
      case 'title':
        setTitle('');
        setErrors(prevErrors => ({ ...prevErrors, title: null }));
        break;
      case 'description':
        setDescription('');
        setErrors(prevErrors => ({ ...prevErrors, description: null }));
        break;
      case 'location':
        setLocation('');
        setErrors(prevErrors => ({ ...prevErrors, location: null }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    if (
      !title ||
      !date ||
      !location ||
      !description ||
      !time ||
      !category ||
      !priority
    ) {
      toast.error('Please fill all required fields');
      return;
    }

    const uniqueId = nanoid();
    const imageUrl = `https://picsum.photos/seed/${uniqueId}/600/800`;
    dispatch(
      fetchAddEvent({
        id: uniqueId,
        image: imageUrl,
        title: title,
        supportingText: description,
        date: date && date.toString(),
        time: time && time.toString(),
        location: location,
        category: category,
        priority: priority,
      })
    );
    navigate('/');
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
          <Title htmlFor="title">{t('form-title')}</Title>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onClick={handleInputClick}
            onChange={handleInputChange}
            error={errors.title}
          />
          <InputValidation
            value={title}
            error={errors.title}
            handleInputReset={() => handleInputReset('title')}
          />
        </GridItem1>

        <GridItem2>
          <Title htmlFor="description">{t('form-des')}</Title>
          <InputTextArea
            as="textarea"
            id="description"
            name="description"
            value={description}
            onClick={handleInputClick}
            onChange={handleInputChange}
            error={errors.description}
          />
          <InputValidation
            value={description}
            error={errors.description}
            handleInputReset={() => handleInputReset('description')}
          />
        </GridItem2>

        <GridItem3>
          <Title htmlFor="date">{t('form-date')}</Title>
          <Input
            type="text"
            id="date"
            name="date"
            value={date}
            onClick={() => toggleHandler('date')}
            readOnly
            required
          />
          {showToggle.date ? <CloseIcon size={20} /> : <OpenIcon size={20} />}
          {showToggle.date && <DatePicker onDateSelect={setDate} />}
          {errors.date || (showToggle.date && <Error>{errors.date}</Error>)}
        </GridItem3>

        <GridItem4>
          <Title htmlFor="time">{t('form-time')}</Title>
          <div onClick={() => toggleHandler('time')}>
            <TimeInput onTimeSelect={setTime} isOpen={showToggle.time} />
            {showToggle.time ? <CloseIcon size={20} /> : <OpenIcon size={20} />}
          </div>
        </GridItem4>

        <GridItem5>
          <Title htmlFor="location">{t('form-loc')}</Title>
          <Input
            type="text"
            id="location"
            name="location"
            value={location}
            onClick={handleInputClick}
            onChange={handleInputClick}
            error={errors.location}
            autoComplete="off"
          />
          <InputValidation
            value={location}
            error={errors.location}
            handleInputReset={() => handleInputReset('location')}
          />
        </GridItem5>

        <GridItem6>
          <Title htmlFor="category">{t('form-categ')}</Title>
          <InputSelect
            type="text"
            id="category"
            name="category"
            onClick={() => toggleHandler('category')}
            value={category}
            $showcategory={showToggle.category}
            autoComplete="off"
          />
          {showToggle.category && (
            <CategoryWrapp>
              <CategoryBtn onClick={() => toggleHandler('category')}>
                <CategorySelected>{t('form-select-categ')}</CategorySelected>
                {showToggle.category && <CloseIconSelect size={ICON_SIZE} />}
              </CategoryBtn>
              <CategoryList $showcategory={showToggle.category}>
                {categoryList.map((item, index) => (
                  <CategoryItem
                    key={index}
                    onClick={() => {
                      setCategory(item);
                      toggleHandler('category');
                    }}
                  >
                    {item}
                  </CategoryItem>
                ))}
              </CategoryList>
            </CategoryWrapp>
          )}
          <OpenIcon size={ICON_SIZE} $showcategory={showToggle.category} />
        </GridItem6>

        <GridItem7>
          <Title htmlFor="picture" disabled>
            {t('form-pic')}
          </Title>
          <Input type="text" id="picture" name="picture" disabled />
          <OpenIcon size={20} disabled />
        </GridItem7>

        <GridItem8>
          <Title htmlFor="priority">{t('form-priority')}</Title>
          <InputSelect
            type="text"
            id="priority"
            name="priority"
            onClick={() => toggleHandler('priority')}
            value={priority}
            $showpriority={showToggle.priority}
          />
          {showToggle.priority && (
            <PriorityWrapp>
              <PriorityBtn onClick={() => toggleHandler('priority')}>
                <PrioritySelected>{t('form-select-prior')}</PrioritySelected>
                <CloseIconSelect size={ICON_SIZE} />
              </PriorityBtn>
              <PriorityList $showpriority={showToggle.priority}>
                {priorityList.map((item, index) => (
                  <PriorityItem
                    key={index}
                    onClick={() => {
                      setPriority(item);
                      toggleHandler('priority');
                    }}
                  >
                    {item}
                  </PriorityItem>
                ))}
              </PriorityList>
            </PriorityWrapp>
          )}
          <OpenIcon size={ICON_SIZE} $showpriority={showToggle.priority} />
        </GridItem8>
      </GridContainer>
      <BtnWrapp onClick={handleSubmit}>
        <BtnPrimary text={t('btn-form')} icon={false} />
      </BtnWrapp>
    </EventFormWrapp>
  );
}

export default EventForm;
