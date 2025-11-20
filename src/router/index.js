import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Main from '../pages/Main';
import Resume from '../pages/Resume';
import Layout from '../components/Layout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
