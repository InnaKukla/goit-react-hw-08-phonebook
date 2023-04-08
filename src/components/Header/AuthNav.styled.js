import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAuthLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  border: : none;
  color: black;
  font-weight: 500;
  font-size: 30px;
 
  &.active {
    color: white;
    background-color: #a9c9ff;
    background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
  }
`;
