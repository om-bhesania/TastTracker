import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,BrowserRouter,Routes} from "react-router-dom" ;

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  // const Router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<ExercisesList/>}>
  //       <Route path="/edit/:id" element={<EditExercise/>} />
  //       <Route path="/create" element={<CreateExercise/>} />
  //       <Route path="/user" element={<CreateUser/>} />
  //     </Route>
  //   )
  // );
  return (
    <div className="container">
      <BrowserRouter>  
        <Navbar />
      <br /> 
        <Routes>
          <Route path='/' Component={ExercisesList} />
          <Route path="/edit/:id" Component={EditExercise} />
          <Route path="/create" Component={CreateExercise} />
          <Route path="/user" Component={CreateUser} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;