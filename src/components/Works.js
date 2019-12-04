import React from "react"
import PortfolioItem from "./PortfolioItem"

class Works extends React.Component{
    render(){
        return(<div>
            {/* Portfolio Section
   ================================================== */}
<section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
      <h1>portfolio</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-thirds cf">
          <PortfolioItem id={1} title="dogMUD" role="React Developer and Game Designer" description="Experimental Multi-User-Dungeon about being a dog" image="images/portfolio/dogMUD.png" modal_image="images/portfolio/modals/m-dogMUD.png"/>
          <PortfolioItem id={2} title="Stereophyta" role="Game/Audio Design" description="Farming/Music game where the seeds you plant become notes that evolve and grow over time in an ever-changing sequence based on wind conditions" image="images/portfolio/stereophyta.png" modal_image="images/portfolio/modals/m-stereophyta.png"/>
          <PortfolioItem id={3} title="Levedad" role="Audio Design" description="Personal narrative game about long-exposure photography and the passage of time. Nominated for the IGF 2018 Best Student Game award" image="images/portfolio/levedad.png" modal_image="images/portfolio/modals/m-levedad.png"/>
          <PortfolioItem id={4} title="The Cube" role="Audio Design and Arduino" description="Procedurally generated music that evolves based on the gyroscope position of the cell phone inside of it" image="images/portfolio/the_cube.jpg" modal_image="images/portfolio/the_cube.jpg"/>
          <PortfolioItem id={5} title="I Dream of @Dril" role="Game/Audio Design" description="Intermediate Game Development final project. A viginette-style game about twitter clout and absurdity" image="images/portfolio/i_dream_of_dril.png" modal_image="images/portfolio/modals/m-i_dream_of_dril.png" />
          <PortfolioItem id={6} title="Simian Sphere" role="Game/Audio Design" description="Hologram Super Monkey Ball clone, no headgear required! Developed during 2017 Looking Glass Factory internship" image="images/portfolio/simianSphere.gif" modal_image="images/portfolio/modals/m-simianSphere.gif"/>
      </div> {/* portfolio-wrapper end */}
    </div> {/* twelve columns end */}
   </div>
</section> {/* Portfolio Section End*/}

        </div>)
    }
}

export default Works