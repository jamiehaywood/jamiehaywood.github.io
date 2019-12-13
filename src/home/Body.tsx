import React from "react";
import "./body.css";

interface props {}

const Body: React.FC<props> = props => {
  return (
    <div className="fadeIn animated delay-three container">
      <h1> Hi, I'm Jamie. </h1>
      I'm a Full Stack Software Developer at Transport for London&nbsp;
      <img
        className="roundel"
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/TfL_roundel_%28no_text%29.svg/500px-TfL_roundel_%28no_text%29.svg.png"
      />
      <br/>
      <p>I believe that the best software is shipped using a <b>customer-centric</b> approach 
      and <b>rapid iteration</b> to deliver the most value in the shortest amount of time. 
      As such, I frequently apply my anthropological background to build software products 
      that have a <b>lasting impact</b> on how people interact with them.</p>
      
      <p>I am a big experimenter with new technologies and implementing them
      into my personal and work projects. Every month I try out a new technology
      and write about it <a href="https://medium.com/@jamiehaywood" className="blogLink black">here</a>.
      </p>
      <p>
      When I'm not developing software, I enjoy sailing, cooking, playing
      backgammon, and reading.
      </p>
    </div>
  );
};

export default Body;
