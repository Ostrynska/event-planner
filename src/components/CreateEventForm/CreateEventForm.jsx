import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { fetchAddEvent } from '../../redux/events/operations';
import { getLoading } from '../../redux/events/selectors';

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
} from './CreateEventForm.styled';

import categoryList from '../../data/categories';
import priorityList from '../../data/priorityList';

import {
  validateTitle,
  validateDesctiption,
  validateLocation,
} from '../../validation/inputFormValidation';

import DatePicker from '../Calendar/Calendar';
import TimeInput from '../TimePicker/TimePicker';

function CreateEventForm() {
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

  const [showCategory, setShowCategory] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [locationError, setLocationError] = useState(null);

  // useEffect(() => {
  //   if (!event) {
  //     return;
  //   }

  //   const { name, description, category, priority, place, date, time, photo } =
  //     event;

  //   setTitle(name);
  //   setDescription(description);
  //   setDate(date);
  //   setTime(time);
  //   setPlace(place);
  //   setCategory(category);
  //   setPriority(priority);
  //   setImage(photo);
  // }, [event]);

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

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        setTitleError(validateTitle(e.target.value));
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'location':
        setLocation(e.target.value);
        e.target.setCustomValidity('');
        break;
      case 'category':
        setCategory(e.target.value);
        break;
      case 'priority':
        setPriority(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleInputClick = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        setTitleError(validateTitle(e.target.value));
        break;
      case 'description':
        setDescription(e.target.value);
        setDescriptionError(validateDesctiption(e.target.value));
        break;
      case 'location':
        setLocation(e.target.value);
        setLocationError(validateLocation(e.target.value));
        break;
      case 'category':
        setCategory(e.target.value);
        break;
      case 'priority':
        setPriority(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleInputReset = name => {
    switch (name) {
      case 'title':
        setTitle('');
        setTitleError('');
        break;
      case 'description':
        setDescription('');
        setDescriptionError('');
        break;
      case 'location':
        setLocation('');
        setLocationError('');
        break;
      case 'category':
        setCategory('');
        break;
      case 'priority':
        setPriority('');
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const titleValidationResult = validateTitle(title);
    const locationValidationResult = validateLocation(location);

    if (titleValidationResult) {
      setTitleError(titleValidationResult);
      return;
    }

    if (locationValidationResult) {
      setLocationError(locationValidationResult);
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
            error={titleError}
          />
          <InputValidation
            value={title}
            error={titleError}
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
            error={descriptionError}
          />
          <InputValidation
            value={description}
            error={descriptionError}
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
            onClick={() => setShowDate(!showDate)}
            readOnly
            required
          />
          {!date && <ErrorMessage error="This field is required" />}
          {showDate ? <CloseIcon size={20} /> : <OpenIcon size={20} />}
          {showDate && <DatePicker onDateSelect={setDate} />}
        </GridItem3>

        {/* <GridItem4>
          <Title htmlFor="time">{t('form-time')}</Title>
          <div onClick={() => setShowTime(!showTime)}>
            <TimeInput onTimeSelect={setTime} isOpen={showTime} />
            {showTime ? <CloseIcon size={20} /> : <OpenIcon size={20} />}
          </div>
        </GridItem4> */}

        <GridItem5>
          <Title htmlFor="location">{t('form-loc')}</Title>
          <Input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleInputClick}
            error={locationError}
            autoComplete="off"
          />
          <InputValidation
            value={location}
            error={locationError}
            handleInputReset={() => handleInputReset('location')}
          />
        </GridItem5>

        {/* <GridItem6>
          <Title htmlFor="category">{t('form-categ')}</Title>
          <InputSelect
            type="text"
            id="category"
            name="category"
            onClick={() => toggleCategory('category')}
            value={showCategory}
            $showcategory={showCategory.category}
            onChange={() => {}}
            autoComplete="off"
          />
          {showCategory.category && (
            <CategoryWrapp>
              <CategoryBtn onClick={() => toggleCategory('category')}>
                <CategorySelected>{t('form-select-categ')}</CategorySelected>
                {showCategory.category && <CloseIconSelect size={ICON_SIZE} />}
              </CategoryBtn>
              <CategoryList $showcategory={showCategory.category}>
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
          <OpenIcon size={ICON_SIZE} $showcategory={showCategories.category} />
        </GridItem6> */}

        {/* <GridItem7>
          <Title htmlFor="picture" disabled>
            {t('form-pic')}
          </Title>
          <Input type="text" id="picture" name="picture" disabled />
          <OpenIcon size={20} disabled />
        </GridItem7> */}

        {/* <GridItem8>
          <Title htmlFor="priority">{t('form-priority')}</Title>
          <InputSelect
            type="text"
            id="priority"
            name="priority"
            onClick={() => toggleCategory('priority')}
            value={selectedPriority}
            $showpriority={showCategories.priority}
          />
          {showCategories.priority && (
            <PriorityWrapp>
              <PriorityBtn onClick={() => toggleCategory('priority')}>
                <PrioritySelected>{t('form-select-prior')}</PrioritySelected>
                <CloseIconSelect size={ICON_SIZE} />
              </PriorityBtn>
              <PriorityList $showpriority={showCategories.priority}>
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
          <OpenIcon size={ICON_SIZE} $showpriority={showCategories.priority} />
        </GridItem8> */}
      </GridContainer>
      <BtnWrapp onClick={handleSubmit}>
        <BtnPrimary text={t('btn-form')} icon={false} />
      </BtnWrapp>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
