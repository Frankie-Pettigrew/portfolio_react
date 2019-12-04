import React from 'react'


class About extends React.Component {
    render(){
        return(<div>
            <section id="about">

      <div className="row">

         <div className="three columns">

            <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

         </div>

         <div className="nine columns main-col">

            <h2>bio</h2>
            <p>from a family of artists and performers, grew up in maplewood, nj.</p><p> now resides between maplewood and brooklyn, with her dog.</p>
            <div className="row">

               <div className="columns contact-details">

                  <h2>contact | social</h2>
                  email <a href="mailto:transgenderkafka@gmail.com">transgenderkafka@gmail.com</a> <br></br>
                  instagram <a href="https://www.instagram.com/trans.kafka/">@trans.kafka</a> <br></br>
                  twitter <a href="https://twitter.com/trans__kafka">@trans__kafka</a>

               </div>

            </div>

         </div> 

      </div></section></div>
        );
    }
}
export default About;