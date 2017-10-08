const initialState: State = {
  chat: {
    messages: [ "aaa", "bbb", "ccc", "ddd" ]
  },
  login: {
    user: {
    },
    loggedIn: false,
  },
};

export interface State {
  chat: {
    messages: string[];
  };
  login: {
    user: {
      email?: string;
      password?: string;
    }
    loggedIn: boolean;
  };
}

type Action = LoginAction | CreateUserAction | UpdateEmailAction | UpdatePasswordAction;

type LoginAction = {
  type: "LOGIN";
};

type CreateUserAction = {
  type: "CREATE_USER";
}

type UpdateEmailAction = {
  type: "UPDATE_EMAIL";
  email: string;
}

type UpdatePasswordAction = {
  type: "UPDATE_PASSWORD";
  password: string;
}

export function reducer(state: State = initialState, action: Action) {
  switch(action.type) {
    case "LOGIN": {
      const newState = Object.assign({}, state);
      newState.login.loggedIn = true;
      return newState;
    }
    case "CREATE_USER": {
      const newState = Object.assign({}, state);
      newState.login.loggedIn = true;
      return newState;
    }
    case "UPDATE_EMAIL": {
      const newState = Object.assign({}, state);
      newState.login.user.email = action.email;
      return newState;
    }
    case "UPDATE_PASSWORD": {
      const newState = Object.assign({}, state);
      newState.login.user.password = action.password;
      return newState;
    }
    default:
      return state;
  }
}