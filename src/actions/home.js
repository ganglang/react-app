import * as types from '../typeProps';
import {getNews,getSlider} from '../servier/Home/index';
export const setTypes=(val)=>{
    return {
        type:types.SET_TYPE,
        val:val
    }
}

export const setSlider=()=>dispatch=>{
    console.log("轮播图请求");
    getSlider().then(res=>{
        dispatch({
            type:types.SET_SLIDERS,
            sliderList:res.list
        })
        console.log("轮播图："+res.list);
    })
}

export const setNews=type=>dispatch=>{
    getNews(type).then(res=>{
        console.log("新闻数据:"+JSON.stringify(res));
        if(res.result.data){
            dispatch({
                type:types.SET_NEWS,
                newList:res.result.data
            })
        }
    })
}

