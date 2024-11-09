import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BrowserRouter, Routes as BrowserRoutes, Link, Route } from "react-router-dom";

import { Collaborate, Highlights, Introduction, ReRoute, Techstack } from "./components";

import { HEAD_TAGS } from "./constants/texts";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-theme");
      document.documentElement.style.setProperty("color-scheme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      document.documentElement.style.setProperty("color-scheme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <meta name="author" content={HEAD_TAGS.AUTHOR} />
          <meta name="description" content={HEAD_TAGS.DESCRIPTION} />
          <meta name="keywords" content={HEAD_TAGS.KEYWORDS} />
        </Helmet>
        <header>
          <button
            id="theme-toggle"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <nav>
            <Link to="/">About Me</Link>
            <div className="nav-divider">/</div>
            <Link to="/collaborate">Collaborate</Link>
          </nav>
        </header>
        <BrowserRoutes>
          <Route
            path="/"
            element={
              <>
                <Introduction />
                <Techstack />
                <Highlights />
              </>
            }
            errorElement={<ReRoute />}
          />
          <Route path="/collaborate" element={<Collaborate />} errorElement={<ReRoute />} />
          <Route path="*" element={<ReRoute />} />
        </BrowserRoutes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
