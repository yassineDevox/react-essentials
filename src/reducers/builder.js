export const initialState = {
  banner: {
    mobile: {
      position: 'top'
    },
    desktop: {
      position: 'center'
    }
  },
  currentDevice:"desktop"
}
export const types = {
    SWITCH_DEVICE:"sd",
    SET_POSITION:"sp"
}


export const switchDevice = device=>({
  type:types.SWITCH_DEVICE,
  payload:{device}
}) 
export const setPosition = pos=>({
  type:types.SET_POSITION,
  payload:{pos}
}) 
export const builderReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case types.SWITCH_DEVICE : {
        return {
            ...prevState,
            currentDevice:payload.device
        }
    }
    case types.SET_POSITION : {
      return {
        ...prevState,
        banner:{
          ...prevState.banner,
          [payload.device]:{
            position:payload.pos
          }
        }
          
      }
  }
    default:
      break
  }
}
