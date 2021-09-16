import axios from 'axios';
import React, { useState, useEffect } from 'react';

const instance = axios.create({
  baseURL: 'http://localhost:3333/',
});

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    instance.get('/').then(({ data }) => setUser(data));
  }, []);

  return (
    <div className="app a">
      <h1> Hello {user?.name}</h1>
      <h2>I'm {user?.age}</h2>
      <h2>I'm working as {user?.job}</h2>
    </div>
  );
};

export default App;
