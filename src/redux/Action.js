export const ADD=(item)=>{
        return{
            type:"ADD_CART",
            payload:item
        }
}


 export const DLT=(id)=>{
    return{
        type:"RMV_CART",
        data:id
    }
}

export const TOTAL=(ele)=>{
    return{
        type:"total",
        data:ele
    }
}



