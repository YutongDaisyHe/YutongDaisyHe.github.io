import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const wrapPageElement = ({ element }) => (
    <BrowserRouter>{element}</BrowserRouter>
);
