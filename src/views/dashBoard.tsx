import React, { Component } from "react";
import { Outlet } from "react-router-dom";
class dashBoard extends Component {
  render() {
    return (
      <>
        dashBoard
        <Outlet />
      </>
    );
  }
}
export default dashBoard;
