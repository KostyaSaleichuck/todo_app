
/*
import {User, sequelize } from './db/models';
import {Model, DataTypes} from 'sequelize';
class Task extends Model {

}
task.init({
    value: {type: DataTypes.STRING},
    deadline: {type: DataTypes.DATE},
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
},);
*/
/*
const {User} = require('./db/models');
const bcrypt = require('bcrypt');

//createUser
//getUserById
//updateUser
//deleteUser

const hashPassword = async password => {
    try{
        return bctypt.hash(password, 10);
    } catch (e) {

    }
};

const createUser = async data => {
    try{
        data.passwordHash = await hashPassword(data.password);
        const createdUser = await User.create(data);
        return createdUser.get();
    } catch (e) {
        throw e;
    }
};

createUser(
    {
        firstName: 'Name',
        lastName: 'Surname',
        email: 'user111@mail.com',
        login: 'user111',
        passwordHash: 'useruser'
    }
)
    .then(console.log)
    .catch(console.err);


const getUserById = async id => {
    try{
        return (await User.findByPk(id)).get();
    } catch (e) {
        throw e;
    }
};

getUserById(101)
    .then(console.log)
    .catch(console.error);

 */