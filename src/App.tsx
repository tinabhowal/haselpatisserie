import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from './store/store';
import { cakesActions } from './store/store';
import { useDispatch } from 'react-redux';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {



//const cakes = useSelector((state:RootState) => state.cakes.cakes)
// const token = useSelector((state:RootState) => state.token.token)
// const user = useSelector((state:RootState) => state.user.user)
const dispatch = useDispatch();

useEffect(() => {
  const fetchCakes = () => {
    fetch('http://localhost:8080/cakes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if(response.ok){
        return response.json()
      }else{
        console.error('Error fetching products', response.status);
        throw new Error(`Error fetching products: ${response.status}`)
      }
    })
    .then((data) => {
      console.log('Fetched data:', data);
      dispatch(cakesActions.setCakes(data))
    })
    .catch(error => {
      console.error('Error fetching products', error)
    })
  }
 
  fetchCakes()

// const handleTokenFromUrl = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const tokenFromUrl = urlParams.get('token');
//   const userFromUrl = urlParams.get('user');

//   if(tokenFromUrl && !token){
//     localStorage.setItem('token', tokenFromUrl);
//     dispatch(tokenActions.setToken(tokenFromUrl))
//   }

//   if(userFromUrl && !user){
//     localStorage.setItem('user', userFromUrl);
//     dispatch(userActions.setUser(JSON.parse(userFromUrl)))
//   }
// }

// handleTokenFromUrl();

// if(token){
//   fetchCakes()
// }
}, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
