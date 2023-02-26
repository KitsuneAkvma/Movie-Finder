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
`;
