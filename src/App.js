import React, { Component } from 'react';
import Header from './Shared/Header';
import Carousel from './Shared/Carousel';
import Card from './Shared/Card';
import NewCard from './Shared/NewCard';
import './App.css';
import "mdbreact/dist/css/mdb.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {
  render() {

    return (
      < div  >
        <Header />
        <Carousel />
        <Card />
        <Card />
        <Card />
        <NewCard />


      </div>
    );
  }
}

export default App;