import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {});
    }, 1500);
  }, [navigate]);
  return (
    <>
      <h1>Page not found</h1>
    </>
  );
}
