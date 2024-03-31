
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Main from "./pages/main";
import NoPage from "./pages/noPage";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/noPage" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
