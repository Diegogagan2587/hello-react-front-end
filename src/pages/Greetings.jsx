import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import getGreeting from '../redux/getGreeting';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <>
      <p>Random Greeting will be displayed below</p>
      <hr />
      <h1>{greeting.message}</h1>
    </>
  );
};

export default Greetings;
