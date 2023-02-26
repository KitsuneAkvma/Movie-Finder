import { colors, textColors } from 'assets/styleVariables';
import styled from 'styled-components';

export const StyledReviews = styled.section`
  width: 100%;
  margin-top: 2rem;
  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
  }
  .review {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 90%;
    height: 15rem;
    padding: 1em;

    background-color: ${colors.second};
    border-radius: 2em;
  }
  .review-user {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .review-author {
    font-size: 1.5em;
    color: ${textColors.accent};
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  .review-photo {
    border-radius: 2em;
  }
  .review-content {
    height: 12rem;
    overflow-y: scroll;

    font-size: 1.25em;
    color: ${textColors.second};
  }
`;
