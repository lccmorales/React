import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const onHandleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onHandleReset = () => {
    setFormValues(initialState);
  };

  return { ...formValues, formValues, onHandleInputChange, onHandleReset };
};
