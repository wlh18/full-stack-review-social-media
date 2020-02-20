import React, { Component } from "react";
import PostDisplay from "./PostDisplay";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInput: ""
    };
  }

  componentDidMount() {

  }

  getPosts = () => {
      
  };

  handleChange = e => {
    
  };

  handleClick = () => {
  };

  handleEdit = () => {
   
  };

  handleDelete = () => {
  };

  render() {
    const mappedPosts = this.state.posts.map((post, index) => {
      return (
        <PostDisplay
        //something goes here
        />
      );
    });
    return (
      <>
        <div className="input-container">
          <textarea
            id="new-post"
            cols="60"
            rows="2"
            placeholder="New post..."
            value={
              //something goes here
            }
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button onClick={
            //something goes here
          } className="input-container-button">
            Post
          </button>
        </div>

        <section className="app-body">
          <div className="padding"/>
          <ul className="flex-vertical-center post-feed">{mappedPosts}</ul>
        </section>
      </>
    );
  }
}

export default Dashboard;
