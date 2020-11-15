import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./services/component/navbar";
import PokemonList from "./services/component/pokemonList";
import NotFound from "./services/component/notFound";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import TypeList from "./services/component/typeList";
import Pokemon from "./services/component/pokemon";
import Type from "./services/component/type";
import PokemonH from "./services/component/hooks/pokemonH";

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
              render={(props) => <Type details="details" {...props} />}
            ></Route>
            <Route path="/pokemons" component={PokemonList} />
            <Route path="/types" component={TypeList} />
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
