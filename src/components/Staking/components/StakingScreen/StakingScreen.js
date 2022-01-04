import React, { useState, useEffect } from "react";
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
} from "../MyPosition/MyPosition.styles";
import { LockPeriod, LockTime } from "./StakingScreen.styles";
import { useAccountChange } from "../../../../hooks";
import Asva from "../MyPosition/assets/asva.png";
import Lock from "../MyPosition/assets/lock.png";
import { web3Class } from "../../../../Web3/web3Class";
// import { fetchAccountDetails, Stake } from "../../../../Web3/web3";

const StakingScreen = () => {
  const [lockPeriod, setLockPeriod] = useState("30");
  const [stake, setStake] = useState("0");
  let userAcc;
  console.log(lockPeriod);
  console.log(stake);
  const account = useAccountChange();

  console.log(account);
  // const getDetails = async () => {
  //   let web3Instance = new web3Class();
  //   let account = await web3Instance.fetchAccountDetails();
  //   userAcc = account.account.address;
  //   console.log(userAcc);
  // };
  const Stakeing = async () => {
    let web3Instance = new web3Class();
    let sendTkn = await web3Instance.Stake(stake, account);
    console.log(sendTkn);
  };
  useEffect(() => {
    // getDetails();
  }, []);
  return (
    <>
      <IdoDetails>
        <IdoIcon src={Asva} alt="asva" />
        <IdoHeading>ASVA</IdoHeading>
        <Tag type="interest">Interest 10.5% APY</Tag>
      </IdoDetails>
      <LockPeriod>
        <h4>Lockup Period</h4>
        <LockTime>
          <Tag
            type={lockPeriod === "30" ? "time" : "default"}
            onClick={() => setLockPeriod("30")}
          >
            30 Day
          </Tag>
          <Tag
            type={lockPeriod === "60" ? "time" : "default"}
            onClick={() => setLockPeriod("60")}
          >
            60 Day
          </Tag>
        </LockTime>
      </LockPeriod>

      <UnstakeDetails>
        <h1>Available for unstake</h1>
        <p>$54,098,909</p>
      </UnstakeDetails>

      <StakeInputWrapper>
        <StakeInput
          type="number"
          value={stake}
          onChange={(e) => setStake(e.target.value)}
        />

        <MaxBtn>Max</MaxBtn>
      </StakeInputWrapper>

      <StakeButton onClick={Stakeing}>STAKE ASVA</StakeButton>
    </>
  );
};

export default StakingScreen;
