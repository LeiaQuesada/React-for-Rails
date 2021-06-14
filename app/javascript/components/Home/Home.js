import React, { Component } from "react";
import Jumbotron from "./Jumbotron";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      course_modules: [
        {
          id: 1,
          title: "Setting up a new Ruby on Rails App with React",
          description: "lorem ipsum",
          active: false,
        },
        {
          id: 2,
          title: "Adding React to an Existing Rails App",
          description: "lorem ipsum",
          active: false,
        },
        {
          id: 3,
          title: "Building a Hello World App",
          description: "lorem ipsum",
          active: false,
        },
        {
          id: 4,
          title: "Adding React Router Dom to your App",
          description: "lorem ipsum",
          active: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
