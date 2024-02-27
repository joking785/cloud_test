import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './fonts/IstokWeb-Bold.ttf';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
