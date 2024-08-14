import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.scss';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.error('Câmp obligatoriu!');
    } else {
      toast.success('Formular trimis cu succes!');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={inputValue ? '' : 'input-error'}
        />
        <button type="submit">Trimite</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
