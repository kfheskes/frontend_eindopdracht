import React from 'react';
import './Button.module.css';


function Button({className, text, type, onClick, disabled, children}) {
    return (
        <button className={className}
                id={text}
                type={type}
                onClick={onClick}
                disabled={disabled}
        >
            {children}


        </button>
    )
}

export default Button