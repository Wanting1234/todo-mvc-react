import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";

function App() {
    return (
        <div className="App">
            <Header />
            <AddTask />
            <Footer />
        </div>
    );
}

export default App;
