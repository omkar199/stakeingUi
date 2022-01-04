import React, { useEffect, useState } from "react";

import {
  IdoDetails,
  IdoHeading,
  IdoIcon,
  LockIcon,
  StakeButton,
  StakedDetails,
  StakeInputWrapper,
  Tag,
  UnstakeDetails,
  StakeInput,
  MaxBtn,
} from "./MyPosition.styles";

import Asva from "./assets/asva.png";
import Lock from "./assets/lock.png";
import { web3Class } from "../../../../Web3/web3Class";
import { useAccountChange } from "../../../../hooks";
const MyPosition = () => {
  const [unStake, setUnStake] = useState("0");
  const account = useAccountChange();

  const unstakes = async () => {
    let web3Instance = new web3Class();
    let sendTkn = await web3Instance.Withdraws(account);
    console.log(sendTkn);
  };
  // useEffect(() => {
  //   unstakes();
  // }, []);
  return (
    <>
      <IdoDetails>
        <IdoIcon src={Asva} alt="asva" />
        <IdoHeading>ASVA</IdoHeading>
        <Tag type="interest">Interest 10.5% APY</Tag>
        <Tag type="time">
          <LockIcon src={Lock} alt="lock" />
          07 Days
        </Tag>
      </IdoDetails>
      <StakedDetails>
        <h1>My Staked Amount</h1>
        <p>$54,098,909</p>
      </StakedDetails>

      <UnstakeDetails>
        <h1>Available for unstake</h1>
        <p>$54,098,909</p>
      </UnstakeDetails>

      <StakeInputWrapper>
        <StakeInput
          type="text"
          value={unStake}
          onChange={(e) => setUnStake(e.target.value)}
        />
        <MaxBtn>Max</MaxBtn>
      </StakeInputWrapper>

      <StakeButton onClick={unstakes}>UNSTAKE ASVA</StakeButton>
    </>
  );
};

export default MyPosition;
