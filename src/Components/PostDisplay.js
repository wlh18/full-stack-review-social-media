import React from "react";

class PostDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    return (
      <li className="post-container">
        <div>
          <p className="post-text">{this.props.post.text}</p>
        </div>
        <div className="post-buttons">
          {this.state.isEditing ? (
            <div className="edit-wrapper">
              <button></button>
              <button></button>
            </div>
          ) : (
            <div className="edit-wrapper">
              <button
                className="input-container-button-small"
                onClick={() => {
                  this.toggleEdit();
                  this.props.handleEdit();
                }}
              >
                edit
              </button>
            </div>
          )}
          <button className="input-container-button-small">delete</button>
        </div>
      </li>
    );
  }
}

export default PostDisplay;
