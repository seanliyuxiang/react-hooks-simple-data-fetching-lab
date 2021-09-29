// create your App component here

import React, {useState, useEffect} from 'react';

function App() {
  const [dogImageURL, setDogImageURL] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      setDogImageURL(data.message);
      setIsLoaded(true);
    });
  }, []);

  // if data hasn't been loaded, show a loading indicator
  if (!isLoaded) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <img src={dogImageURL} alt='A Random Dog' />
    </>
  );
}

export default App;