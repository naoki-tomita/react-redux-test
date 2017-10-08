import * as React from "react";
// import { State } from "../reducer";
import { Login } from "../Login";
import { Chat } from "../Chat";

export class App extends React.Component<any> {
  public render() {
    return (
      <div>
        {!this.props.loggedIn && <Login />}
        {this.props.loggedIn && <Chat />}
      </div>
    );
  }
}