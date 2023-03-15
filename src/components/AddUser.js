//add the new user by yourself 
import React from 'react'
import { TextInput, Button, Icon, Card, Container } from 'react-materialize';
// eslint-disable-next-line no-unused-vars
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/Users';

function AddUsers() {
    
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    
    return (
        <Container>
            <Card style={{ width: "400px", marginLeft: "20px", marginTop: "50px" }}>
                <TextInput
                    label="Name"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                />
                <TextInput
                    label="User Name"
                    value={username}
                    onChange={(event) => { setUsername(event.target.value) }}

                />
                <Button onClick={() => {
                
                    dispatch(addUser({ id: 0, name: name, username: username }));
                }}
                >
                    Add user
                </Button>
            </Card>
        </Container>
    )
}

export default AddUsers;