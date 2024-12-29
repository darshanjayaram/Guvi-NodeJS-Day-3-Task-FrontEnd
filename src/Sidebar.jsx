import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
      <div className='d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white'>
        <h4 className='text-center text-white'>Form Navigations</h4>
        <Nav className="flex-column mt-3 ps-3 gap-3">
        <Link to="/home" className='text-white navbar-link'>Home</Link>
          <Link to="/create-mentor" className='text-white navbar-link'>Create Mentor</Link>
          <Link to="/create-student" className='text-white navbar-link'>Create Student</Link>
          <Link to="/assign-students" className='text-white navbar-link'>Assign Students</Link>
          <Link to="/change-mentor" className='text-white navbar-link'>Change Mentor</Link>
          <Link to="/show-students" className='text-white navbar-link'>Show Students</Link>
          <Link to="/show-previous-mentors" className='text-white navbar-link'>Show Previous Mentors</Link>
        </Nav>
      </div>
      
    </div>
  );
};

export default Sidebar;

