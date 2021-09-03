import * as actionTypes from '../redux/action-types'

export const changeTestValue = () =>{
  return  { type: actionTypes.CHANGE_VALUE }
}

export const changTestvalueByParam = (value)=>{
  return {type: actionTypes.CHANGE_BY_PARAM, payload: value}
}

export const addToCart = (product)=>{
  return {type: actionTypes.ADD_TO_CART, payload: product}
}