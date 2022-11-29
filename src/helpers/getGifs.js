
export const GetGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ha8UQ1DUTkEVe9hJ9uYsRNYIv2EvtXuH&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))    
    
    return gifs;
}