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
                  email <a href="mailto:frankie.pettigrew@gmail.com">frankie.pettigrew@gmail.com</a> <br></br>

               </div>

            </div>

         </div> 

      </div></section></div>
        );
    }
}
export default About;
