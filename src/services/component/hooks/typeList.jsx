import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../common/httpService";
import config from "../common/config.json";
import { queryAllByPlaceholderText } from "@testing-library/react";

function TypeListH(props) {
  const [types, setTypes] = useState([]);

  //Effect Hook
  useEffect(() => {
    async function getTypes() {
      const result = await http.get(config.apiEndpoint + "/type");
      setTypes(result.data.results);
    }
    getTypes();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {types.map((type) => (
          <tr key={type.name}>
            <td>{type.name}</td>
            <td>
              {
                (type = (
                  <Link to={`/type/${type.url.split("/")[6]}`}>{type.url}</Link>
                ))
              }
            </td>
            <td>{(type = <Link>{type.url}</Link>)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TypeListH;
