import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Cars from './pages/cars/Cars';
import CarDetails from './pages/carDetails/CarDetails';
import NotFound from './pages/notFound/NotFound';
import View from './pages/view/View';

function App() {
  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <View />,
      errorElement: <NotFound /> ,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'cars',
          element: <Cars />,
        },
        {
          path: 'cars/car-details/:id',
          element: <CarDetails />
        }
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={Routes}>
    </RouterProvider>
    </>
  );
};

export default App;
