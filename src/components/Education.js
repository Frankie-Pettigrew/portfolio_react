import React from 'react'


class Education extends React.Component {
    render(){
        return(<div><section id="education">
      <div className="row education">
        <div className="three columns header-col">
          <h1 className="edu_title"><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3 className="school">NYU</h3>
              <p className="info">BFA in Game Design <span>•</span> <em className="date">May 2020</em></p>
              <p>
                Attended from September 2015-May 2020, was in the inaugural freshman class of the NYU Game Design BFA program. Took classes on multiple design disciplines: Game, Audio, Graphic, Web. 
                
                Spent a semester in Berlin, Germany working on experimental music interfaces.
              </p>
            </div>
          </div></div></div>
          </section></div>
    );
  }
}

export default Education