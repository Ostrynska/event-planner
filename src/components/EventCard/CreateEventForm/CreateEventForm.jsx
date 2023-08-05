import { Formik, Form, Field, ErrorMessage } from 'formik';

import { EventFormWrapp } from './CreateEventForm.styled';

function CreateEventForm() {
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
        onSubmit={values => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form>
          {/* Input field with label for Title */}
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" />

          {/* Error message for Title */}
          <ErrorMessage name="title" component="div" />

          {/* Textarea field with label for Description */}
          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" />

          {/* Error message for Description */}
          <ErrorMessage name="description" component="div" />

          {/* Input field with label for Select Date */}
          <label htmlFor="date">Select Date:</label>
          <Field type="date" id="date" name="date" />

          {/* Input field with label for Select Time */}
          <label htmlFor="time">Select Time:</label>
          <Field type="time" id="time" name="time" />

          {/* Input field with label for Location */}
          <label htmlFor="location">Location:</label>
          <Field type="text" id="location" name="location" />

          {/* Datalist for Category */}
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

          {/* Datalist for Priority */}
          <label htmlFor="priority">Priority:</label>
          <Field list="priorityOptions" id="priority" name="priority" />
          <datalist id="priorityOptions">
            <option value="High" />
            <option value="Medium" />
            <option value="Low" />
          </datalist>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </EventFormWrapp>
  );
}

export default CreateEventForm;
