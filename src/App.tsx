import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './Components/Home/HomeView';
import DestinationView from './Components/Destination/DestinationView';
// import DestinationMars from './Components/Destination/DestinationMars';

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
