export function Up(a){
    return {type:'INP',payload:a}     
}
export function Plus(){
    return {type:'INCREMENT'}
}

export function  Moins(){
    return {type:'DECREMENT'}
}