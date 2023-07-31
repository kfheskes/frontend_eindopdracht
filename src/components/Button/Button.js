import React from 'react';
import './Button.module.css';
import Beer_empty from "../../assets/Beer empty.png"
import Beer_full from "../../assets/Bier full.png"

function Button ({className, text, type, onClick, disabled, children}) {
    return (
        <button className={className}
                id={text}
                type={type}
                onClick={onClick}
                disabled={disabled}
                >
            {children}

            {/*{Beer_empty && <img src={Beer_empty} alt='Beer_empty' className="beer_empty"/>}*/}
            {/*{Beer_full && <img src={Beer_full} alt='Beer_full' className="beer_full"/>}*/}
        </button>
    )
}

export default Button