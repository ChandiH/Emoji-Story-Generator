import './App.css'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'
import { Switch, Route } from 'wouter'

function App() {
  return (
    <Switch>
      <Route path="/login" >
        <LoginPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
