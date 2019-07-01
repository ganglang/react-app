import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.css';
class ReactSlider extends Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }
    render() {
        let opt={
            continuous: true,
            callback:(val)=>{
                this.setState({
                    index:val
                })
            }
        };
        return(
            <div  className="carousel-wrap">
                {this.props.sliders?
                <ReactSwipe className="carousel"
                    swipeOptions={opt} >
                    {this.props.sliders.map((item,index)=><div key={index}><img src={item}/></div>)}
                </ReactSwipe>:<div>loading...</div>
                }
                <div className="dots">
                    {this.props.sliders.map((item,index)=><span key={index} className={index==this.state.index?'active':'normal'}></span>)}
                </div>
            </div>
            )
    }
}
export default ReactSlider;