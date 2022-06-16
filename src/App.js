import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import TestimonialList from './components/TestimonialList';
import TestimonialListAdmin from './components/TestimonialListAdmin';
import Redirect from './components/Redirect';
// wildcard or redirect or 404

function App() {
  const [authToken, setAuthtoken] = useState('Not Authenticated');
  
  return (
    <div>
      <h1>Private View</h1>
        <Router>
          {/* how to go, when */}

          {/* auth token, if true, then return these routes, if else return unprotected routes, you wanna handle this in navbar */}

          <Routes>
            {/* declaring what urls are */}
            <Route path="/login" authToken={authToken} setAuthtoken={setAuthtoken} element={<Login />} />
            <Route path="/loggedin" authToken={authToken} element={<TestimonialListAdmin />} />
            <Route path="/notloggedin" element={<TestimonialList />} />
            <Route path="/" element={<Redirect />} />
          </Routes>
        </Router>
    </div>
  );
};

// jesus christ zakk lost me eight years ago


// we want a redirect, theoretically in case they manual punch in the url
// then redirect
// react redirect google it

// conditional rendering in navbar
// turnerrarryryry

export default App;
