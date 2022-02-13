import { User } from "@/interfaces/User";
import axios from "axios";

export const getUsers = async (): Promise<User[]> => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);
	console.log(response.data);
	return response.data;
};
