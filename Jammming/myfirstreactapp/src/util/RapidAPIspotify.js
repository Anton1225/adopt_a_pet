import axios from 'axios'

const rapidAPIspotify = {
getSongs(q) {
    let options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: q,
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '02262c8ea4msh098f24d5a81acf9p1ccbccjsnfc93e215837a',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }
   return axios.request(options).thenthen(response => {
    return response.json();
  }).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  });
}
}

export default rapidAPIspotify;