import { useCallback, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("meal");
  const onThemeChange = useCallback((t) => setTheme(t), []);

  return (
    <div className={`app theme-${theme}`}>
      <div className="bgOrbs" />
      <div className="layout">
        <Header />
        <Content onThemeChange={onThemeChange} />
        <Footer />
      </div>
    </div>
  );
}
