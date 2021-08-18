import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 2px solid #000;
  height: 1.5rem;
  padding: 0.20em 1em;
  border-radius: 3px;

  &:focus,
  &:active {
    outline: none;
    bos-shadow: none;
  }
`

export const Button = styled.button`
  background: #000;
  border-radius: 3px;
  border: 2px solid #000;
  color: #fff;
  height: 2.1rem;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
  font-family: sans-serif;
`