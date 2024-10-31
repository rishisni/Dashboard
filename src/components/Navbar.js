import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white; /* Background color */
  padding: 10px 20px;
  color: #2f3b66; /* Text color */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* For absolute positioning of the icon */
  width: 100%; /* Full width for smaller screens */
  max-width: 300px; /* Maximum width for larger screens */

  /* Hide the search bar on small screens */
  @media (max-width: 600px) {
    display: none; /* Hide entire search bar container */
  }
`;

const SearchBar = styled.input`
  padding: 8px 40px 8px 10px; /* Adjusted padding for icon */
  border: 1px solid #ccc; /* Optional: add border */
  border-radius: 5px;
  width: 100%; /* Full width of container */
`;

const SearchIcon = styled.i`
  position: absolute;
  right: 10px; /* Position inside the search bar */
  color: #ccc; /* Color of the search icon */
  cursor: pointer; /* Change cursor to pointer on hover */

  /* Show icon on small screens */
  @media (max-width: 600px) {
    display: block; /* Ensure the icon is displayed */
    color:#ffffff ;
    font-size: 1.2em; /* Adjust size if needed */
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Push icons to the right */
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #ccc; /* Icon color */
  margin-left: 15px;
  cursor: pointer;
  font-size: 1.2em;

  &:hover {
    color: #2f3b66; /* Change color on hover */
  }
`;

const ProfilePic = styled.img`
  width: 40px; /* Adjust size for responsiveness */
  height: 40px; /* Adjust size for responsiveness */
  border-radius: 50%;
  margin-left: 15px;
`;

const UserName = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: #2f3b66; /* Username color */
`;

const DropdownIcon = styled.i`
  margin-left: 5px; /* Space between username and dropdown icon */
`;

const Divider = styled.hr`
  margin: 8px; /* Remove default margin */
  border: none; /* Remove default border */
  height: 1px; /* Height for the line */
  background-color: #dbd9d9; /* Color of the line */
  width: 100%; /* Full width */
`;

// Media queries for responsiveness
const media = {
  phone: '@media (max-width: 600px)',
  tablet: '@media (max-width: 768px)',
  laptop: '@media (max-width: 1024px)',
};

const Navbar = ({ userName, profilePic }) => {
  return (
    <>
      <NavbarContainer>
        <SearchBarContainer>
          <SearchBar type="text" placeholder="Search..." />
          <SearchIcon className="fas fa-search" /> {/* Search icon on the right */}
        </SearchBarContainer>
        <IconContainer>
          {/* Show only the search icon on small screens */}
          <IconButton>
            <SearchIcon className="fas fa-search" style={{ display: 'none' }} />
          </IconButton>
          <IconButton>
            <i className="fas fa-bell"></i>
          </IconButton>
          <IconButton>
            <i className="fas fa-comments"></i>
          </IconButton>
          <ProfilePic src={profilePic} alt="Profile" />
          <UserName>{userName}</UserName>
          <DropdownIcon className="fas fa-chevron-down" /> {/* Down arrow for options */}
        </IconContainer>

        {/* Show the search icon separately on small screens */}
        <IconButton style={{ display: 'none' }}>
          <SearchIcon className="fas fa-search" />
        </IconButton>
      </NavbarContainer>
      <Divider /> {/* Line to differentiate navbar */}
    </>
  );
};

export default Navbar;
