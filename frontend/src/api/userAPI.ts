import axios from "axios";

const URL = "http://localhost:8080/";

function getAllUsers(): Array<User> {
    const request = axios.get(URL + "users");

    request.then((response) => {
        return response.data;
    }, (error) => {
        console.error(error);
    });
    return [];
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email?: string;
}
