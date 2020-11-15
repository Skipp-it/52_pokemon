import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "./common/httpService";
import config from "./common/config.json";

class PokemonList extends Component {
  state = {
    posts: [],
  };

  //live Hook
  async componentDidMount() {
    //pending > resolved (success) OR rejected (failure)
    const result = await http.get(config.apiEndpoint + "/pokemon");
    const posts = [...result.data.results];
    this.setState({ posts });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((post) => (
            <tr key={post.name}>
              <td>{post.name}</td>
              <td>
                {
                  (post = (
                    <Link to={`/pokemon/${post.url.split("/")[6]}`}>
                      {post.url}
                    </Link>
                  ))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PokemonList;
