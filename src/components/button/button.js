import React from 'react';
import './button.css';

const Button = ({type, text, onClick}) => (
	<button onClick={onClick} className={`button-container button-container__${type}`}>{text}</button>
);

export default Button;
