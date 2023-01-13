/*
  Try `truffle exec scripts/increment.js`, you should `truffle migrate` first.

  Learn more about Truffle external scripts: 
  https://trufflesuite.com/docs/truffle/getting-started/writing-external-scripts
*/

const Adoption = artifacts.require('Adoption');

module.exports = async function (callback) {
	const deployed = await Adoption.deployed();

	try {
		const currentAdopters = await deployed.getAdopters();
		console.log(`### Current Adopters are: ${currentAdopters}`);
		console.log(`Type of current Adopters: ${typeof currentAdopters}`);
		console.log(
			`Is Current Adopters an array? : ${Array.isArray(currentAdopters)}`
		);
		console.log(JSON.stringify(currentAdopters));
	} catch (error) {
		console.error(error);
	}

	console.log('\n');

	try {
		const result = await deployed.adopt(33);
		//const {tx} = await deployed.adopt(1);
		console.log('### Confirmed transaction:');
		console.log(`Type of result: ${typeof result}`);
		//console.log(JSON.stringify(result));
		//console.trace(result);
		console.log(`Transaction Hash: ${result.tx}`);
		if (result.receipt.status) {
			console.log('Transaction Successful.');
		} else {
			console.log('Transaction failed.');
		}
	} catch (error) {
		console.error(error);
	}

	console.log('\n');

	const updatedAdopters = await deployed.getAdopters();
	console.log(`### Updated Adopters are: ${updatedAdopters}`);
	// console.log(`Type of updated Adopters: ${typeof updatedAdopters}`);
	// console.log('\n');

	callback();
};

/*
### This is what you get as the result of below function. ###
//	const result = await deployed.adopt(1);
//	console.log('Confirmed transaction:');
//	console.log(JSON.stringify(result));

This is the return value of 'await deployed.adopt(1)'.
{
	tx: '0x922176f6bf98781b3d635f6f76e4e79d030e30fcaa3c4cb58d9fd927b9cd935e',
	receipt: {
		transactionHash:
			'0x922176f6bf98781b3d635f6f76e4e79d030e30fcaa3c4cb58d9fd927b9cd935e',
		transactionIndex: 0,
		blockNumber: 5,
		blockHash:
			'0xba3856a630d68998d6a8e542436c49b72f2d6d5a550c722aee604b58ea8c5c2b',
		from: '0x5a5cae0dc1e62599810fdec102c184853546c760',
		to: '0x45a048495e73df82a5ba4b2ecdbb29f29aaf00c4',
		cumulativeGasUsed: 45268,
		gasUsed: 45268,
		contractAddress: null,
		logs: [
			{
				address: '0x45A048495e73Df82A5BA4B2EcDbB29f29aaf00C4',
				blockHash:
					'0xba3856a630d68998d6a8e542436c49b72f2d6d5a550c722aee604b58ea8c5c2b',
				blockNumber: 5,
				logIndex: 0,
				removed: false,
				transactionHash:
					'0x922176f6bf98781b3d635f6f76e4e79d030e30fcaa3c4cb58d9fd927b9cd935e',
				transactionIndex: 0,
				id: 'log_f09f7a88',
				event: 'petAdopted',
				args: { 0: '1', __length__: 1, petid: '1' },
			},
		],
		logsBloom:
			'0x00000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000010000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
		status: true,
		effectiveGasPrice: 3016250759,
		type: '0x2',
		rawLogs: [
			{
				address: '0x45A048495e73Df82A5BA4B2EcDbB29f29aaf00C4',
				blockHash:
					'0xba3856a630d68998d6a8e542436c49b72f2d6d5a550c722aee604b58ea8c5c2b',
				blockNumber: 5,
				data: '0x0000000000000000000000000000000000000000000000000000000000000001',
				logIndex: 0,
				removed: false,
				topics: [
					'0x1e41e5687404294ab09dc0553370a2b96dd31e2f2b7fbaa50c16ed91a655478b',
				],
				transactionHash:
					'0x922176f6bf98781b3d635f6f76e4e79d030e30fcaa3c4cb58d9fd927b9cd935e',
				transactionIndex: 0,
				id: 'log_f09f7a88',
			},
		],
	},
	logs: [
		{
			address: '0x45A048495e73Df82A5BA4B2EcDbB29f29aaf00C4',
			blockHash:
				'0xba3856a630d68998d6a8e542436c49b72f2d6d5a550c722aee604b58ea8c5c2b',
			blockNumber: 5,
			logIndex: 0,
			removed: false,
			transactionHash:
				'0x922176f6bf98781b3d635f6f76e4e79d030e30fcaa3c4cb58d9fd927b9cd935e',
			transactionIndex: 0,
			id: 'log_f09f7a88',
			event: 'petAdopted',
			args: { 0: '1', __length__: 1, petid: '1' },
		},
	],
};
*/
