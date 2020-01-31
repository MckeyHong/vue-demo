const axios = require('axios').default;

export const getCourses = () => axios.get('https://api.hiskio.com/v1/courses?order=FEEDBACK&limit=9');
