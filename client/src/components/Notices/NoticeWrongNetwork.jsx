import { Alert } from 'reactstrap';

function NoticeWrongNetwork() {
	return (
		<Alert color='danger'>
			⚠️ MetaMask is not connected with the correct network!
		</Alert>
	);
}

export default NoticeWrongNetwork;
