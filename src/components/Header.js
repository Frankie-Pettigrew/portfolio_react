import React from 'react'

class Header extends React.Component {
    render(){
        return(<div>
<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">About</a></li>
      <li><a className="smoothscroll" href="#portfolio">Works</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">frankie pettigrew</h1>
      <h3><span>transkafka</span></h3>
      <h3>maplewood, nj based <span>game designer</span>, <span>sound artist</span> and <span>front-end developer</span> making multimedia art and personal websites. </h3>
      <hr />
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header>

        </div>
        )
    }
}

export default Header