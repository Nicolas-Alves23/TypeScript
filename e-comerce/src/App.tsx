import { Routes , Route} from "react-router"
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function App() {


  return (
   <Routes>
     <Route path= "/" element={<Login/>}/>
     <Route path= "/home" element={<Home/>}/>
     <Route path="/produto/:id" element={<ProductDetail />} />
   </Routes>
  )
}

export default App
