import { textColors } from 'assets/styleVariables';
import styled from 'styled-components';

export const StyledHome = styled.main`
  margin-top: 3rem;
  h1 {
    color: ${textColors.second};
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: center;
  }
  .movie {
    transition: transform 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover {
      filter: drop-shadow(5px 5px 10px #000);
      transform: scale(1.02);
    }
  }
`;
