import { colors } from 'assets/styleVariables';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 3rem;

  font-size: 1.5em;
  font-weight: 700;
  .navigation__item {
    padding: 0.5em 3em;

    border-radius: 0.75em;
    background-color: ${colors.primary};
    &:hover {
      filter: brightness(120%);
    }
  }
`;
