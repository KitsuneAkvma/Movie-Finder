import React from 'react';

import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import { StyledReviews } from './Reviews.styled';

const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export function Reviews() {
  const location = useLocation();

  const { data, loading, error } = useFetch(
    `${API_URL}/movie/${location.state}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const reviews = data?.results;
  const userImage = 'https://i.pinimg.com/originals/62/ca/d3/62cad3f091e19cb4825345b50a3e9c5c.jpg';

  console.log({ reviews });

  if (loading) return <Loader />;

  if (error) console.log({ error });

  return (
    <StyledReviews>
      {reviews?.length === 0 && (
        <section className='not-found'>
          <h2 className='not-found__header'>Sorry...</h2>
          <h3 className='not-found__desc'>There are no reviews at the moment 😔</h3>
        </section>
      )}
      <ul className="reviews-list" aria-label="Reviews">
        {reviews?.map(review => {
          return (
            <li className="review" key={review.id}>
              <div className="review-user">
                <img src={userImage} alt="user" className="review-photo" width={150} height={150} />{' '}
                <div className="review-author" aria label="Author">
                  {review.author}
                </div>
              </div>

              <div className="review-content" aria-label="content">
                {review.content}
              </div>
            </li>
          );
        })}
      </ul>
    </StyledReviews>
  );
}
