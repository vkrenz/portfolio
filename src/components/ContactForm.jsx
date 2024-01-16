import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDarkMode } from '../DarkModeContext';
import * as Yup from 'yup';

import { AiTwotoneMail } from 'react-icons/ai'

const ContactForm = () => {
const { isDarkMode } = useDarkMode()
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Handle form submission, e.g., send email
    console.log('Form submitted:', values);
    // Reset form after submission
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full `}>
        <div className="w-full flex flex-col gap-8 text-center lg:text-left h-full justify-between items-center lg:items-start">
            <div className={`${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold flex gap-3 items-center justify-center md:justify-start text-base`}>
                    <div className="flex items-center gap-3">
                        <AiTwotoneMail className="w-5 h-5" />
                        <p className="uppercase">Let&apos;s work together</p>
                    </div>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form className="w-full mx-end" action="YOUR_FORMSPREE_OR_NETLIFY_FORMS_URL">
                <div className="mb-4">
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" className="form-input w-full" />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" className="form-input w-full" />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" id="message" name="message" className="form-input w-full" />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                  Submit
                </button>
              </Form>
            </Formik>
        </div>
    </div>
  );
};

export default ContactForm;
