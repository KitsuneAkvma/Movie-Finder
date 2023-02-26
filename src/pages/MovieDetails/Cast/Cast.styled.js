import styled from 'styled-components';

export const StyledCast = styled.section`
  margin-top: 2rem;
  .cast {
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  .Actor {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1 1 25%;
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
`;
