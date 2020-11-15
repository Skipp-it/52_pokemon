import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "./common/httpService";
import config from "./common/config.json";

class TypeList extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    //pending > resolved (success) OR rejected (failure)
    const result = await http.get(config.apiEndpoint + "/type");
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
                    <Link to={`/type/${post.url.split("/")[6]}`}>
                      {post.url}
                    </Link>
                  ))
                }
              </td>
              <td>{(post = <Link>{post.url}</Link>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TypeList;
