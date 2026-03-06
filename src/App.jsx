import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from './Layouts/Header';
import { Home } from './Pages/Home';
import { Sanstha } from './Pages/Sanstha';
import { SabhapatiKaryakal } from './Pages/SabhapatiKaryakal';
import { UpsabhapatiKaryakal } from './Pages/UpsabhapatiKaryakal';
import { SanchalakMandal } from './Pages/SanchalakMandal';
import { Karmachari } from './Pages/Karmachari';
import { RashtriyKrushi } from './Pages/RashtriyKrushi';
import { ShetmalTaran } from './Pages/ShetmalTaran';
import { KrushiPanan } from './Pages/KrushiPanan';
import { Samudra } from './Pages/Samudra';
import { Mhbs } from './Pages/Mhbs';
import { Nondani } from './Pages/Nondani';
import {Sampark} from './Pages/Sampark';
import { Gallary } from './Pages/Gallary';
import { Login } from './Pages/Login';
import { Sign } from './Pages/Sign';
import { Nandgaon } from './Pages/Nandgaon';
import { Bolthana } from './Pages/Bolthana';
import { Downloads } from './Pages/Downloads';
import { Footer } from './Layouts/Footer';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };
  return (
    <>
        
          
     
    
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sanstha" element={<Sanstha />} />
      <Route path="/SabhapatiKaryakal" element={<SabhapatiKaryakal />} />
      <Route path="/UpsabhapatiKaryakal" element={<UpsabhapatiKaryakal />} />
      <Route path="/SanchalakMandal" element={<SanchalakMandal />} />
      <Route path="/Karmachari" element={<Karmachari />} />
      <Route path="/RashtriyKrushi" element={<RashtriyKrushi />} />
      <Route path="/ShetmalTaran" element={<ShetmalTaran />} />
      <Route path="/KrushiPanan" element={<KrushiPanan />} />
      <Route path="/Samudra" element={<Samudra />} />
      <Route path="/Mhbs" element={<Mhbs />} />
      <Route path="/Nondani" element={<Nondani addUser={addUser} />} />
      <Route path="/Sampark" element={<Sampark />} />
      <Route path="/Gallary" element={<Gallary users={users} deleteUser={deleteUser} />} />
      <Route path="/Login" element={<Login users={users} />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/Nandgaon" element={<Nandgaon />} />
      <Route path="/Bolthana" element={<Bolthana />} />
      <Route path="/Downloads" element={<Downloads />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
