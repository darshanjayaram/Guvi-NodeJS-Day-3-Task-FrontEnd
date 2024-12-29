import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import CreateMentor from './components/CreateMentor';
import CreateStudent from './components/CreateStudent';
import AssignStudents from './components/AssignStudents';
import ChangeMentor from './components/ChangeMentor';
import ShowStudents from './components/ShowStudents';
import ShowPreviousMentors from './components/ShowPreviousMentors';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchMentors = async () => {
    try {
      const response = await axios.get('https://guvi-nodejs-day-3-task-backend.onrender.com/api/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://guvi-nodejs-day-3-task-backend.onrender.com/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchMentors();
    fetchStudents();
  }, []);

  return (
    <Router>
      <div className='container-fluid overflow-hidden'>
        <div className='row vh-100 overflow-auto'>
        <Sidebar />
            <div className="col d-flex flex-column h-sm-100">
              <h1 className="my-4 text-center header-text">Mentor Student Management</h1>
              <Routes>
              <Route path="/" element={<Home mentors={mentors} students={students} />} />
                <Route path="/home" element={<Home mentors={mentors} students={students} />} />
                <Route path="/create-mentor" element={<CreateMentor fetchMentors={fetchMentors} />} />
                <Route path="/create-student" element={<CreateStudent fetchStudents={fetchStudents} />} />
                <Route path="/assign-students" element={<AssignStudents mentors={mentors} students={students} fetchStudents={fetchStudents} />} />
                <Route path="/change-mentor" element={<ChangeMentor mentors={mentors} students={students} fetchMentors={fetchMentors} fetchStudents={fetchStudents} />} />
                <Route path="/show-students" element={<ShowStudents mentors={mentors} />} />
                <Route path="/show-previous-mentors" element={<ShowPreviousMentors students={students} />} />
              </Routes>
              <Footer />
            </div>
            
        </div>
        
      </div>

    </Router>
  );
}

export default App;
