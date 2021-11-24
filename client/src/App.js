import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import GameDetails from './components/GameDetails'
import Profile from './components/Profile'
import ShippingAddress from './components/ShippingAddress'
import PaymentMethod from './components/PaymentMethod'
import Checkout from './components/Checkout'
import MyOrder from './components/MyOrder'
import FilterGame from './components/FilterGame'
import Provider from './components/Provider'
import ProviderUpload from './components/ProviderUpload'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container className='main'>
          <Route path="/filter" component={FilterGame} />
          <Route path="/myorder" component={MyOrder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={PaymentMethod} />
          <Route path="/shipping" component={ShippingAddress} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/game/:id" component={GameDetails} />
          <Route path="/register" component={Register} />
          <Route path="/provider/upload" component={ProviderUpload} exact/>
          <Route path="/profile" component={Profile} />
          <Route path="/provider" component={Provider} exact/>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} exact />
        </Container>

      </main>
      <Footer />
    </Router>
  )
}

export default App;
