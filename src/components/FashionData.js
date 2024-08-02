import { Component } from "react";
import './FashionData.css';

class FashionData extends Component{
    render(){
        return(
        <div className={this.props.className}>  
            <div className='fash-text'>
                <h2>{this.props.heading}</h2>
                <p>
                    {this.props.text}
                </p>
            </div>
            <div className='fash-img'>
                <img src={this.props.image1} alt='watches'/>
                <img src={this.props.image2} alt='watches'/>
            </div>
        </div>
        )
    }
}

export default FashionData