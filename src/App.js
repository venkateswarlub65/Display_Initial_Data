import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  render() {
    //console.log(this.props.user);
    return (
      <div className="App">
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Text</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.props.user.map(function (todos, index) {
              return <tr key={todos.id}>
                <td>{todos.id}</td>
                <td>{todos.text}</td>
                <td>{todos.completed}</td>

              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.todos
  }
}
export default connect(mapStateToProps)(App);
