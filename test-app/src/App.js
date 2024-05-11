import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Footer from "./components/footer";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
      </div>
    )
  }
}

export default App;
