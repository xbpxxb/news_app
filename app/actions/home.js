export const photo_update = (imgSrc) => {
  return{
    type:'UPDATE_PHOTO',
    imgSrc
  }
}
export const user_name_update = (user_name) => {
  return{
    type:'UPDATE_USER_NAME',
    user_name
  }
}