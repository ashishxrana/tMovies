import '../App.css';
import { useUserContext } from "../context/userContext";
import Home from "../pages/Home";
import Signin from './Signin';
function App() {
  const { user } = useUserContext();
  console.log("Harsh");    
  return (
    <div className="App">
      {user ? <Home/>: <Signin />}
    </div>
  );
}
export default App;
