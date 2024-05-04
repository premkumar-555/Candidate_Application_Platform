import React from "react";
import CustomBox from "../../components/Box";
import { containerStyle } from "./styles";

const Body = ({children}) => {
  return <CustomBox sx={containerStyle}>{children}</CustomBox>;
};

export default Body;
