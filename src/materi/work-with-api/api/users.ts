import { User } from "../UserType";

export const getUsers = async (): Promise<User[]> => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		if (!response.ok) {
			throw new Error('Failed to fetch users');
		}
		return await response.json();
	} catch (error) {
		throw error;
	}
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		if (!response.ok) {
			throw new Error('Error adding User');
		}
		return await response.json();
	} catch (error) {
		throw error;
	}
};


export const updateUser = async (id:number, updatedUser:Partial<User>): Promise<User> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method : 'PUT',
            body: JSON.stringify(updatedUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })

        if(!response.ok){
            throw new Error("Failed to update user")
        }
        return await response.json()
    } catch (error) {
        throw error
    }
}

export const deleteUser = async(id:number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })

        if(!response.ok){
            throw new Error('Failed to delete user')
        }
    } catch (error) {
        throw error
    }
}