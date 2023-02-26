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
  .movie__info__label {
    margin-bottom: 0.5em;

    color: ${textColors.tertiary};
    font-size: 2em;
    font-weight: 500;
  }
  .movie__wrapper {
    display: flex;
    gap: 5rem;
  }
  .movie__details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &__tagline {
      display: block;
      margin-block: 3rem;
      margin-inline: auto;

      filter: brightness(80%);
      color: ${textColors.tertiary};
      font-size: 3em;
      font-style: italic;
      letter-spacing: 0.09em;
      text-align: center;
      text-shadow: 4px 1px 17px rgba(152, 153, 161, 1);
    }
    &__rating {
      &__content {
        font-size: 1.35em;
      }
    }
    &__companies {
      &__content {
        font-size: 1.35em;
        letter-spacing: 0.03em;
      }
    }
    &__countries {
      &__content {
        font-size: 1.35em;
        letter-spacing: 0.03em;
      }
    }
    &__homepage {
      &__content {
        font-size: 1.35em;
        letter-spacing: 0.03em;
        text-decoration: underline ${colors.accent};
        &:hover {
          color: ${colors.accent};
          text-decoration: none;
        }
      }
    }
  }
  .movie__overview {
    margin-block: 1rem 2rem;

    &__content {
      font-size: 1.35em;
      letter-spacing: 0.03em;
    }
  }

  .movie__genres {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    margin-top: 0.3em;
    &__item {
      padding: 0.5em;

      background-color: ${colors.tertiary};
      border-radius: 0.2em;
    }
  }

  .navigation__item {
    padding: 0.3em 1em;

    background-color: ${colors.second};
    border-radius: 0.15em;
    transition: transform 0.33s cubic-bezier(0.23, 1, 0.32, 1), filter 0.33s cubic-bezier(0.23, 1, 0.32, 1);
    &:hover {
      filter: brightness(90%);
      transform: scale(1.1);
    }
  }
  .span {
    &--bold-text {
      font-weight: 500;
    }
    &--rating {
      font-size: 1.5em;
      font-weight: 500;
    }
  }
`;
