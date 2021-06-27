import React, { Component } from 'react'
import Get from "./Fetch/Get.js";
import "./App.css";
import Post from "./Fetch/Post.js";


export class App extends Component {
  render() {
    return (
      <>
       <Post />
       <Get />
      </>
    )
  }
}

export default App
