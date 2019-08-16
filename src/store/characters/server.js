import axios from 'axios';

export const getCharacters = async url => await axios.get(url);

export const getCharacter = async id => await axios.get(null);