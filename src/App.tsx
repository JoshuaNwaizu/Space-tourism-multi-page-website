import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './Components/Home/HomeView';
import DestinationView from './Components/Destination/DestinationView';
import CrewView from './Components/Crew/CrewView';
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
              <Route
                path="/crew"
                element={<CrewView />}
              />
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </>
  );
};

export default App;
