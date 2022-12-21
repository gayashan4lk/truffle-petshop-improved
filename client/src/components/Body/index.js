import { useState } from 'react';
import useEth from '../../contexts/EthContext/useEth';
import { petsArray } from '../../api';
import PetContainer from './PetContainer';
// import NoticeNoArtifact from '../Demo/NoticeNoArtifact';
// import NoticeWrongNetwork from '../Demo/NoticeWrongNetwork';
import { NoticeNoArtifact, NoticeWrongNetwork } from '../Notices';
import { Alert } from 'reactstrap';

const Body = () => {
	const { state } = useEth();

	return (
		<>
			{!state.artifact ? (
				<NoticeNoArtifact />
			) : !state.contract ? (
				<NoticeWrongNetwork />
			) : (
				<Alert>Smart Contract artifacts found.</Alert>
			)}
			<PetContainer pets={petsArray} />
		</>
	);
};

export default Body;
