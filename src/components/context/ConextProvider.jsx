import myContext from './context';
import useCartLogic from './hooks/useCartLogic';
function ConextProvider({ children }) {
   const cartLogic = useCartLogic();

   return (

      <myContext.Provider value={cartLogic}>
         {children}
      </myContext.Provider>

   )
}

export default ConextProvider