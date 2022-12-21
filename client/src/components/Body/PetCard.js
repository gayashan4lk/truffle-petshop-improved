import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
} from 'reactstrap';

const PetCard = ({ pet, handleAdopt, isAdopted }) => {
	let button = isAdopted ? (
		<Button color='secondary' disabled={true}>
			Already adopted.
		</Button>
	) : (
		<Button
			color='primary'
			disabled={false}
			onClick={() => handleAdopt(pet.id)}
		>
			Adopt
		</Button>
	);

	let backgroundColor = isAdopted ? '#bbb' : '#fff';
	let textColor = isAdopted ? '#666' : '#555';

	return (
		<>
			<Card
				style={{
					width: '250px',
					background: `${backgroundColor}`,
				}}
			>
				<img alt='pet image' src={pet.picture} />
				<CardBody>
					<CardTitle tag='h3'>{pet.name}</CardTitle>
					<CardSubtitle className='mb-2 text-muted' tag='h5'>
						{pet.breed}
					</CardSubtitle>
					<CardText style={{ height: '80px', color: `${textColor}` }}>
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
