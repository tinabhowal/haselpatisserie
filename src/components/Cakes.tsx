import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Cakes = () => {
  const cakes = useSelector((state:RootState) => state.cakes.cakes);
  console.log('Cakes from Redux store:', cakes);

  if(!cakes){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>Cakes</h2>
      <ul>
      {cakes.map((cake) => (
        <li key={cake.Name}>
          <p>{cake.Name}</p>
          <img src={cake.ImagePath} alt={cake.Name} />
          <p>{cake.Description}</p>
          <p>{cake.Ingredients}</p>
          <p>{cake.Theme}</p>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Cakes