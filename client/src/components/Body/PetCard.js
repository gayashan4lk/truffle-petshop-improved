import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
} from 'reactstrap';

const PetCard = ({ pet, adopters, handleAdopt }) => {
	let button =
		adopters[pet.id] === '0x0000000000000000000000000000000000000000' ? (
			<Button
				color='primary'
				disabled={false}
				onClick={() => handleAdopt(pet.id)}
			>
				Adopt
			</Button>
		) : (
			<Button color='secondary' disabled={true}>
				Already adopted.
			</Button>
		);

	return (
		<>
			<Card
				color='light'
				style={{
					width: '250px',
				}}
			>
				<img alt='pet image' src={pet.picture} />
				<CardBody>
					<CardTitle tag='h3'>{pet.name}</CardTitle>
					<CardSubtitle className='mb-2 text-muted' tag='h5'>
						{pet.breed}
					</CardSubtitle>
					<CardText style={{ height: '80px' }}>
						He is living at {pet.location}. He is {pet.age}. He is a awesome
						dog.
					</CardText>
					{button}
				</CardBody>
			</Card>
		</>
	);
};

export default PetCard;
