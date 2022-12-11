import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/CommonRoutes/CommonRoutes';
import './background1.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='main-bg'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
