import * as React from "react";

export class Chat extends React.Component<any> {
  render() {
    return (
      <div>
        <h1>会話</h1>
        {this.createMessages(this.props.messages)}
      </div>
    );
  }

  createMessages(messages: string[]) {
    return <ul>{messages.map(m => this.createMessage(m))}</ul>
  }

  createMessage(message: string) {
    return <li>{message}</li>
  }
}