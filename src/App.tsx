import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Our project will be here as soon as possible</p>
      </header>

      <Routes>
        <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} /> */}

        {/* <Route path="phones" element={ <Outlet /> }>
          <Route index element={ <PhonesPage /> } />
          <Route path=":itemCard" element={ <PhonesPage /> } />
        </Route> */}

        {/* <Route path="/tablets" element={<TabletsPage />} /> */}
        {/* <Route path="/accessories" element={<AccessoriesPage />} /> */}
        {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
