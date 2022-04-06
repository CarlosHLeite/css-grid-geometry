import React from 'react';
import './geometry.css';
import bg from '../img/bg.jpg'
import img_1 from '../img/feature01.jpg'
import img_2 from '../img/feature02.jpg'

function Geometry() {
  return (
    <main className='container'>

        <img src={bg} alt="" srcset="" className="photo"/>

        <div className="boxOne">
            <div className="top-row">
                <h5>GEOMETRY</h5>
                <h2>Shapes are Great</h2>
                <p>We think geometry is radical and that you will benefit greatly by learning to harness its power. We invite you to learn more with our free courses.</p>
            </div>

            <div className="bottom-row">
                <div className="line"></div> 
                <p>Enrich your career through knowledge.</p>
                <a href="#">View all Courses</a>
            </div>
        </div>

        <div className="boxTwo">
            <img src={img_1} alt="" srcset="" className="image"/>

            <section className="section-content">
                <h3>Circle</h3>
                <p>All points in a plane at a given distance from a center point.</p>
                <a href="#">Start Course</a>
            </section>
                
            
        </div>

        <div className="boxThree">
            <img src={img_2} alt="" srcset="" className="image"/>
            <section className="section-content">
                <h3>Rhombus</h3>
                <p>A simple quadrilateral whose four sides all have the same length.</p>
                <a href="#">Start Course</a>
            </section>
        </div>
    </main>
  )
}

export default Geometry