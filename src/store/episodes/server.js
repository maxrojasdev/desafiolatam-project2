import axios from 'axios';

export const getEpisodes = async url => await axios.get(url);

export const getEpisode = async id => await axios.get(null);