import styled from 'styled-components';

// Booth Component

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--beige);
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 20px;
`;

const Title = styled.div`
  font-size: 16px;
  color: var(--green1);
  font-family: var(--pre-font);
  font-weight: 700;
  margin: 12px 0 12px 0;
`;

const Input = styled.input`
  outline: none;
  border: 0.4px solid var(--green1);
  border-radius: 4px;
  background-color: var(--white);
  padding: 10px;
  font-family: var(--pre-font);
`;

const TextArea = styled.textarea`
  height: ${props => (props.height ? props.height : '100px')};
  resize: none;
  outline: none;
  border: 0.4px solid var(--green1);
  border-radius: 4px;
  background-color: var(--white);
  padding: 10px;
`;

const OpenWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  margin: 0 12px 0 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  align-items: center;
  width: 96px;
  height: 30px;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  border-radius: 4px;
  color: ${props =>
    props.type === 'submit' ? 'var(--white)' : 'var(--green2)'};
  background-color: ${props =>
    props.type === 'submit' ? 'var(--green2)' : 'var(--white)'};
  border: 0.4px solid var(--green2);
  margin: 16px 0 0 12px;
`;

export const B = {
  Wrapper,
  ComponentContainer,
  Title,
  Input,
  TextArea,
  OpenWrapper,
  Label,
  ButtonWrapper,
  Button,
};
