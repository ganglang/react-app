import {get,getKey} from '../fetchApi';
let newsUrl='http://localhost:8080/news';
let sliderUrl='http://localhost:8080/slider'
let key=getKey();
export const getNews=(type)=>{
    return get(newsUrl+type+'&key='+key);
}

export const getSlider=()=>{
    return get(sliderUrl);
}