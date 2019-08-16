import {
    GET_EPISODE_ERROR,
    GET_EPISODE_INIT,
    GET_EPISODE_SUCCESS,
    GET_EPISODES_ERROR,
    GET_EPISODES_INIT,
    GET_EPISODES_SUCCESS
} from "./const";
import {getEpisode, getEpisodes} from "./server";


export const getEpisodesAction = url => {
    return dispatch => {
        dispatch({type: GET_EPISODES_INIT});
        getEpisodes(url).then(response => {
            dispatch({type: GET_EPISODES_SUCCESS, payload: response.data})
        }).catch(() => {
            dispatch({type: GET_EPISODES_ERROR})
        })
    }
}

export const getEpisodeAction = url => {
    return dispatch => {
        dispatch({type: GET_EPISODE_INIT});
        getEpisode(url).then(response => {
            dispatch({type: GET_EPISODE_SUCCESS, payload: response.data})
        }).catch(() => {
            dispatch({type: GET_EPISODE_ERROR})
        })
    }
}