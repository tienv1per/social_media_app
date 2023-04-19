import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({type: "RETRIEVE_START"});
    try {
        const {data} = await PostApi.getTimelinePosts(id);
        dispatch({type: "RETRIEVE_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "RETRIEVE_FAIL"});
    }
}

// export const getTimelinePosts = (id) => async (dispatch) => {
//     dispatch({type: "RETRIEVE_START"});
//     try {
//         const {data} = await PostApi.getTimelinePosts(id);
//         dispatch({type: "RETRIEVE_SUCCESS", data: data});
//     } catch (error) {
//         console.log(error);
//         dispatch({type: "RETRIEVE_FAIL"});
//     }
// }