// import logo from './logo.svg';
import './App.css';
import image from './images/img1.webp';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Teams from './components/Teams';
import Form from './components/Form';
import College from './tryagain/College';
import FormEx from './tryagain/FormEx';
import School from './tryagain/School';
import TodoList from './TodoList';

function Html1() {
  return (
    <div>
      <h1>
        <center>this is my webpage</center>
      </h1>
      <h2>
        <center>welcometo my page</center>
      </h2>
    </div>
  );
}

function Css1() {
  return (
    <div>
      <center>
        <input className="frst" type="text" placeholder="fisrt name" />
        <input className="secnd" type="text" placeholder="second name" />
        <input className="emaill" type="email" placeholder="enter ur email" />
        <input className="sign-up" type="submit" placeholder="sign up" />
      </center>
    </div>
  );
}

// function TryAgain() {
//   return (
//     <div>
//       <College />
//       <FormEx />
//       <School />
//       <TryAgainNavBar />
//     </div>
//   )
// }


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/todo-list' element={<TodoList />}></Route>

          {/* <Route path='/try-again' element={<TryAgain />}></Route> */}
          {/* <Route path='/college' element={<College />} />
          <Route path='/school' element={<School />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;