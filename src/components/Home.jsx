import React, { useState, useEffect } from "react";
import { Fab, Avatar, Button, Card } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import "../styles/Home.css";
import axios from "axios";
function Home() {
  let history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setUsers(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <>
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={() => history.push("/adduser")}
      >
        <AddCircleIcon />
      </Fab>
      <h1>All Users</h1>
      <div className="container">
        {users.map((usersData) => {
          return (
            <Card variant="outlined" className="card-view">
              <div className="avatar">
                <Avatar sx={{ margin: "10px", width: 50, height: 50 }} src={usersData.avatar}/>
              </div>
              <div className="card">
                <p className="name">{usersData.first_name} <span>{usersData.last_name}</span></p>
                <p>{usersData.email}</p>
              </div>
              <div className="edit_icon">
              <EditIcon
                sx={{
                  height:30,
                  width:30,
                  marginTop: "20px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                className="edit-icon"
              />
              </div>
            </Card>
          );
        })}
      </div>
      
    </>
  );
}

export default Home;
