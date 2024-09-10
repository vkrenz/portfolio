/* eslint-disable react/prop-types */
import { useState } from 'react';

import { Field } from 'formik';

const CustomInputField = ({
    type = "text",
    id,
    name,
    placeholder,
    as = "textArea" | "",
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="mb-4 w-full">
            <Field
                as={as}
                type={type}
                id={id}
                name={name}
                className={`
                    form-input w-full p-4 rounded-2xl transition-all duration-300 ease-in-out
                    border-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'}
                    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500
                    hover:border-blue-400
                    shadow-sm ${isFocused ? 'shadow-lg' : 'shadow-md'}
                `}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default CustomInputField;