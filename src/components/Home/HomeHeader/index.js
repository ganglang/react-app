import React,{Component} from 'react';
class HomeHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        }
    }
    toggleTab=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    chooseType=(event)=>{
        let type=event.target.getAttribute("type");
        this.props.chooseType(type);
        this.toggleTab();
    }
    render() {
        return (<div>
            <div className="tabBar" onClick={this.toggleTab}>
                <div className="crumb">
                    {this.state.isShow?<i>展开</i>:<i>收起</i>}
                </div>
            </div>
            {this.state.isShow?<div className="menuList">
                <ul onClick={this.chooseType}>
                    <li type="0">科技</li>
                    <li type="1">时尚</li>
                    <li type="2">娱乐</li>
                    <li type="3">社会</li>
                </ul>
            </div>:null}
        </div>)
    }
}
export default HomeHeader;