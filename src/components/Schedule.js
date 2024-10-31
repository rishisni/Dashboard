
import React from 'react';
import { Container, Header, Card, SectionTitle } from './shared';

const Schedule = () => (
  <Container>
    <Header>Schedule</Header>
    <SectionTitle>Upcoming Interviews</SectionTitle>
    <Card bgColor="#e1f7d5">
      <h3>Interview with Jane Doe</h3>
      <p>Tomorrow at 10:00 AM</p>
    </Card>
    <Card bgColor="#fce1ff">
      <h3>Interview with John Smith</h3>
      <p>Friday at 3:00 PM</p>
    </Card>
  </Container>
);

export default Schedule;
