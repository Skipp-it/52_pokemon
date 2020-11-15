import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./services/component/navbar";
import NotFound from "./services/component/notFound";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import PokemonH from "./services/component/hooks/pokemonH";
import TypeListH from "./services/component/hooks/typeList";
import TypeH from "./services/component/hooks/type";
import PokemonListH from "./services/component/hooks/pokemonListH";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route
              path="/pokemon/:id"
              render={(props) => <PokemonH details="details" {...props} />}
            ></Route>
            <Route
              path="/type/:id"
              render={(props) => <TypeH details="details" {...props} />}
            ></Route>
            <Route path="/pokemons" component={PokemonListH} />
            <Route path="/types" component={TypeListH} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/pokemons" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
