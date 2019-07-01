import React,{Component} from 'react';
import HomeHeader from '../../components/Home/HomeHeader';
import * as actions from '../../actions/home';
import {connect} from "react-redux";
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
            </div>
        )
    }
}
export default connect((state)=>state,actions)(Home);