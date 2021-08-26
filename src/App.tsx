import { BrowserRouter as Router, Switch } from 'react-router-dom'
import FrontEndRoutes from './areas'
import './scss/index.scss'

const App: React.FC = () => {
  return (
    <div className='app'>
      <div className='app__body'>
        <Router>
          <Switch>
            <FrontEndRoutes />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
