import { useState } from "react";

export const useForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFormsubmit(e) {
    e.preventDefault();
    //perform validations or some logic...
    onSubmit(formData);
  }

  function register(name){
    return {
        name,
        onChange: handleChange,
        value: formData[name] || ""
    }
  }

  return { formData, handleChange, handleFormsubmit, register };
};
