import React, { useState, useEffect, useContext } from "react";

const BattleshipContext = React.createContext();
export function useShipContext() {
  return useContext(BattleshipContext);
}

type Props = {
  children: React.ReactNode;
};

const BattleshipProvider = ({ children }: Props) => {
  let value = {};
  return (
    <BattleshipContext.Provider value={value}>
      {children}
    </BattleshipContext.Provider>
  );
};

export default BattleshipProvider;
