// In your React application
import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/greeting')
      .then(response => response.text()) // Assuming the response is plain text
      .then(message => setGreeting(message));
  }, []);

  return <div>{greeting}</div>;
};

export default Greeting;