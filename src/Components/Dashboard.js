import React, { Component } from 'react'
import PostContainer from './PostContainer'

//TODO Write all methods, connect to store, connect methods to jsx.
class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      userInput: '',
    }
  }

  componentDidMount() {}

  getPosts = () => {}

  handleChange = (e) => {}

  handleClick = () => {}

  handleEdit = () => {}

  handleDelete = () => {}

  render() {
    const mappedPosts = this.state.posts.map((post, index) => {
      return (
        <PostContainer
        //something goes here
        />
      )
    })
    return (
      <>
        <div className="input-container">
          <textarea
            id="new-post"
            cols="60"
            rows="2"
            placeholder="New post..."
            value={() => {
              //something goes here
            }}
            onChange={() => {
              //something goes here
            }}
          />
          <button
            onClick={() => {
              //something goes here
            }}
            className="input-container-button"
          >
            Post
          </button>
        </div>

        <section className="app-body">
          <div className="padding" />
          <ul className="flex-vertical-center post-feed">{mappedPosts}</ul>
        </section>
      </>
    )
  }
}

export default Dashboard
