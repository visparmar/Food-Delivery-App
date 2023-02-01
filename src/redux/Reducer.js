const initialState={
    carts:[],
    price:0
};



const cartreducer=(state=initialState,action)=>{
    switch(action.type){
 case "ADD_CART": 
    return {
        ...state,
   carts:[ ...state.carts,action.payload]

};

 case "RMV_CART":
 const data=state.carts.filter((ele)=> ele.id !==action.data)


        return {
            ...state,
            carts:data
        }

                 
               

default : 
return state


    }

}
export default cartreducer;