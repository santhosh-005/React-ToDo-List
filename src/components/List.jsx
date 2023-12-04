import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div>
        {this.props.inputData.map((el, index) => {
          return (
            <div key={index} id="list">
              <h1>{el}</h1>
              <div>
                <button onClick={() => this.props.handleUpdate(index)} id="update-btn">
                  Update
                </button>
                <button onClick={() => this.props.handleDelete(index)} id="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
