import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from "./components/NavBar/NavBar";
import { Cart } from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext/CartContext';
import { CheckOut } from './components/CheckOut/CheckOut';


function App() {
    return (
        <CartContextProvider>
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
                path="/cart"
                element={<Cart />}
                ></Route>
                <Route
                path="/checkout"
                element={<CheckOut />}
                ></Route>
                <Route
                    path="*"
                    element={ <Navigate to="/" /> }
                ></Route>
            </Routes> 
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
