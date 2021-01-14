import React from 'react';
const Uname = (user) => `${user.first} ${user.last}`;

const data = {
	first:'Denis',
	last:'Popov'
};
export const element = <h1>{Uname(data)}</h1>;