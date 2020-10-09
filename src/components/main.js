import React from 'react';
import Navbar from './navbar';
import Search from './search';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default Main;