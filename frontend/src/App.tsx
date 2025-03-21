import { Outlet } from 'react-router-dom';

import Provider from './components/provider/index.tsx';

function App() {
  return (
    <>
      <Provider>
        {/* <NavBar /> */}
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
