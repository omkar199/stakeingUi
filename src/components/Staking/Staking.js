import React, { useEffect, useState } from "react";

import {
  ClaimButton,
  Heading,
  OverviewContent,
  OverviewHeading,
  OverviewItem,
  OverviewList,
  OverviewText,
  Right,
  StakingContainerWrapper,
  StakingContent,
  StakingHeader,
  StakingTab,
} from "./Staking.styles";

import MyPosition from "./components/MyPosition/MyPosition";
import StakingScreen from "./components/StakingScreen/StakingScreen";
import StakingPopup from "../Modal/StakingPopup/StakingPopup";
import { web3Class } from "../../Web3/web3Class";
import { useAccountChange } from "../../hooks";
const Staking = () => {
  const [currentTab, setCurrentTab] = useState("Staking");
  const [showStakingPopup, setShowStakingPopup] = useState(false);
  const [reward, setReward] = useState(null);
  const [deposit, setDeposit] = useState(null);
  const [userReward, setUserReward] = useState(null);
  const openStakingPopup = () => setShowStakingPopup(true);
  const account = useAccountChange();
  // console.log(account);
  const getData = async () => {
    if (account !== undefined) {
      let web3Instance = new web3Class();
      web3Instance.showAddress();
      let rewards = await web3Instance.totalReward();

      console.log(rewards);

      // let deposit = await web3Instance.userDeposit(account);
      // let userReward = await web3Instance.calculate(account);

      // setReward(rewards);
      // setDeposit(deposit);
      // setUserReward(userReward);
    }
  };

  useEffect(() => {
    getData();
  }, [account]);
  return (
    <>
      <StakingPopup
        showStakingPopup={showStakingPopup}
        setShowStakingPopup={setShowStakingPopup}
      />
      <StakingContainerWrapper>
        <div>
          <Heading>Overview</Heading>

          <OverviewList>
            <OverviewItem>
              <OverviewHeading>{`${reward} ASVA`}</OverviewHeading>
              <OverviewText>Total Reward</OverviewText>
            </OverviewItem>

            <OverviewItem>
              <OverviewHeading>{`${deposit} ASVA`}</OverviewHeading>
              <OverviewText>Stake Value Locked</OverviewText>
            </OverviewItem>

            <OverviewItem>
              <OverviewContent>
                <div>
                  <OverviewHeading>{`${userReward} ASVA`}</OverviewHeading>
                  <OverviewText>Rewards</OverviewText>
                </div>
                <ClaimButton>Claim</ClaimButton>
              </OverviewContent>
            </OverviewItem>
          </OverviewList>
        </div>

        <Right>
          <StakingHeader>
            <StakingTab
              onClick={() => {
                setCurrentTab("Staking");
              }}
              active={currentTab === "Staking"}
            >
              <p>Staking</p>
            </StakingTab>
            <StakingTab
              onClick={() => {
                setCurrentTab("My Position");
              }}
              active={currentTab === "My Position"}
            >
              <p>My Position</p>
            </StakingTab>
          </StakingHeader>
          <StakingContent>
            {currentTab === "My Position" && <MyPosition />}
            {currentTab === "Staking" && <StakingScreen />}
          </StakingContent>
        </Right>
      </StakingContainerWrapper>
    </>
  );
};

export default Staking;
