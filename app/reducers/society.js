const initState = {};

const society = (state = initState, action) => {
  switch (action.type) {
    case 'SOCITY_DATA'://社会数据
      return society_data(state,action);
    default:
      return state;
  }
}
// 社会数据
const society_data = (state,action) => {
  return Object.assign({},state,{data:action.data})
}

export default society