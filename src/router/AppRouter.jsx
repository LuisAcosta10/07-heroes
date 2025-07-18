import { Route, Routes } from 'react-router-dom';
// import { MarvelPage } from '../heroes/pages/MarvelPage';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth/';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='marvel' element={<MarvelPage /> }/> */}
        {/* <Route path='dc' element={<DcPage /> }/> */}
        {/* <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } /> */}

        <Route path='/login'element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path='login' element={<LoginPage />} /> */}
        {/* <Route path='/*' element={<HeroesRoutes /> }/> */}
        {/* <Route path='/' element={<Navigate to="marvel" /> }/> */}
      </Routes>
    </>
  )
}  
