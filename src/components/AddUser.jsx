import React from "react";
import { FormControl, InputLabel, Input, FormHelperText ,Avatar,Button} from "@mui/material";
import { useHistory } from "react-router-dom";
function AddUser() {
  let history=useHistory();
  return (
    <>
    <div style={{textAlign:"center",background:"#dbdad5"}}> 
    <Avatar alt="+" src="" sx={{margin:"50px", width: 100, height:100 }} />
      </div>
      <FormControl sx={{ width: "80%", margin: "10px", marginTop: "20px" }}>
        <InputLabel htmlFor="first-name">First Name</InputLabel>
        <Input id="first-name" />
      </FormControl>
      <FormControl sx={{ width: "80%", margin: "10px", marginTop: "20px" }}>
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <Input id="last-name" />
      </FormControl>
      <FormControl sx={{ width: "80%", margin: "10px", marginTop: "20px" }}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
   <div style={{textAlign:"center"}}> 
<Button variant="outlined"  sx={{ width: "100px",marginRight:"10px" }} onClick={()=>history.push("/")}>Cancel</Button>
<Button variant="contained" sx={{ width: "200px" }}>Create User</Button>
</div>  
    </>
  );
}

export default AddUser;
