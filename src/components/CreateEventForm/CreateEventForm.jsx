import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as API from '../../services/api';
import {
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
} from './CreateEventForm.styled';

function CreateEventForm() {
  const handleSubmit = async values => {
    try {
      const uniqueId = nanoid();
      const eventData = { ...values, id: uniqueId, image: '' };

      const response = await API.postEvent(eventData);
      console.log('Event created:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
        <Form>
          <GridContainer>
            <GridItem1 style={{ height: '100px' }}>
              <Title htmlFor="title">Title</Title>
              <Input type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </GridItem1>
            <GridItem2 style={{ height: '80px' }}>
              <Title htmlFor="date">Select date</Title>
              <Input type="date" id="date" name="date" />
            </GridItem2>

            <GridItem3 style={{ height: '80px' }}>
              <Title htmlFor="category">Category</Title>
              <Input as="select" id="category" name="category">
                <option value="art">Art</option>
                <option value="sport">Sport</option>
                <option value="music">Music</option>
                <option value="business">Business</option>
                <option value="workshop">Workshop</option>
                <option value="conference">Conference</option>
                <option value="party">Party</option>
              </Input>
            </GridItem3>

            <GridItem4 style={{ height: '180px' }}>
              <Title htmlFor="description">Description</Title>
              <Input as="textarea" id="description" name="description" />
              <ErrorMessage name="description" component="div" />
            </GridItem4>
            <GridItem5 style={{ height: '80px' }}>
              <Title htmlFor="time">Select time</Title>
              <Input type="time" id="time" name="time" />
            </GridItem5>
            <GridItem6 style={{ height: '80px' }}>
              <Title htmlFor="picture">Add picture</Title>
              <Input type="text" id="picture" name="picture" />
              <ErrorMessage name="picture" component="div" />
            </GridItem6>

            <GridItem7 style={{ height: '100px' }}>
              <Title htmlFor="location">Location</Title>
              <Input type="text" id="location" name="location" />
            </GridItem7>
            <GridItem8 style={{ height: '80px' }}>
              <Title htmlFor="priority">Priority</Title>
              <Input as="select" id="priority" name="priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Input>
            </GridItem8>
          </GridContainer>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
