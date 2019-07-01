import * as types from '../typeProps';
let initialState={
    selectedType:'1',
    newsList:[],
    slidersList:[]
}

export function home(state={...initialState},action) {
    switch (action.type) {
        case types.SET_TYPE:
            return {...state,selectedType:action.val}
        case types.SET_SLIDERS:
            return {...state,slidersList:action.sliderList}
        case types.SET_NEWS:
            return {...state,newsList:action.newList}
        default:
            return {...state}
    }
}