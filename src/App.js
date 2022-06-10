import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
    return (<h1>Shop</h1>)
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}></Route>
                <Route path="shop" element={<Shop/>}></Route>
                <Route path="signIn" element={<SignIn/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;
