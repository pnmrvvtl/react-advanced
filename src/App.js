import './App.css';
import categories from "./categories.js";
import Directory from "./components/directory.component/directory.component";

function App() {
    return (
        <Directory categories = {categories}/>
    );
}

export default App;
