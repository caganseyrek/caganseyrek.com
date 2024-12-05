import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BrowserRouter, Routes as BrowserRoutes, Route } from "react-router-dom";

import { AboutMe, Collaborate } from "./routes";

import LinkElement from "./components/LinkElement";
import ReRoute from "./components/ReRoute";

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
          <meta name="theme-color" content={isDarkMode ? "#282828" : "#e3e3e3"} />
        </Helmet>
        <header>
          <button
            id="theme-toggle"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <nav>
            <LinkElement to="/" contents="About Me" />
            <div className="nav-divider">/</div>
            <LinkElement to="/collaborate" contents="Collaborate" />
          </nav>
        </header>
        <main>
          <BrowserRoutes>
            <Route path="/" element={<AboutMe />} errorElement={<ReRoute />} />
            <Route path="/collaborate" element={<Collaborate />} errorElement={<ReRoute />} />
            <Route path="*" element={<ReRoute />} />
          </BrowserRoutes>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
