import React from "react";

function validateEmail(email) {
    if (!email.includes('@')) {
        return 'Email should contain an @';
    }
    return '';
}

function validateUsername(username) {
    if (username.length < 6) {
        return 'Username must be at least 6 characters long';
    }
    return '';
}

function validatePassword(password) {
    if (password.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return '';
}

const Validation = {
    validateEmail,
    validateUsername,
    validatePassword,
};

export default Validation;
