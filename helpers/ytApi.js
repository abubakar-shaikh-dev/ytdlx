export async function ytApi(ytId) {
  try {
    const url = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${ytId}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6fabfe3ba0msha10853256d5c5f9p1c1247jsnf1625ea46cb6',
		'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
	}
};
    const response = await fetch(url, options);
    const result = await response.json();
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject({msg:error});
  }
}
