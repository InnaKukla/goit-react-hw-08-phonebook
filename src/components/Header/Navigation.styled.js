import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 30px;
  &.active {
    color: white;
    background-color: #a9c9ff;
    background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
  }
`;
