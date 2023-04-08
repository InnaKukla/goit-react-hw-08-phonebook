import styled from 'styled-components';
export const FormAddContact = styled.form`
  width: 600px;
  display: inline-grid;
  font-size: 30px;
  border: 1px solid black;
  padding: 20px 10px 20px 20px;

  input {
    padding-top: 10px;
    margin-top: 10px;
    margin-right: 20px;
    width: 300px;
    font-size: 20px;
    border: 0px solid lightgray;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 2px #cecdcd75;

    :active,
    :hover,
    :focus {
      /* border: 0.5px solid #1f75fe; */
      box-shadow: 0px 0px 5px 0px #d9afd9;
      outline: none;
    }
  }

  label {
    margin-bottom: 20px;
    padding-bottom: 10px;
    display: inline-grid;
  }
  button {
    width: 150px;
    font-size: 20px;
    border-radius: 5px;
    border: 0px solid lightgray;
    box-shadow: 0px 0px 1px 2px #cecdcd75;
    cursor: pointer;
    padding: 5px 5px;

    :hover {
      background-color: #a9c9ff;
      background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
      transform: scale(1.1);
    }
  }
`;
