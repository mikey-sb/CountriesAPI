import React from 'react';
import './ListItem.css';

const ListItem = ({country, key}) => {

    return <li>{country.name}</li>
}

export default ListItem;