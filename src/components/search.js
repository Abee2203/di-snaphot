import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    setImages([])
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=30`,
        {
          headers: {
            Authorization: 'AuGyEw44gW6O3UEEl8yEqlxXPGI9CzRSCqzZzSyZJfWkLzwC2UPEPAYQ',
          },
        }
      );
      setImages(response.data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <input
        type="text"
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {images.map((image) => (
        <img key={image.id} src={image.src.medium} alt={image.photographer} />
      ))}
    </div>
  );
};

export default Search;
