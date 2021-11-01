import Mainpage from './screens/Mainpage'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route path='/' component={Mainpage} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
