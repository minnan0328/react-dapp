const contract = {
    goerli: {
        address: "0x34765Ce972EF83dd46d8a283D60ddAcc44EA2Df7",
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "str",
                        "type": "string"
                    }
                ],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "str",
                        "type": "string"
                    }
                ],
                "name": "storePaidMsg",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "message",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "retrievePaidMsg",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
}

export default contract;