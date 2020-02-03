import React from 'react'
class PortfolioItem extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(<div><div className="columns portfolio-item">
        <div className="item-wrap">
          <a href={"#modal-" + this.props.id} >
            <img alt="" src={this.props.image} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{this.props.title}</h5>
                <p>{this.props.role}</p>
              </div>
            </div>
            <div className="link-icon"><i className="icon-plus" /></div>
          </a>
        </div>
      </div>
      <div id={"modal-" + this.props.id} className="popup-modal mfp-hide">
      <img className="scale-with-grid" src={this.props.modal_image} alt="" />
      <div className="description-box">
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
      <div className="link-box">
        <a href={this.props.ext_link}>Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div></div>)
    }
}

export default PortfolioItem