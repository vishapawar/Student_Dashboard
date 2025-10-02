//Anun


import React, { Component } from "react";

class Announcement extends Component {
  constructor() {
    super();
    this.state = {
      message: "📢 New batch starts from 10th October!"
    };
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="alert alert-info text-center">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default Announcement;