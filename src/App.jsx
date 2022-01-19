import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AppProvider from "./contexts/AppProvider";
import Home from './pages/Home/Home';

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
