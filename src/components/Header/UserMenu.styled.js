import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;


  p{
    font-family: "Roboto", sans-serif;
color: #808080;
font-weight: 700;
font-size: 18px;
line-height: 1.14;
letter-spacing: 0.03em;
text-transform: uppercase;

  }
  button {
    padding: 8px 16px;
    border-radius: 4px;
    color: black;
    font-weight: 600;
    font-size: 25px;
    cursor: pointer;
    margin-left: 20px;
    background-color: white;
    border: none;

    :hover {
      background-color: #a9c9ff;
      background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
      color: white;
      transform: scale(1.1);
    }
  }
`;
