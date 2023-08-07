import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.screens.mobile}) {
    padding: 0 24px;
    max-width: ${p => p.theme.screens.mobile};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    padding: 0 40px;
    max-width: ${p => p.theme.screens.tablet};
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    padding: 0;
    max-width: ${p => p.theme.screens.desktop};
  }
`;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form } from 'formik';
// import { nanoid } from 'nanoid';
// import * as API from '../../services/api';
// // import { useEventData } from '../../hooks/useEventData';
// import { toast } from 'react-toastify';
// import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

// import {
//   validateTitle,
//   validateLocation,
// } from '../../validation/inputFormValidation';
// import { BtnPrimary } from '../Buttons/index';

// import defaultImage from '../../images/defaultImage.png';

// import categoryList from '../../data/categories';
// import priorityList from '../../data/priorityList';

// import {
//   BtnWrapp,
//   InputSelect,
//   EventFormWrapp,
//   GridContainer,
//   GridItem1,
//   GridItem2,
//   GridItem3,
//   GridItem4,
//   GridItem5,
//   GridItem6,
//   GridItem7,
//   GridItem8,
//   Title,
//   Input,
//   InputTextArea,
//   Error,
//   ScrubInputBtn,
//   ScrubIcon,
//   CategoryWrapp,
//   CategoryBtn,
//   CategorySelected,
//   CloseIcon,
//   OpenIcon,
//   CategoryList,
//   CategoryItem,
//   PriorityWrapp,
//   PriorityItem,
//   PriorityBtn,
//   PrioritySelected,
//   PriorityList,
// } from './CreateEventForm.styled';

// function CreateEventForm() {
//   const [titleValue, setTitleValue] = useState('');
//   const [descriptionValue, setDescriptionValue] = useState('');

//   const [dateValue, setDateValue] = useState('');
//   const [timeValue, setTimeValue] = useState('');

//   const [locationValue, setLocationValue] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedPriority, setSelectedPriority] = useState('');

//   const [descriptionTouched, setDescriptionTouched] = useState(false);

//   const [showCategory, setShowCategory] = useState(false);
//   const [showPriority, setShowPriority] = useState(false);

//   const [startDate, setStartDate] = useState(new Date());

//   const navigate = useNavigate();
//   const handleSubmit = async () => {
//     try {
//       const uniqueId = nanoid();
//       const eventData = {
//         id: uniqueId,
//         photo: defaultImage,
//         title: titleValue,
//         description: descriptionValue,
//         date: '', // Add the selected date here
//         time: '', // Add the selected time here
//         location: '', // Add the selected location here
//         category: selectedCategory,
//         priority: selectedPriority,
//       };

//       const response = await API.postEvent(eventData);
//       console.log(eventData);
//       toast.success('Event created');
//       navigate('/');
//     } catch (error) {
//       toast.error('Something went wrong. Please try again');
//     }
//   };

//   const handleDescriptionChange = e => {
//     setDescriptionValue(e.target.value);
//     setDescriptionTouched(true);
//   };

//   const handleScrubButtonClick = () => {
//     setDescriptionValue('');
//   };

//   const handleCategoryClick = async category => {
//     setSelectedCategory(category);
//     setShowCategory(false);
//   };

//   const handlePriorityClick = async priority => {
//     setSelectedPriority(priority);
//     setShowPriority(false);
//   };

//   return (
//     <EventFormWrapp>
//       <form onSubmit={handleSubmit}>
//         <GridContainer>
//           <GridItem1>
//             <Title htmlFor="title">Title</Title>
//             <Input
//               type="text"
//               id="title"
//               name="title"
//               value={titleValue}
//               // validate={validateTitle}
//               onChange={e => setTitleValue(e.target.value)}
//               autoComplete="off"
//             />
//             {/* {errors.title || touched.title ? (
//               <ScrubInputBtn
//                 onClick={() => {
//                   handleChange('title')('');
//                 }}
//               >
//                 <ScrubIcon error={touched.title && errors.title} size={16} />
//               </ScrubInputBtn>
//             ) : null}
//             <Error name="title" component="div" /> */}
//           </GridItem1>

//           <GridItem2>
//             <Title htmlFor="description">Description</Title>
//             <InputTextArea
//               as="textarea"
//               id="description"
//               name="description"
//               onBlur={() => setDescriptionTouched(true)}
//               onChange={handleDescriptionChange}
//               value={descriptionValue}
//             />
//             {descriptionTouched && descriptionValue && (
//               <ScrubInputBtn onClick={handleScrubButtonClick}>
//                 <ScrubIcon size={16} />
//               </ScrubInputBtn>
//             )}
//           </GridItem2>

//           <GridItem3>
//             <Title htmlFor="date">Select date</Title>
//             <Input type="text" id="date" name="date" />
//             <DatePicker
//               selected={startDate}
//               onChange={date => setStartDate(date)}
//             >
//               <div>
//                 <button>Exit</button>
//                 <button>Choose date</button>
//               </div>
//             </DatePicker>
//             <OpenIcon size={20} />
//           </GridItem3>

//           <GridItem4>
//             <Title htmlFor="time">Select time</Title>
//             <Input type="text" id="time" name="time" />
//             <OpenIcon size={20} />
//           </GridItem4>

//           <GridItem5>
//             <Title htmlFor="location">Location</Title>
//             <Input
//               type="text"
//               id="location"
//               name="location"
//               // validate={validateLocation}
//               value={locationValue}
//               onChange={e => setLocationValue(e.target.value)}
//               autoComplete="off"
//             />
//             {/* {errors.location || touched.location ? (
//               <ScrubInputBtn
//                 onClick={() => {
//                   handleChange('location')('');
//                 }}
//               >
//                 <ScrubIcon
//                   error={touched.location && errors.location}
//                   size={16}
//                 />
//               </ScrubInputBtn>
//             ) : null}
//             <Error name="location" component="div" /> */}
//           </GridItem5>

//           <GridItem6>
//             <Title htmlFor="category">Category</Title>
//             <div>
//               <InputSelect
//                 type="text"
//                 id="category"
//                 name="category"
//                 onClick={() => setShowCategory(!showCategory)}
//                 value={selectedCategory}
//                 onChange={() => {}}
//                 autoComplete="off"
//               />
//               {showCategory && (
//                 <CategoryWrapp>
//                   <CategoryBtn onClick={() => setShowCategory(!showCategory)}>
//                     <CategorySelected>Select Category</CategorySelected>
//                     {showCategory && <CloseIcon size={20} />}
//                   </CategoryBtn>
//                   <CategoryList $showcategory={showCategory}>
//                     {categoryList.map((item, index) => (
//                       <CategoryItem
//                         key={index}
//                         onClick={() => handleCategoryClick(item)}
//                       >
//                         {item}
//                       </CategoryItem>
//                     ))}
//                   </CategoryList>
//                 </CategoryWrapp>
//               )}
//               <OpenIcon size={20} $showcategory={showCategory} />
//             </div>
//           </GridItem6>

//           <GridItem7>
//             <Title htmlFor="picture" disabled>
//               Add picture
//             </Title>
//             <Input type="text" id="picture" name="picture" disabled />
//             <OpenIcon size={20} disabled />
//           </GridItem7>

//           <GridItem8>
//             <Title htmlFor="priority">Priority</Title>
//             <div>
//               <InputSelect
//                 type="text"
//                 id="priority"
//                 name="priority"
//                 onClick={() => setShowPriority(!showPriority)}
//                 value={selectedPriority}
//                 onChange={() => {}}
//               />
//               {showPriority && (
//                 <PriorityWrapp>
//                   <PriorityBtn onClick={() => setShowPriority(!showPriority)}>
//                     <PrioritySelected>Select Priority</PrioritySelected>
//                     <CloseIcon size={20} />
//                   </PriorityBtn>
//                   <PriorityList $showpriority={showPriority}>
//                     {priorityList.map((item, index) => (
//                       <PriorityItem
//                         key={index}
//                         onClick={() => handlePriorityClick(item)}
//                       >
//                         {item}
//                       </PriorityItem>
//                     ))}
//                   </PriorityList>
//                 </PriorityWrapp>
//               )}
//               <OpenIcon size={20} $showpriority={showPriority} />
//             </div>
//           </GridItem8>
//         </GridContainer>
//         <BtnWrapp>
//           {/* <BtnPrimary text="Add event" to="/" icon={false} type="submit" /> */}
//           <button type="submit">Add</button>
//         </BtnWrapp>
//       </form>
//     </EventFormWrapp>
//   );
// }

// export default CreateEventForm;
