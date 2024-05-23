import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './Components/Home/HomeView';
import DestinationView from './Components/Destination/DestinationView';

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
                element={<HomeView />}
              />

              <Route
                path="/destination"
                element={<DestinationView />}
              />
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </>
  );
};

export default App;
