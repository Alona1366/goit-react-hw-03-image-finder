import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImage = async ({ page = '', searchQuery = '' }) => {
  const response = await axios.get('/', {
    params: {
      q: searchQuery,
      page,
      key: '7942731-4051e2b7897b2b5d28b98eeac',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  // return response.data.hits;
  return response.data;
};

export default fetchImage;