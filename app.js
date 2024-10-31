// App.js
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Activity from './Activity';

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const App = () => (
  <MainContainer>
    <Sidebar />
    <ContentContainer>
      <Dashboard />
      <Activity />
    </ContentContainer>
  </MainContainer>
);

export default App;
