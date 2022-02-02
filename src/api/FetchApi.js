import React, { Component } from "react";

// class FetchApi extends Component {
const FetchApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const data = await response.json();

    return data;

    //   await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    //   res.json().then((result) => {
    //     console.log(result);
    //     return result;
    //   })
    // );
  } catch (e) {
    console.log(e);
  }
};

//   render() {
//     return;
//   }
// }

export default FetchApi;
