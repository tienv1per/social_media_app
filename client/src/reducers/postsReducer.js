const postsReducer = (
    state = {posts: [], loading: false, erorr: false, uploading: false}, 
    action
) => {
    switch(action.type) {
        case "UPLOAD_START":
            return {
                ...state,
                uploading: true,
                error: false,
            }
        case "UPLOAD_SUCCESSFULLY":
            return {
                ...state,
                posts: [action.data, ...state.posts],
                uploading: false,
                error: false,
            }
        case "UPLOAD_FAIL":
            return {
                ...state,
                uploading: false,
                erorr: true,
            }
        default:
            return state;
    }
}

export default postsReducer