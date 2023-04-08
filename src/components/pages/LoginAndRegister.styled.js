import styled from 'styled-components';

export const FormLoginAndRegisterContact = styled.form`
  margin-left: 25%;
  justify-content: space-around;
  width: 600px;
  display: inline-grid;
  font-size: 30px;
  border: 0.5px solid lightgray;
  border-radius: 15px;
  padding: 80px 40px;

  input {
    padding-top: 15px;
    margin-top: 10px;
    width: 450px;
    font-size: 20px;
    border: 0 solid lightgray;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 2px #cecdcd75;

    :active,
    :hover,
    :focus {
      /* border: 0.5px solid #1f75fe; */
      box-shadow: 0px 0px 5px 0px #D9AFD9;
      outline: none;
    }
  }

  label {
    margin-bottom: 30px;
    padding-bottom: 10px;
    display: inline-grid;
  }
  button {
    width: 150px;
    margin-left: 30%;
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
