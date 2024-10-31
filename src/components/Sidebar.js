import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed; /* Make it fixed */
  left: 0; /* Align to the left */
  top: 0; /* Align to the top */
  transform: translateX(0); /* Always show sidebar on larger screens */
  transition: transform 0.3s ease; /* Smooth transition */
  z-index: 1000; /* Ensure it's above other content */

  @media (max-width: 768px) {
    width: 200px; /* Adjust width for smaller screens */
    transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')}); /* Slide effect */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const LogoImage = styled.img`
  width: 40px; /* Set the desired width for the logo */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Spacing between image and text */
`;

const LogoText = styled.h2`
  font-size: 24px;
  color: #2f3b66;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #9e9d9d;
  margin: 20px 0 10px; /* Space out section titles */
`;

const MenuItem = styled(Link)`
  font-size: 16px;
  color: #9e9d9d;
  margin: 10px 0; /* Increased margin for better spacing */
  padding: 10px; /* Added padding for more clickable area */
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 5px; /* Rounded corners for better aesthetics */

  &:hover {
    color: red; /* Change color on hover to red */
    background-color: #e0e0e0; /* Light background on hover */
  }
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px; /* Position at the top */
  left: 20px; /* Position from the left */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #2f3b66; /* Button color */
  z-index: 1001; /* Above sidebar */
  
  @media (min-width: 769px) {
    display: none; /* Hide toggle button on larger screens */
  }
`;

const MainContent = styled.div`
  margin-left: 250px; /* Same as sidebar width */
  padding: 20px; /* Add padding for better spacing */
  transition: margin-left 0.3s ease; /* Smooth transition for responsiveness */
  
  @media (max-width: 768px) {
    margin-left: ${(props) => (props.isOpen ? '200px' : '0')}; /* Adjust for sidebar visibility */
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer>
          <LogoImage src="/logo.png" alt="Logo" />
          <LogoText>Vasitum</LogoText>
        </LogoContainer>

        <SectionTitle>Main Menu</SectionTitle>
        <MenuItem to="/">
          <Icon className="fas fa-th" /> Dashboard
        </MenuItem>
        <MenuItem to="/recruitment">
          <Icon className="fas fa-user-plus" /> Recruitment
        </MenuItem>
        <MenuItem to="/schedule">
          <Icon className="fas fa-calendar-alt" /> Schedule
        </MenuItem>
        <MenuItem to="/employee">
          <Icon className="fas fa-users" /> Employee
        </MenuItem>
        <MenuItem to="/department">
          <Icon className="fas fa-building" /> Department
        </MenuItem>

        <SectionTitle>Others</SectionTitle>
        <MenuItem to="/support">
          <Icon className="fas fa-headset" /> Support
        </MenuItem>
        <MenuItem to="/settings">
          <Icon className="fas fa-cog" /> Settings
        </MenuItem>
      </SidebarContainer>
      
      <MainContent isOpen={isOpen}>
        {/* Your main content goes here */}
        
        {/* Add components for Dashboard, Recruitment, Schedule, Employee, and Department here */}
      </MainContent>
    </>
  );
};

export default Sidebar;
