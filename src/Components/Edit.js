import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //something goes here
    };
  }

  handleCancel = () => {
 
  };

  handleChange = () => {
    
  };

  render() {
    return (
      <li className="post-container">
        <div>
          <input
            className="post-text"
            value={
              //something goes here
            }
            onChange={
              //something goes here
            }
          />
        </div>
        <div className="post-buttons">
            <button
              className="input-container-button-small"
              onClick={() => {
               //something goes here
              }}
            >
              Cancel
            </button>
            <button
              className="input-container-button-small"
              onClick={() => {
               //something goes here
              }}
            >
              Save
            </button>
        </div>
      </li>
    );
  }
}

export default Edit;
