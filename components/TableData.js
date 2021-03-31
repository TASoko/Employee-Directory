import React from "react";
import API from "../utils/API";
class employeeTable extends Component {
  state = {
    results: [],
    error: ""
  };
  componentDidMount() {
    API.getEmployees()
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            results: result.results
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  render (){
    return(
        <div>
            <tr>
            {results.map(results => (
              <th scope="row" key={results.id}>1</th>
              <td>{results.name.first}</td>
              <td>{results.name.last}</td>
              <td>{results.location.city}</td>
              <td>{results.email}</td>
             <td>{results.phone}</td>
            <td>{results.cell}</td>
            </tr>
             );
        </div>
    );
}
export default employeeTable