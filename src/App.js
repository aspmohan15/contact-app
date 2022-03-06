import { useState } from "react";
import Contact from './components/contact/Contact'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const usersList = useSelector(state => state.users.value)



  return (
    <div className="App">
      <Contact />

    </div>
  );
}

export default App;
