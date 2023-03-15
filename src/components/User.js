//show the list of users, update the username and delete user by yourself

import React from 'react'
import { TextInput, Button, Icon, Card, Container } from 'react-materialize';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import UsersData from '../sharedata/ListOfUsers'
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';
function User() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userss.val);
    const [newUsername, setNewUsername] = useState('');
    return (
        <Container>
            <Card style={{ width: "750px" }}>
                {userList.map((infor, index) => {
                    return (
                        <Card key={index}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <div style={{ display: "flex", width: "100%" }}>
                                        <Icon left style={{ marginTop: "20px" }}>
                                            account_circle
                                        </Icon>
                                        <h5>{infor.name}</h5>
                                    </div>
                                    <h5>{infor.username}</h5>
                                </div>
                                <div style={{ display: "flex", paddingLeft: "40px" }}>
                                    <TextInput
                                        style={{ width: "300px" }}
                                        label="Type new username"
                                        onChange={(e) => setNewUsername(e.target.value)}
                                    />
                                    <Button
                                        node="button"
                                        type="submit"
                                        waves="light"
                                        style={{ marginTop: "25px", marginLeft: "25px" }}
                                        onClick={() => {
                                            dispatch(updateUsername({ id: infor.id, username: newUsername }));
                                        }}

                                    >
                                        Update
                                    </Button>
                                    <Icon right style={{ color: "red", marginTop: "30px", cursor:"pointer" }} onClick={() => {
                                        dispatch(deleteUser({ id: infor.id }));
                                    }}
                                    >
                                        delete
                                    </Icon>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </Card>
        </Container>
    )
}

export default User;