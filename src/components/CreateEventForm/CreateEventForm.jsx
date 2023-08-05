import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as API from '../../services/api';
import { EventFormWrapp } from './CreateEventForm.styled';

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
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" />

          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="date">Select Date:</label>
          <Field type="date" id="date" name="date" />

          <label htmlFor="time">Select Time:</label>
          <Field type="time" id="time" name="time" />

          <label htmlFor="location">Location:</label>
          <Field type="text" id="location" name="location" />

          <label htmlFor="category">Category:</label>
          <Field as="select" id="category" name="category">
            <option value="art">Art</option>
            <option value="sport">Sport</option>
            <option value="music">Music</option>
            <option value="business">Business</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
            <option value="party">Party</option>
          </Field>

          <label htmlFor="priority">Priority:</label>
          <Field list="priorityOptions" id="priority" name="priority" />
          <datalist id="priorityOptions">
            <option value="High" />
            <option value="Medium" />
            <option value="Low" />
          </datalist>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
