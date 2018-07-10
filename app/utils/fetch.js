export default  Fetch = (url,method='GET',params) =>{
  let bodyParams = null;
  if(params){
    if(method == 'GET'){
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
          url += '?' + paramsArray.join('&')
      } else {
          url += '&' + paramsArray.join('&')
      }
    }else if(method == 'POST'){
      bodyParams = JSON.stringify(params)
    }
  }
  return new Promise( (resolve, reject) => {  
    fetch(url, {  
          method,  
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:bodyParams
        })  
        .then((response) => { 
            if (response.ok) {  
                return response.json();  
            } else {  
                reject({status:-2})  
            }  
        })  
        .then((response) => {  
            resolve(response);  
        })  
        .catch((err)=> {  
          reject({status:-1});  
        })  
  })  
}