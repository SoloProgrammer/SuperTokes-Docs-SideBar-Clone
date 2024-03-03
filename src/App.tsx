import SideBar from "./components/CollapaseAbleSideBar/SideBar";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./pages/content";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        {/* Navbar */}
        <Navbar />
        <section className={styles.bodySection}>
          {/* Sidebar */}
          <SideBar />
          <main className={styles.mainSection}>
            <Routes>
              <Route path="/:slug" element={<Content />} />
              <Route path="/" element={<Main />} />
            </Routes>
          </main>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
