import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const SingleEmployee = () => {
	let { id } = useParams();

	const [employeesDetails, setEmployeesDetails] = useState([]);
	const [singleEmployee, setSingleEmployee] = useState({});

	useEffect(() => {
		fetch('/employeeDetails.json')
			.then((res) => res.json())
			.then((data) => setEmployeesDetails(data.employee));
	}, []);

	useEffect(() => {
		const foundEmployees = employeesDetails.find(
			(employee) => employee.login.id === id
		);
		setSingleEmployee(foundEmployees);
	}, [employeesDetails]);

	return (
		<div>
			<Container className="d-flex justify-content-center">
				<Row className="d-flex flex-column">
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img
								variant="top"
								src={singleEmployee?.picture?.thumbnail}
							/>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<ListGroup variant="flush">
								<ListGroup.Item>{singleEmployee?.name}</ListGroup.Item>
								<ListGroup.Item>{singleEmployee?.email}</ListGroup.Item>
								<ListGroup.Item>{singleEmployee?.phone}</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SingleEmployee;
