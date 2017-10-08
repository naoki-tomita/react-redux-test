import { connect } from 'react-redux'
import { App as AppComponent } from './Component';

function mapStateToProps(state: any) {
  return Object.assign({}, state);
}

export const App = connect(mapStateToProps)(AppComponent);