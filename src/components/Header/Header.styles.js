import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(100vw - 48px);
  margin: 0 16px 50px 16px;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 80px;
  width: 100%;
  transition: top 0.2s linear;
`;
