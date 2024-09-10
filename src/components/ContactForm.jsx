import data from '../data'

import CustomInputField from './CustomInputField';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDarkMode } from '../DarkModeContext';
import * as Yup from 'yup';

import { AiTwotoneMail } from 'react-icons/ai'
import { LiaLinkSolid } from 'react-icons/lia'

const ContactForm = () => {
    const { socials } = data
    const { isDarkMode } = useDarkMode()
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const splitSocials = (arr, size = 3) => {
        const split = []
        for (let i = 0; i < arr.length; i += size) {
            split.push(arr.slice(i, i + size))
        }
        return split
    }

    const newSocials = splitSocials(socials)

    const validationSchema = Yup.object({
        name: Yup.string().required('A Name is required'),
        email: Yup.string().email('Invalid email address').required('An Email is required'),
        message: Yup.string().required('A Message is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        // Handle form submission, e.g., send email
        console.log('Form submitted:', values);
        // Reset form after submission
        resetForm();
        setSubmitting(false);
    };

    return (
        <div className="flex flex-col gap-8">
            <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full`}>
                <div className="w-full flex flex-col gap-8 text-center lg:text-left h-full justify-between items-center lg:items-start">
                    <div className={`${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold flex gap-3 items-center justify-center md:justify-start text-base`}>
                            <div className="flex items-center gap-3">
                                <AiTwotoneMail className="w-5 h-5" />
                                <p className="uppercase">Let&apos;s work together</p>
                                {/* <p>🚧 WIP 🚧</p> */}
                            </div>
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="w-full mx-end" action="YOUR_FORMSPREE_OR_NETLIFY_FORMS_URL">
                        <div className="flex gap-8 items-center">
                            <div className="mb-4 w-full">
                                <CustomInputField 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={"What's your name?"
                                }/>
                                {/* <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name="name" className="form-input w-full rounded-2xl" /> */}
                            </div>
                            <div className="mb-4 w-full">
                                <CustomInputField 
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder={"What's your email?"
                                }/>
                                {/* <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" className="form-input w-full rounded-2xl" /> */}
                            </div>
                        </div>
                        <div className="mb-4">
                            {/* <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" className="form-input w-full rounded-2xl" /> */}
                            <CustomInputField 
                                    as="textArea"
                                    type="textArea"
                                    id="email"
                                    name="email"
                                    placeholder={"Feel free to drop a message!"
                            }/>
                        </div>
                        <div className="flex gap-8 items-center">
                            <ErrorMessage name="name" component="div" className="text-white bg-red-500  w-full rounded-xl my-5 p-5 text-center" />
                            <ErrorMessage name="email" component="div" className="text-white bg-red-500  w-full rounded-xl my-5 p-5 text-center" />
                            <ErrorMessage name="message" component="div" className="text-white bg-red-500 w-full rounded-xl my-5 p-5 text-center" />
                        </div>
                        <button type="submit" className="medium-bg-color text-white px-4 rounded-2xl p-5 w-full mt-5">
                            Submit
                        </button>
                        <div className="flex items-center justify-center mt-5">
                            <p className="text-sky-500">Form doesn&apos;t work yet</p>
                        </div>
                    </Form>
                    </Formik>
                </div>
            </div>
            <div className={`w-full ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl flex flex-col gap-3`}> {/** Right Column */}
                <div className={`flex items-center gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold mb-5 justify-center md:justify-start text-base`}>
                    <LiaLinkSolid className="h-5 w-5" />
                    Socials
                </div>
                <div className="flex flex-row gap-3 h-full md:justify-around w-full">
                    {newSocials.map((chunk, index) => (
                        <div key={index} className="flex gap-3 h-full w-full">
                            {chunk.map((social, index) => (
                                <div key={index} className={`transition shadow-lg ${isDarkMode ? 'extra-light-bg-color' : 'dark-bg-color'} expand-hover transition cursor-pointer w-full h-full rounded-2xl flex items-center justify-center ${isDarkMode ? 'dark-text-color' : 'text-white'} text-5xl flex-col py-5 `}>
                                    <a href={social.link} target="new" className="flex flex-col gap-3 justify-center items-center">
                                        {social.icon}
                                        <span className="text-xs">{social.handle}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default ContactForm;
