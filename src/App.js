import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Header from './Components/Header';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<HomePage/>}/>
          </Route>
          <Route path='/login' exact element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
