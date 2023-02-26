import { colors, textColors } from 'assets/styleVariables';
import styled from 'styled-components';

export const StyledMoviesDetails = styled.main`
  margin-top: 2rem;
  h1 {
    margin-bottom: 0.05em;

    color: ${textColors.accent};
    font-size: 2.5em;
    font-weight: 900;
    letter-spacing: 0.1em;
  }
  h2 {
    margin-block: 1em 0.15em;
  }
  nav {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    justify-content: center;

    font-size: 2em;
    font-weight: 700;
  }
  .boldText {
    font-weight: 500;
  }
  .description {
    margin-block: 1rem 2rem;

    font-size: 1.35em;
    letter-spacing: 0.03em;
  }
  .genres {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    margin-top: 0.3em;
  }
  .genre {
    padding: 0.5em;

    background-color: ${colors.tertiary};
    border-radius: 0.2em;
  }
  .navigationItem {
    padding: 0.3em 1em;

    background-color: ${colors.second};
    border-radius: 0.15em;
  }
`;
