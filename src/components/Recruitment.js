
import React from 'react';
import { Container, Card, Header, IncrementText } from './shared';

const Recruitment = () => (
  <Container>
    <Header>Recruitment</Header>
    <Card bgColor="#d8e7ff">
      <IncrementText>+12% Increase</IncrementText>
      <h3>Job Applications</h3>
      <p>54 Total</p>
      <small>8 New this week</small>
    </Card>
    <Card bgColor="#ffe4e1">
      <IncrementText>+8% Growth</IncrementText>
      <h3>Interviews Scheduled</h3>
      <p>18 Scheduled</p>
      <small>5 This week</small>
    </Card>
  </Container>
);

export default Recruitment;
