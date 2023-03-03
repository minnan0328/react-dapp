import "./ethers.scss";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import contractConfig from "../../config/contract";

const web3Modal = new Web3Modal({
	network: "goerli",
	providerOptions: {},
});

const Ethers = () => {
	const [ address, setAddress ] = useState(String);
	const [ balance, setBalance ] = useState(String);
	const [ ensAddress, setEnsAddress ] = useState(String);

	const [ message, setMessage ] = useState(String);
	const [ piadMessage, setPiadMessage ] = useState(String);
	const [ inputModel, setInputModel ] = useState("");
	const [ contract, setContract ] = useState(Object);
	const [ loading, setLoading ] = useState(false);

    useEffect(() => {
		const init = (async () => {
			const _instance = await web3Modal.connect()
			const _provider = new ethers.providers.Web3Provider(_instance);
			const _signer = _provider.getSigner();
			const _address = await _signer.getAddress()
			const _getBalance = await _provider.getBalance(_address);
			const _ensAddress = await _provider.lookupAddress(_address);
			const _contract = new ethers.Contract(contractConfig.goerli.address, contractConfig.goerli.abi, _signer);
	
			setAddress(_address);
			setBalance(ethers.utils.formatEther(_getBalance));
			setEnsAddress(_ensAddress ? _ensAddress : "");
			setContract(_contract);
			setMessage(await _contract.message());
			setPiadMessage(await _contract.retrievePaidMsg());

			console.log(_contract);
			console.log(_provider);

		});
		
		init();
	}, []);

	const sendMessage = (async () => {
		setLoading(true);

		let storeMessage = await contract.store(inputModel);
		console.log(storeMessage);
		
		let res = await storeMessage.wait();

		setLoading(false);

		console.log(res);
		
		setMessage(await contract.message());
	});

	const sendPiadMessage = (async () => {
		setLoading(true);

		let storePaidMsg = await contract.storePaidMsg( inputModel, {value: ethers.utils.parseEther("0.00001")} );
		let res = await storePaidMsg.wait();

		setLoading(false);

		console.log(res);

		setPiadMessage(await contract.retrievePaidMsg());
		
	});

    return <>
		<div className="ethers">
			<input type="text" value={inputModel} onChange={(e) => { setInputModel(e.target.value) }} />
			<button onClick={sendMessage} disabled={ contract == null || loading }>Send Message</button>
			<button onClick={sendPiadMessage} disabled={ contract == null || loading }>Send Piad Message</button>
			{inputModel}
			<p>Your ENS Address : {ensAddress}</p>
			<p>Your Address : {address}</p>
			<p>Your Balance : {balance}</p>
			<p>Your Message : {message}</p>
			<p>Your Piad Message : {piadMessage}</p>
		</div>
	</>
};

export default Ethers;