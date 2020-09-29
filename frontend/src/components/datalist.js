import React, { useEffect, useState } from 'react'

function Datalist () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch("localhost:5000/list")
            .then(res => res.json())
            .then(
                (result) => {
                  setIsLoaded(true);
                  setItems(result.items);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])
        
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <ul>
                {items.map(item => (
                  <li key={item.name}>
                    {item.name} {item.price}
                  </li>
                ))}
              </ul>
            );
          }
        }

export default Datalist