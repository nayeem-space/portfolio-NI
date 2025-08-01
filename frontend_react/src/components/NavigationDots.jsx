import React from "react";
import { NavBarList } from "./Navbar/Navbar";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {NavBarList.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          onClick={() => setToggle(true)}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
