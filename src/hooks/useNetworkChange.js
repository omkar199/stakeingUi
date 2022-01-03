import { useState, useEffect } from "react";
import { fetchAccountDetails } from "../Web3/web3";

const useNetworkChange = () => {
  const [networkId, setNetworkId] = useState(undefined);
  useEffect(() => {
    if (window.ethereum !== undefined)
      window.ethereum.on("networkChanged", function (networkId) {
        // console.log("networkChanged", networkId);
        setNetworkId(parseFloat(networkId));
      });

    const getNetwork = async () => {
      let data = await fetchAccountDetails();
      setNetworkId(parseFloat(data.connection.networkId));
    };

    getNetwork();
  }, []);
  return networkId;
};

export default useNetworkChange;
