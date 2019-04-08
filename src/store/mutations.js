import * as types from './types';
export default {
  [types.VIEW_NAV]:(state,payload)=>state.bNav=payload,
  [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
  [types.UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,
  [types.CHECK_USER]:(state,payload)=>{
    state.user.auth=true
    state.user.data=payload
  },
  [types.CLEAR_USER]:(state)=>{
    state.user.auth=false;
    delete state.user.data;
  }
}