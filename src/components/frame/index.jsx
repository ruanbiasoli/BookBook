import React from "react";
import { StyledFrame } from "./styled-frame";
import RegisterImage from "../../img/undraw_account_490v.svg";

const FrameRegister = () => {
  return (
    <div>
      <StyledFrame>
        <img src={RegisterImage} />
      </StyledFrame>
    </div>
  );
};

export default FrameRegister;
