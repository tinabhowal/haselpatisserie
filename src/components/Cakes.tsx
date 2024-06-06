import React from 'react';

interface CakesType {
  Name: string,
  Description: string,
  Ingredients: string[],
  Theme: string[],
  ImagePath: string,
  Veg: Boolean
}

interface CakesProp {
  cakes : CakesType[]
}



const Cakes = (props: CakesProp) => {
  return (
    <div>
      <h2>Cakes</h2>
      <ul>
      {props.cakes.map((cake) => (
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