export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'ee0c11a721msh74acdb0e0414c1bp17f7aejsnee53cd06dd10',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
      'x-rapidapi-key': 'ee0c11a721msh74acdb0e0414c1bp17f7aejsnee53cd06dd10',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  };
  