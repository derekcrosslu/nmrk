import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import data from "../api/bakery_problem_data.json";

function App() {
    const { treats } = data;
    
    return (
      <div>
        <Header></Header>
        <div className="components">
          <Main treats={treats}></Main>
          <Basket></Basket>
        </div>
      </div>
    );
}

export default App