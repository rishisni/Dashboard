
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  flex: 1;
`;

export const Card = styled.div`
  background-color: ${(props) => props.bgColor || '#fff'};
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
  color: #2f3b66;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.h1`
  font-size: 24px;
  color: #2f3b66;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  color: #2f3b66;
  margin-bottom: 20px;
`;

export const IncrementText = styled.div`
  font-weight: bold;
  color: #2f3b66;
  margin-bottom: 10px;
`;
