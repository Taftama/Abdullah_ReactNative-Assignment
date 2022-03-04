import {GET_POSTS, CREATE_LOGIN, LOGOUT, CREATE_POST} from './actions';
const initialState = {
  posts: [],
  isLogin: false,
};
function getPostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {...state, posts: action.payload};
    case CREATE_LOGIN:
      return {...state, isLogin: action.payload};
    case LOGOUT:
      return {...state, isLogin: action.payload};
    case CREATE_POST:
      return {
        ...state,
        posts: [
          {
            title: action.payload.title,
            body: action.payload.body,
            id: action.payload.id,
          },
        ].concat(state.posts),
      };
    default:
      return state;
  }
}

export default getPostReducer;
