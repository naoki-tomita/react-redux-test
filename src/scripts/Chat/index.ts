import { connect } from 'react-redux'
import { Chat as ChatComponent } from './Component';

function mapStateToProps(state: any) {
  return Object.assign({}, state.chat);
}

export const Chat = connect(mapStateToProps)(ChatComponent);