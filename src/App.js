import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Announcement from "./components/Announcement";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Announcement />
      <StudentList />
      <Footer />
    </>
  );
}

export default App;