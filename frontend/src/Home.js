import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';

 
const Home = () => {
  return (
    <>
         <ResumeProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>
    </>
  )
}

export default Home