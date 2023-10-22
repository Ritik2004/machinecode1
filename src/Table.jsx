import { useState, useEffect } from "react";
import axios from "axios";
const url = "https://reqres.in/api/users";

function Table() {
  const [listval, setListval] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        const sortedData = [...res.data.data];
        sortedData.sort((a, b) => a.first_name.localeCompare(b.first_name));
        setListval(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <table border="1">
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {listval.map((val) => (
          <tr>
            <td>{`${val.first_name} ${val.last_name}`}</td>
            <td>{val.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
