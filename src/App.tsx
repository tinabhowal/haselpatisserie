import React, { useEffect, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { cakesActions } from './store/store';
import { useDispatch } from 'react-redux';

// Lazy load components
const Home = React.lazy(() => import('./components/Home/Home'));
const Productss = React.lazy(() => import('./components/Productss/Productss'));
const About2 = React.lazy(() => import('./components/About2/About2'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await fetch('http://localhost:8080/cakes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        dispatch(cakesActions.setCakes(data));
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchCakes();
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<About2 />} />
          <Route path="/products" element={<Productss />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;



















// import React, { useEffect } from 'react';
// import Home from './components/Home/Home';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { cakesActions } from './store/store';
// import { useDispatch } from 'react-redux';
// import Contact from './components/Contact/Contact';
// import About2 from './components/About2/About2';


// function App() {



// //const cakes = useSelector((state:RootState) => state.cakes.cakes)
// // const token = useSelector((state:RootState) => state.token.token)
// // const user = useSelector((state:RootState) => state.user.user)
// const dispatch = useDispatch();

// useEffect(() => {
//   const fetchCakes = () => {
//     fetch('http://localhost:8080/cakes', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': `Bearer ${token}`
//       }
//     })
//     .then(response => {
//       if(response.ok){
//         return response.json()
//       }else{
//         console.error('Error fetching products', response.status);
//         throw new Error(`Error fetching products: ${response.status}`)
//       }
//     })
//     .then((data) => {
//       console.log('Fetched data:', data);
//       dispatch(cakesActions.setCakes(data))
//     })
//     .catch(error => {
//       console.error('Error fetching products', error)
//     })
//   }
 
//   fetchCakes()

// // const handleTokenFromUrl = () => {
// //   const urlParams = new URLSearchParams(window.location.search);
// //   const tokenFromUrl = urlParams.get('token');
// //   const userFromUrl = urlParams.get('user');

// //   if(tokenFromUrl && !token){
// //     localStorage.setItem('token', tokenFromUrl);
// //     dispatch(tokenActions.setToken(tokenFromUrl))
// //   }

// //   if(userFromUrl && !user){
// //     localStorage.setItem('user', userFromUrl);
// //     dispatch(userActions.setUser(JSON.parse(userFromUrl)))
// //   }
// // }

// // handleTokenFromUrl();

// // if(token){
// //   fetchCakes()
// // }
// }, [dispatch])

//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About2 />}></Route>
//         <Route path='/contact' element={<Contact />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
