const initialState = {
  message: 'Hello, Redux!',
};

const counterReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default counterReducer;