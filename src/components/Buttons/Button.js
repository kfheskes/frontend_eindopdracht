import React from 'react';
import '../../components/Buttons/Button.module.css';


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