import React from 'react';
import Navbar from './Navbar.js';
import ThemeContextProvider from '../context/ThemeContext.js';
import ThemeToggle from './ThemeToggle';
import CourseList from './CourseList';

function Test() {
  return (
    <div className="Test">
      <ThemeContextProvider>
        <Navbar />
        <CourseList />
        <ThemeToggle/>
     </ThemeContextProvider>
    </div>
  );
}
export default Test;

