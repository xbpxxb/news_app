import Fetch from '../utils/fetch'
export const society_data = (data) => {
  return{
    type:'SOCITY_DATA',
    data
  }
}
export const society_data_fetch = (num=10) => {
  return  (dispatch, getState) => {
      console.log(getState())
      return new Promise((resolve) => {
        Fetch('http://api.tianapi.com/social/','GET',{key:'e9954f0ea20bdc5065fa1d87c7436bec',num})
          .then(res => {
            dispatch(society_data(res.newslist))
            resolve(res)
          })
          .catch(err => console.log(err))
      })
  }
}