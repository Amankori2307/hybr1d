import { Route, Routes } from "react-router-dom";
import DetailPost from "./components/DetailPost/DetailPost";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:postId" element={<DetailPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
