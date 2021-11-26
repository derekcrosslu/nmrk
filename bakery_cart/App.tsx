import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

function App() {
    return <div>
        <Header></Header>
        <div className='row center block'>
            <Main></Main>
            <Basket></Basket>
        </div>
    </div>
}

export default App