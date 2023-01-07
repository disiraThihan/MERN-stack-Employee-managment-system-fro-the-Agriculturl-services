import './App.css';
import Navbar from './components/Navbar'
import FamAdd from './components/AddFarmer';
import FamEmpHome from './pages/AddFarmerPage' 
import Expand from './components/ExpandFarmer';
import Edit from './components/EditFarmer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import FarmerEmployeeHome from './components/FarmerEmployeeHome';
import FarmerEmployeeRegister from './components/FarmerEmployeeRegister';
import FarmerEmployeeEdit from './components/FarmerEmployeeEdit';
import FarmerEmployeeDetails from './components/FarmerEmployeeDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {


  return (
    <div className='backPage'>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element= {<FamEmpHome /> } Navigate to="/" 
            />
            <Route 
              path="/famadd" 
              element={<FamAdd /> } Navigate to="/"  
            />
            <Route 
              path="/farmeredit/:id" 
              element={ <Edit /> } Navigate to="/"  
            />
            <Route  
              path="/farmerexpand/:id" 
              element={<Expand /> } Navigate to="/" 
            />

            <Route 
              path="/farmerEmployeehome" 
              element= {<FarmerEmployeeHome /> } Navigate to="/" 
            />
            <Route 
              path="/farmerEmployeeregister" 
              element={<FarmerEmployeeRegister /> } Navigate to="/"  
            />
            <Route 
              path="/farmerEmployeeedit/:id" 
              element={ <FarmerEmployeeEdit /> } Navigate to="/"  
            />
            <Route  
              path="/farmerEmployeeview/:id" 
              element={<FarmerEmployeeDetails /> } Navigate to="/" 
            />
  
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
