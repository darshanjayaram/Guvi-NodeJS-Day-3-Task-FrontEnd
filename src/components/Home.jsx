import React, { useState } from 'react';
import axios from 'axios';

// const Home = ({ students }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const totalStudents = async (e) => {
//     try {
//       const response = await axios.post('https://guvi-nodejs-day-3-task-backend.onrender.com/api/students');
//       alert(response.data.message);  // Show success message
//       setName('');
//       setEmail('');
//       fetchMentors();
//     } catch (error) {
//       console.error('Error creating mentor:', error);
//     }
//   };

//   return (
//     <div className='container mt-4 py-4 create-mentor'>
//       <div className='row d-flex justify-content-center'>
//         <div className='col-sm-11 col-md-10 col-lg-8 col-xl-6'>
//           <h2 className='text-center mb-3'>Home</h2>
//           <div className='col-sm-12'>
//             <div className='row'>
//                 <div>Total Students:</div>
//                 <div>{totalStudents}</div>
//                 {students
//                 .filter((student) => !student.mentor)
//                 .map((student) => (
//                   <div key={student._id} className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id={`student-${student._id}`}
//                       value={student._id}
//                       onChange={handleStudentChange}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`student-${student._id}`}
//                     >
//                       {student.name}
//                     </label>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Home = ({ mentors, students }) => {

    return (
        <div className="container py-4 mt-4 assign-students">
            <div className='col-sm-12 d-flex justify-content-center'>
                <h2 className='text-center mb-3'>Index</h2>
            </div>
            <div className='row d-flex justify-content-center px-2'>
                <div className='col-sm-3'>
                    <div className='card home-card'>
                        <strong className='mb-2 available-students'>Total Students: {students.length}</strong>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='card home-card'>
                        <strong className='mb-2 available-students'>Total Mentors: {mentors.length}</strong>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='card home-card'>
                        <strong className='mb-2 available-students'>Students not Assigned: {students.filter((student) => !student.mentor).length}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
