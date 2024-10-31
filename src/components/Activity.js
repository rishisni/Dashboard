
import React from 'react';
import styled from 'styled-components';

const ActivityContainer = styled.div`
  background-color: #2f3b66;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const ScheduleContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  color: #2f3b66;
`;

const Activity = () => (
  <div>
    <ActivityContainer>
      <h3>Recently Activity</h3>
      <p>You Posted a New Job</p>
      <button className="btn btn-danger">See All Activity</button>
    </ActivityContainer>

    <ScheduleContainer>
      <h3>Upcoming Schedule</h3>
      <p>Review candidate applications - Today, 11:30 AM</p>
      <p>Interview with candidates - Today, 10:30 AM</p>
      <button className="btn btn-primary">Create a New Schedule</button>
    </ScheduleContainer>
  </div>
);

export default Activity;
