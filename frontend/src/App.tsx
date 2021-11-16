import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeScreen } from './screens/HomeScreens';
import { ProductScreens } from './screens/ProductScreens';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreens} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
