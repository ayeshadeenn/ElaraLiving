import { Routes, Route } from "react-router-dom";

// import home from "./pages/home";
// import shop from "./pages/shop";
// import about from "./pages/about";
// import contact from "./pages/contact";
import SiteLayout from "./components/layout/sitelayout";

// function App() {
//   return ( 
//     <Routes>
//       <Route path="/" element={<home />}/>
//       <Route path="/shop" element={<shop />}/>
//       <Route path="/about" element={<about />}/>
//       <Route path="/contact" element={<contact />}/>
//     </Routes>
//   )
// }

function App() {
  return (
    <SiteLayout></SiteLayout>
  )
}

export default App;