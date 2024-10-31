
import React from 'react';
import { Container, Header, Card } from './shared';

const Employee = () => (
  <Container>
    <Header>Employee</Header>
    <Card bgColor="#d8e7ff">
      <h3>Total Employees</h3>
      <p>150</p>
      <small>Including new hires</small>
    </Card>
    <Card bgColor="#ffe4e1">
      <h3>Departments</h3>
      <p>5 Active</p>
      <small>HR, Tech, Sales, etc.</small>
    </Card>
  </Container>
);

export default Employee;
