// import { useParams, useNavigate } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import {
//   CardDetailsContent,
//   CardDetailsWrapp,
//   CardDetailsImage,
//   CardDetailsText,
//   CardDetailsInf,
//   CardDetailsBtnsList,
// } from './EventDetails.styled';

// import { BtnCardDetails } from '../Buttons/index';

// function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadEventData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8800/events/${id}`);
//         setEvent(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadEventData();
//   }, [setEvent, id]);

//   const handleDeleteEvent = async () => {
//     try {
//       await axios.delete(`http://localhost:8800/events/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const {
//     image,
//     title,
//     supportingText,
//     category,
//     priority,
//     date,
//     time,
//     location,
//   } = event;

//   return (
//     <CardDetailsWrapp key={id}>
//       <h2>{title}</h2>
//       <CardDetailsContent>
//         <CardDetailsImage>
//           <img src={image} alt={title} />
//         </CardDetailsImage>
//         <CardDetailsInf>
//           <CardDetailsText>{supportingText}</CardDetailsText>
//           <ul>
//             <li>{category}</li>
//             <li>{priority}</li>
//             <li>{location}</li>
//             <li>
//               {date} at {time}
//             </li>
//           </ul>
//           <CardDetailsBtnsList>
//             <li>
//               <BtnCardDetails solid={false} text="Edit" to={`/edit/${id}`} />
//             </li>
//             <li>
//               <BtnCardDetails
//                 text="Delete event"
//                 solid={true}
//                 onClick={() => handleDeleteEvent(id)}
//               />
//             </li>
//           </CardDetailsBtnsList>
//         </CardDetailsInf>
//       </CardDetailsContent>
//     </CardDetailsWrapp>
//   );
// }

// export default EventDetails;
