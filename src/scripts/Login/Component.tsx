import * as React from "react";

export class Login extends React.Component<any> {
  public render() {
    return (
      <div>
        <h1>ログイン</h1>
        <div>メールアドレス:<input value={this.props.user.email} onChange={this.updateEmail}/></div>
        <div>パスワード:<input value={this.props.user.password} onChange={this.updatePassword}/></div>
        <button onClick={this.props.login}>ログイン</button><button>新規作成</button>
      </div>
    );
  }

  private updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateEmail(event.target.value);
  }

  private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updatePassword(event.target.value);
  }
}