import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieSearch from "../MovieSearch/MovieSearch";

function App() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={MovieSearch} />
      </Switch>
    </Router>
  );
}

export default App;
