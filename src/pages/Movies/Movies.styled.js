import styled from 'styled-components';
import { colors } from 'assets/styleVariables';
import { textColors } from 'assets/styleVariables';
export const StyledMovies = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 60%;
  }
  input {
    height: 3rem;
    width: 100%;
    padding: 0.15em 1.5em;
    margin-bottom: 1.5rem;

    background-color: ${colors.second};
    outline: none;
    border: none;

    font-size: 1.5em;
    color: ${textColors.primary};
    text-align: center;

    ::placeholder {
      color: ${textColors.tertiary};
    }
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: center;
  }
`;
