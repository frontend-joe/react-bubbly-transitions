import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import About from "./routes/About";
import Docs from "./routes/Docs";
import Contact from "./routes/Contact";

import { BubblyContainer } from "./library/src";

function App() {
  return (
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Docs />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<>...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
