import React from 'react';

import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import { StyledCast } from './Cast.styled';

const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export function Cast() {
  const location = useLocation();
  const { data, loading, error } = useFetch(
    `${API_URL}/movie/${location.state}/credits?api_key=${API_KEY}&language=en-US`
  );
  const cast = data?.cast;
  console.log({ cast });

  if (loading) return <Loader />;

  if (error) console.log({ error });

  const placeholderMale =
    'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=';
  const placeholderFemale =
    'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc=';

  const choosePhoto = actor => {
    if (actor?.profile_path === null) {
      if (actor?.gender === 1) return placeholderFemale;
      else return placeholderMale;
    } else {
      return `https://image.tmdb.org/t/p/original/${actor?.profile_path}`;
    }
  };
  return (
    <StyledCast>
      <ul aria-label="List of actors">
        {cast?.map(actor => {
          return (
            <li key={actor?.id}>
              <img src={choosePhoto(actor)} alt={actor?.name} width={200} height={250} />
              <div className=''></div>
            </li>
          );
        })}
      </ul>
    </StyledCast>
  );
}
