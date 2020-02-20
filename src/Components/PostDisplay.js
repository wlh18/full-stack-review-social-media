import React from "react";
import Post from "./Post";
import Edit from "./Edit";

class PostDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    return (
      <>
        {this.state.isEditing ? (
          <Edit
            id={this.props.post.post_id}
            text={this.props.post.text}
            toggleEdit={this.toggleEdit}
            handleEdit={this.props.handleEdit}
          />
        ) : (
          <Post
            id={this.props.post.post_id}
            text={this.props.post.text}
            toggleEdit={this.toggleEdit}
            handleDelete={this.props.handleDelete}
          />
        )}
      </>
    );
  }
}

export default PostDisplay;
