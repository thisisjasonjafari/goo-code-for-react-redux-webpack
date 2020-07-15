import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Header administration</h1>
      <p>some code is available here to watch</p>
      <Link to="about" className="btn btn-primary btn-lg">
        learn more
      </Link>
    </div>
  );
}

export default HomePage;