import styled from 'styled-components';

export const PhoneContacts = styled.ul`
  margin-left: 20px;
  font-size: 30px;

  li {
    margin-bottom: 5px;
  }
  button {
    margin-left: 20px;
    width: 80px;
    font-size: 20px;
    border-radius: 5px;
    border: 0px solid lightgray;
    box-shadow: 0px 0px 1px 2px #cecdcd75;
    cursor: pointer;
    padding: 2px 5px;

    :hover {
      background-color: #a9c9ff;
      background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
      transform: scale(1.1);
    }
  }
`;
