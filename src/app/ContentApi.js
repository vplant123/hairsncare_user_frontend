// import axios from 'axios';
import BASE_URL from '../Config';

export const getUtilityData = async () => {
  // const response = await axios.post(`${BASE_URL}/utility/getContent`);

  const response = await fetch(`${BASE_URL}/utility/getContent`, {
    method: 'POST'
  });
  return response.data;
};
