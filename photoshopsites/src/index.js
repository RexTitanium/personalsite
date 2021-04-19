import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './styles/styles.css'
import {about} from './about'


const data=[1,2,3,4];

const images = ['./Images/FindingLife.png', './Images/TheCosmos.png' , './Images/SoonInFutureFin.png','./Images/OTW2.png','./Images/Rttf_basic_nothing.png','./Images/MoonWitch.png'];
const title = ['FINDING LIFE', 'THE COSMOS', 'SOON IN FUTURE','FALLS HIKE','ROAD TO THE FUTURE','MOON WITCH']
const softwareused =['Photoshop','Photoshop', 'Photoshop, Blender','Photoshop','Photoshop, Blender','Photoshop'];
const card =[];
for(var i=0; i<title.length;i++){
  card[i]={
    img: images[i],
    title: title[i],
    soft: softwareused[i]
  }
}

function Booklist() {
  return (
    <main data-router-wrapper>
        <section data-router-view="home">
    <nav>
        <div  className="navbar">
            <ul className="homeul">
                <li ><a className ="active" href="./index.html">HOME</a></li>
                <li><a href="./about.html">ABOUT</a></li>
                <li><a href="./work.html">WORK</a></li>
                <li><a href="./contact.html">CONTACT</a></li>
            </ul>
        </div>
    </nav>
   <div className="everythin">
    <div className="container">
            <img className="titleimg" src='./Images/midimg.png' alt='headImage' />
             <h1 className="title">TITANIUM ARTS</h1>
            
    </div>
        <div className="worksheader">
           <h1> WORKS</h1></div>
    <div className="container1">

      {card.map((ima)=>{
        const {img, title, soft} = ima;
        return (<Cards key={ima.id} {...ima}></Cards>
        );
      })}
      </div>
</div> 
<div className="footerall">
    <div className="container-footer">
        <div className="logo">
            <h1>TITANIUM ARTS</h1>
            <div className="social-media">
                <ul className="footer-sm">
                    <li><a href="https://www.instagram.com/titaniumarts"><img src="./Images/Insta.png" className="insta-logo" /></a></li>
                    <li><a href="#"><img src="./Images/facebook.png" className="facebook-logo" /></a></li>
                    <li><a href="#"><img src="./Images/twitter.png" className="twitter-logo" /></a></li>
                    <li><a href="#"><img src="./Images/linkedin.png" className="linkedin-logo" /></a></li>
                </ul>
            </div>
            
        </div>
        <div className="codes-used">
            <h1 className="codes-used-txt">CODES USED</h1>
            <ul className="footer-codes">
                <li>&lt;HTML&gt;</li>
                <li>&lt;CSS&gt;</li>
                <li>&lt;JAVASCRIPT&gt;</li>
                <li>&lt;DOGTYPE / HIGHWAY&gt;</li>
                <li>&lt;GSAP&gt;</li>
                <li>&lt;REACT JS&gt;</li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
            </ul>
        </div>
    </div>
</div>
</section>
</main>
    
  );
};


const Cards=(props)=>{
  const {img, title, soft} = props;
  return(
    <div className="cards">
        <div className="card1">
            <a href="./work.html#imgcard1">
              <div className="image">
                <img src={img} alt="FindingLife" />
              </div>
              <h1>{title}</h1>
              <h3>Softwares Used: {soft}</h3>
            </a>
        </div>
      </div>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));