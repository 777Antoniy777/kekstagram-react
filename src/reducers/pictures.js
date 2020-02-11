const initialState = [];

export default function createState(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_PICTURES':

      return [
        ...state,
        ...action.pictures,
      ];
    case 'REMOVE_DATA_PICTURES':
      return action.pictures;
    default:
      return state;
  }
}
