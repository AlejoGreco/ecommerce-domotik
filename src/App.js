import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route 
                    path="/" 
                    element={ <ItemListContainer greeting="Seccion X"/> }
                ></Route>
                <Route 
                    path="/category/:cat" 
                    element={ <ItemListContainer greeting="Categoria X"/> }
                ></Route>
                <Route
                path="/item/:id"
                element={ <ItemDetailContainer /> }
                ></Route>
                <Route
                    path="*"
                    element={ <Navigate to="/" /> }
                ></Route>
            </Routes> 
        </BrowserRouter>
    );
}

export default App;
