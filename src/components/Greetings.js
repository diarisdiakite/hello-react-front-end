import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/reducers/greetingSlice';

function Greetings() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting.message);

  useEffect(() => {
    dispatch(fetchMessage())
      .then(() => {
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Fetch Error:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{message || 'Default message'}</p>
    </div>
  );
}

export default Greetings;
