import { useEffect, useState } from 'react';
import { User } from './UserType';
import { createUser, deleteUser, getUsers, updateUser } from './api/users';

const UsersList = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const data = await getUsers()
				setUsers(data);
				setLoading(false);
			} catch (error) {
				setError((error as Error).message);
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const handleCreateUser = async () => {
		const newUser: Omit<User, "id"> = {
			name: 'User',
			username: "Username",
			email: 'user@gmail.com'
		}
		try {
			const data: User = await createUser(newUser)
			setUsers([...users, data])
		} catch (error) {
			setError((error as Error).message)
		}
	}

	const handleUpdateUser = async (id: number) => {
		const updatedUser: Partial<User> = {
			id: id,
			name: 'updatedname',
			email: 'updatedemail@gmail.com',
			username: 'updatedusername'
		}
		try {
			const data: User = await updateUser(id, updatedUser)
			setUsers(users.map(user => user.id === id ? data : user))
		} catch (error) {
			setError((error as Error).message)
		}
	}

	const handleDeleteUser = async (id: number) => {
		try {
			await deleteUser(id)
			setUsers(users.filter(user => user.id !== id))
		} catch (error) {
			setError((error as Error).message)
		}
	}

	if (loading) {
		return <h1>Loading</h1>;
	}

	if (error) {
		return <h1>error fetching data . . .</h1>;
	}

	return (
		<div>
			<button onClick={handleCreateUser}>Add User</button>
			<ul>
				{
					users.map((user) => {
						return (
							<li className='mb-2' key={user.id}>
								{user.name} - {user.email}
								<button className='ml-1 mr-1' onClick={() => handleUpdateUser(user.id)}>Update</button>
								<button className='ml-1 mr-1' onClick={() => handleDeleteUser(user.id)}>Delete</button>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default UsersList;