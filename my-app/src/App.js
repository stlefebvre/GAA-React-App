import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Row, Container } from "./components/Grid";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Living from "./pages/Living";


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }

const App = () => (
  <Container className="container-fluid">
    <Row>
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Places" component={Places} />
            <Route exact path="/Living" component={Living} />
          </Switch>
      </Router>
    </Row>
  </Container>
);

export default App;
