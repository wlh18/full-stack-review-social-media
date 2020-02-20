import React from "react";
import Post from "./Post";
import Edit from "./Edit";

class PostDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false;
    };
  }

  toggleEdit = () => {
    //something goes here
  };

  render() {
    return (
      <>
        {this.state.isEditing ? (
          <Edit
           //something goes here
          />
        ) : (
          <Post
          //something goes here
          />
        )}
      </>
    );
  }
}

export default PostDisplay;
