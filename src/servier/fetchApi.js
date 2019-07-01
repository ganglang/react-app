import 'whatwg-fetch';
export const get=(url)=>{
    return fetch(url,{
        method:"get",
        credentials:'include',
        headers:{
            "Accept":"application/json"
        },
        mode : 'cors'
    }).then(res=>res.json())
}

export const post=(url,data)=>{
    return fetch({
        url:url,
        method:"POST",
        headers:{
            "Content-Types":"application/json",
            "Accept":'application/json'
        },
        mode : 'cors',
        body:JSON.stringify(data)
    }).then(res=>res.json())
}

export const getKey=()=>{ //返回聚合数据需要的key
    return 'b57d83c669f89cfd8bcebb2bff84fe28';
}

