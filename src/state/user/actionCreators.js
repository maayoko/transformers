import { CREATE_USER, DELETE_USER } from "./actionTypes";
import * as userService from "domain/services/userService";

const createUser = user => {
	return { type: CREATE_USER, payload: userService.createUser(user) };
};

const deleteUser = () => {
	return { type: DELETE_USER };
};

export { createUser, deleteUser };
