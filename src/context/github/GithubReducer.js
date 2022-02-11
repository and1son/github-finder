const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                users: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default githubReducer