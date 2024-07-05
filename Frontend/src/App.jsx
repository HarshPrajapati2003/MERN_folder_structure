import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Overview from './pages/Overview/Overview';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import EmailVerify from './pages/Authentication/EmailVerify';
import ResetPassword from './pages/Authentication/ResetPassword';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          // path="/overview"
          index
          element={
            <>
              <PageTitle title="Overview" />
              <Overview />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <PageTitle title="Our Team" />
              <Team />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageTitle title="Contact Us" />
              <Contact />
            </>
          }
        />
    
        
       
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | LDCE - Placementcell" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | LDCE - Placementcell" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/auth/forgot-password"
          element={
            <>
              <PageTitle title="Forgot Password | LDCE - Placementcell" />
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/verifyemail/:token"
          element={
            <>
              <PageTitle title="Verify Email" />
              <EmailVerify />
            </>
          }
        />
        <Route
          path="/reset/:id/:token"
          element={
            <>
              <PageTitle title="Reset Password" />
              <ResetPassword />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
