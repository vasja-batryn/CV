import './main.scss';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import {Main} from "./pages/Main.js"
import {About} from "./pages/About.js"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />}/>
        <Route path="/about" element={<About />}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  <>
    <div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </div>

    <div>
      <Outlet/>
    </div>
  </>
}

export default App;
