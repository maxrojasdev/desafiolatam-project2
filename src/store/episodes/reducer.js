import { initialState } from "./initialState";
import {
    GET_EPISODES_INIT,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_ERROR,
    GET_EPISODE_INIT,
    GET_EPISODE_SUCCESS,
    GET_EPISODE_ERROR
} from "./const";

export default function (state = initialState, action){
    switch(action.type) {
        // Reducer de los Characters en plural
        case GET_EPISODES_INIT: {
            return {
                ...state,
                episodesLoading: true
            }
        }
        case GET_EPISODES_SUCCESS: {
            return {
                ...state,
                episodes: action.payload,
                episodesLoading: false,
                episodesError: false
            }
        }
        case GET_EPISODES_ERROR: {
            return {
                ...state,
                episodes: state.episodes,
                episodesLoading: false,
                episodesError: true
            }
        }

        // Reducer de los Characters en singular
        case GET_EPISODE_INIT: {
            return {
                ...state,
                episodeLoading: true
            }
        }
        case GET_EPISODE_SUCCESS: {
            return {
                ...state,
                episode: action.payload,
                episodeLoading: false,
                episodeError: false
            }
        }
        case GET_EPISODE_ERROR: {
            return {
                ...state,
                episode: state.episode,
                episodeLoading: false,
                episodeError: true
            }
        }
        default: {
            return {
                state
            }
        }
    }
}