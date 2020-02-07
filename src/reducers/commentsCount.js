const initialState = 5;

export default function createState(state = initialState, action) {
  switch (action.type) {
    case 'SET_COUNT':
      return action.count + state;
    case 'RESET_COUNT':
      return action.count;
    default:
      return state;
  }
}
