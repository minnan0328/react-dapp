import { useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import contractConfig from "../../config/contract";

const web3Modal = new Web3Modal({
	network: "goerli",
	providerOptions: {},
});

const Ethers = () => {
    useEffect(() => {
		async function init() {
			const instance = await web3Modal.connect();
			const provider = new ethers.providers.Web3Provider(instance);
			const signer = provider.getSigner();
			const address = await signer.getAddress();
			const balance = await provider.getBalance(address);
			const ensAddress = await provider.lookupAddress(address);

			const contract = new ethers.Contract(
				contractConfig.goerli.address,
				contractConfig.goerli.abi,
				signer
			);

			console.log(ethers);
			console.log(instance);
			console.log(address);
			console.log(balance, `${ethers.utils.formatEther(balance)}ETH`);
			console.log(ensAddress);
			console.log(contract);
		}

		init();
	}, []);


    return <>
        <h1>ethers</h1>
    </>
};

export default Ethers;