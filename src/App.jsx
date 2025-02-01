import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./components/SideBar";
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

 
  return (
    <>
     
        <div className="main-page">
          <div>
            <SideBar/>
          </div>
          <div className="content">
            <Outlet/>
          </div>
        </div>

    </>
  )
}

export default App;
