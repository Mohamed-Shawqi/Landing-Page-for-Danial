import { useState } from "react";
import { Footer, Navbar, Sidebar } from "./components";
import Solutions from "./pages/Solutions";


function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Sidebar 
      isOpen={isOpen} 
      toggle={toggle} 
      />
      <Solutions/>
      <Footer/>
    </div>
  );
}

export default App;
