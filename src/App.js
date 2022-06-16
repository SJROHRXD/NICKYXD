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
          <Routes>
            {/* declaring what urls are */}
            <Route path="/login" authToken={authToken} setAuthtoken={setAuthtoken} element={<Login />} />
            <Route path="/logged" element={<TestimonialListAdmin />} />
            <Route path="/notloggedin" element={<TestimonialList />} />
            <Route path="/*" element={<Redirect />} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
