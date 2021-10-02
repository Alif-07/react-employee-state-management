import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employees = () => {
	const [employees, setEmployees] = useState([]);
	const [displayEmployees, setDisplayEmployees] = useState([]);

	useEffect(() => {
		fetch(`/employeeData.json`)
			.then((res) => res.json())
			.then((data) => {
				setEmployees(data);
				setDisplayEmployees(data);
			});
	}, []);

	const handleSearch = (event) => {
		const searchValue = event.target.value.toLowerCase();
		const matchedResult = employees.filter((employee) =>
			employee.name.toLowerCase().includes(searchValue)
		);
		setDisplayEmployees(matchedResult);
	};

	return (
		<Container className="my-5">
			<Form className="d-flex">
				<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					onChange={handleSearch}
				/>
			</Form>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>Id</th>
						<th>Image</th>
						<th>Name</th>
						<th>Designatiom</th>
						<th>Table heading</th>
					</tr>
				</thead>
				<tbody>
					{displayEmployees.map((employee) => (
						<tr>
							<td>{employee?.id}</td>
							<td>Image</td>
							<td>{employee?.name}</td>
							<td>{employee?.designation}</td>
							<td>
								<NavLink
									to={`/employees/${employee?.id}`}
									activeStyle={{
										fontWeight: 'bold',
										color: 'red',
									}}
								>
									Details
								</NavLink>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Employees;
