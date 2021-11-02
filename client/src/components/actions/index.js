import axios from 'axios';
import { FETCH_STRAINS } from './types';

// Fetch Strain canabis
export const fetchStrains = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/strains');
    dispatch({ type: FETCH_STRAINS, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_STRAINS, payload: 'cannot find Order...' });
  }
};
