import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Chef from "./container/Chef/Chef";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/Findus/FindUs";
import Footer from "./container/Footer/Footer";
import DataFetching from "./DataFetching";
import {useState} from "react";
import RestaurantInfo from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <Header />
//         <AboutUs />
//         <SpecialMenu />
//         <Chef />
//         <Intro />
//         <Laurels />
//         <Gallery />
//         <FindUs />
//         <Footer />
//
//     </div>
//   );
// }
//
// export default App;

const App = () => {


    return (
        <div>
            {/*<Chef/>*/}


            <Navbar />
            <Header />


            <Chef/>
            <SpecialMenu />
            <Intro />
            <Laurels />
            <AboutUs />
            <Gallery />
            <FindUs />
            <Footer />

        </div>
    );
};

export default App;