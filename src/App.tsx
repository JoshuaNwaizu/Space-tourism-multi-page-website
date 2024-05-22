import DestinationBody from './HomeBody/DestinationBody';
import HomeBody from './HomeBody/HomeBody';
// import NavBar from './NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main>
        <section>
          {' '}
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<HomeBody />}
              />

              <Route
                path="/destination"
                element={<DestinationBody />}
              />
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </>
  );
};

export default App;
