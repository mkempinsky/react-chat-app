import {invalidUsernameCharacters} from './globals';

export const isFormEmpty = inputs => {
    const values = Object.values(inputs);
    const emptyValues = values.filter(value => !value.length);
    const isEmpty = emptyValues.length > 0 ? true : false;
    return isEmpty;
};
