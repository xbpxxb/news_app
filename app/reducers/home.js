const initState = {photo:null,user_name:'北岛初晴'};

const DataEdition = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_PHOTO'://更新头像
      return update_photo(state,action);
    case 'UPDATE_USER_NAME':
      return update_user_name(state,action)
    default:
      return state;
  }
}
// 更新头像
const update_photo = (state,action) => {
  return Object.assign({},state,{photo:action.imgSrc})
}
// 更新名字
const update_user_name = (state,action) => {
  return Object.assign({},state,{user_name:action.user_name})
}
export default DataEdition