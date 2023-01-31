const initialState=0;

const reducer=(state=initialState,action)=>{
    switch(action.type){
 case "set_cart": {return state + 1;}
  default : return state
    }

}
export default reducer;