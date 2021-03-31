import React,  { Component } from "react";
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

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">City</th>
              <th scope="col">County</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Cell Number</th>
            </tr>
          </thead>
          <tbody>
           {results.map(results => (
            <tr>
              <th scope="row" key={results.id}>{results.results}</th>
              <td>{results.name.first} {results.name.last} {results.location.city} {results.location.country} {results.email} {results.phone} {results.cell}</td>
            </tr>
             ))};
          </tbody>
        </table>
      </div>
    );
  }
}

export default employeeTable;