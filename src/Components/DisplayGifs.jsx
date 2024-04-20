import React from 'react';
import useFetchDataApi from '../Hook/Hook';
import AddImageItem from './AddImageItem';

const DisplayGifs = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=lJdgnNYTZ0o1O3hPfyTBXZh8aKUBwQPu&q=${category}&limit=10`;
  const { loading, data } = useFetchDataApi(url);

  return (
    <div className='container-gifs'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(data) && // Check if data is an array
        data.map(img => (
          <AddImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
        ))
      )}
      
    </div>
  );
};

export default DisplayGifs;
