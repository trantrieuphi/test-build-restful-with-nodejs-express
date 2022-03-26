import { v4 as uuidv4 } from 'uuid';

let users = [];


export const createUser = (req, res) => {
    const user = req.body;

    const newUser = {...user, id: uuidv4() };

    users.push(newUser);

    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const getAllUser = (req, res) => {
    res.send(users);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    users = users.filter((user) => user.id != id);

    res.send(`user co ten la: ${foundUser.FirstName} da bi xoa`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { FirstName, LastName, Age } = req.body;
    const foundUser = users.find((user) => user.id == id);

    if (FirstName) {
        foundUser.FirstName = FirstName;
    }

    if (LastName) {
        foundUser.LastName = LastName;
    }

    if (Age) {
        foundUser.Age = Age;
    }

    res.send(`user co ten la: ${foundUser.FirstName} da duoc thay doi`);
}