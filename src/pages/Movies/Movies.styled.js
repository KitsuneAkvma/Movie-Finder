import styled from 'styled-components';
import { colors } from 'assets/styleVariables';
import { textColors } from 'assets/styleVariables';
export const StyledMovies = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  min-height: 100vh;
  form {
    width: 80%;
  }
  input {
    height: 3rem;
    width: 100%;
    padding-block: 0.15em;
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
    gap: 1.25rem;
    justify-content: center;
  }
  .movie {
    transition: transform 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover {
      filter: drop-shadow(5px 5px 10px #000);
      transform: scale(1.02);
    }
  }
  .button--load-more {
    padding: 1em 3em;

    background-color: ${colors.accent};
    box-shadow: none;
    border: none;
    border-radius: 2em;

    transition: all 0.22s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
