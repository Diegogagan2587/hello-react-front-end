import { useEffect } from 'react';
import { useState } from 'react';

const Greetings = () => {
  const [greeting, setGreeting] = useState('Not Found');

  useEffect(() => {
    fetch('http://localhost:3000/greetings')
      .then((response) => response.json())
      .then((data) => setGreeting(data.message))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <p>Random Greeting will be displayed below</p>
      <hr />
      <h1>{greeting}</h1>
    </>
  );
};

export default Greetings;
