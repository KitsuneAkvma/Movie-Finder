import { colors } from 'assets/styleVariables';
import styled from 'styled-components';

export const StyledCast = styled.section`
  border-top: 5px solid ${colors.accent};
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 2rem;
  width: 100%;
  min-height: 30rem;
  .cast {
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  .Actor {
    width: 20rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1 1 30rem;
  }
  .actor-photo {
    border-radius: 0.25em;
    min-width: 200px;
    min-height: 250px;
  }
  .actor-information {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .actor-name {
    font-size: 2em;
    font-weight: 500;
  }
  .actor-role {
    font-size: 1.75em;
  }
  .not-found {
    &__header {
      font-size: 3em;
      font-weight: 900;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }
    &__desc {
      font-size: 1.75em;
    }
  }
`;
