

import Footer from './Footer/Footer';
import Header from './Header.tsx/Header';
import s from './App.module.css';
import Main from './Main/Main';


function App() {
  return (
    <>
      <Header />
      <div className={s.wrap} >
   
      
        
         <Main/>
     
       
        </div>
      <Footer/>

      </>
  );
}

export default App;
