import React,{Component} from 'react';
import * as actions from '../../actions/home';
import {connect} from "react-redux";
import './index.css';
import HomeHeader from '../../components/Home/HomeHeader';
import ReactSlider from '../../components/Home/Slider';
class Home extends Component{
    constructor(props){
        super(props);
    }
    chooseType=(type)=>{
        this.props.setTypes(type);
    }
    componentWillMount() {
        this.props.setSlider();
    }

    render() {
        return(
            <div>
                <HomeHeader chooseType={this.chooseType}/>
                <div className="content-wrap">
                    <ReactSlider sliders={this.props.home.slidersList}/>
                </div>
            </div>
        )
    }
}
export default connect((state)=>state,actions)(Home);