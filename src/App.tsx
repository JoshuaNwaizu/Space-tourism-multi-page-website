import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './Components/Home/HomeView';
import DestinationView from './Components/Destination/DestinationView';
import CrewView from './Components/Crew/CrewView';
import TechnologyView from './Components/Technology/TechnologyView';

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
                element={
                  <HomeView
                    home="/"
                    destination="destination"
                    crew="crew"
                    technology="technology"
                    image=""
                  />
                }
              />

              <Route
                path="/destination"
                element={
                  <DestinationView
                    home="/"
                    destination=""
                    crew="crew"
                    technology="technology"
                    image=""
                  />
                }
              />
              <Route
                path="/crew"
                element={
                  <CrewView
                    home="/"
                    destination="destination"
                    crew=""
                    technology="technology"
                    image=""
                  />
                }
              />
              <Route
                path="/technology"
                element={
                  <TechnologyView
                    home="/"
                    destination="destination"
                    crew="crew"
                    technology=""
                    image=""
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </>
  );
};

export default App;
