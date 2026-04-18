import { useContext } from "react";
import myContext from "../context";

function useCart(){
    const context = useContext(myContext);
    if(!context){
        throw new Error("useCart must be used within MyContext Provider")
    }
    return context;
}
export default useCart;