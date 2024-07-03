import React, { useState } from 'react';
 export const context1 = React.createContext();
 function Context({ children }) {
    let [amount, setamount] = useState(0);
  return (
    <context1.Provider value={{ amount, setamount}}>
      {children}
    </context1.Provider>
  );
}

export default Context;
