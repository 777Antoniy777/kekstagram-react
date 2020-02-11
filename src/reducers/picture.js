const initialState = {};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_PICTURE':

      return {
        ...state,
        ...action.picture,
      };
    case 'REMOVE_DATA_PICTURE':
      return action.picture;
    default:
      return state;
  }
}
