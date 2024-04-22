"use client";

import { Context, ReactNode, createContext, useState } from "react";

export const TabContext = createContext({
  tab: "red",
  setTab: (value: "red" | "fol") => {},
});
type Props = {
  children: ReactNode;
};
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
