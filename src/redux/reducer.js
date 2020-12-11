
const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: "yes" },
        { id: 1, text: 'Learn Redux', completed: "no" }
    ]
}

function todosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default todosReducer;