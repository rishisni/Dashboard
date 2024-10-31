// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Import the Navbar component
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import Recruitment from './components/Recruitment';
import Schedule from './components/Schedule';
import Employee from './components/Employee';
import Department from './components/Department';
import Support from './components/Support';
import Settings from './components/Settings';

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const App = () => {
  const userName = "Rishabh Saini"; // Example user name
  const profilePic = "https://via.placeholder.com/40"; // Example profile picture URL

  return (
    <Router>
      <MainContainer>
        <Sidebar />
        <ContentContainer>
          <Navbar
            userName="Admirra John"
            profilePic="profile.png"
          />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/department" element={<Department />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </ContentContainer>
      </MainContainer>
    </Router>
  );
};

export default App;
