import { connect } from 'react-redux'
import { Login as LoginComponent } from './Component';

function mapStateToProps(state: any) {
  return Object.assign(state.login);
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: () => dispatch({ type: "LOGIN" }),
    create: () => dispatch({ type: "CREATE_USER" }),
    updateEmail: (email: string) => dispatch({ type: "UPDATE_EMAIL", email }),
    updatePassword: (password: string) => dispatch({ type: "UPDATE_PASSWORD", password }),
  };
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);