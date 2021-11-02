import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Game from './components/Game'
import Profile from './components/Profile'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container className='main'>
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/game/:id" component={Game} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} exact />
        </Container>

      </main>
      <Footer />
    </Router>
  )
}

export default App;
