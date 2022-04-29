const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADO_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELET_TODO":
      return {
        ...state,
        
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      default:
          return state;

  }
};

export default reducer;
