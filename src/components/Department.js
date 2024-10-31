
import React from 'react';
import { Container, Header, Card } from './shared';

const Department = () => (
  <Container>
    <Header>Department</Header>
    <Card bgColor="#e1f7d5">
      <h3>Technology</h3>
      <p>30 Employees</p>
      <small>Developers, QA, Support</small>
    </Card>
    <Card bgColor="#d5e1f7">
      <h3>Human Resources</h3>
      <p>10 Employees</p>
      <small>Recruiting, Administration</small>
    </Card>
  </Container>
);

export default Department;
