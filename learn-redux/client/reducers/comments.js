function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {user: action.author, text: action.comment}];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

export default function comments(state = [], action) {
  if(action.postId) {
    return {
       ...state,
       [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}
