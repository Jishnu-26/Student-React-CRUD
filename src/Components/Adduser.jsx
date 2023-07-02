import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PublishIcon from "@mui/icons-material/Publish";
import { useDispatch } from "react-redux";
import { FunctionAdduser } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const [name, namechange] = useState("");
  const [rollno, rollnochange] = useState("");
  const [email, emailchange] = useState("");
  const [department, departmentchange] = useState("");
  const [photourl, photourlchange] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    const userobj = { name, rollno, email, department, photourl };
    e.preventDefault();
    dispatch(FunctionAdduser(userobj));
    setTimeout(() => {
      navigate("/user");
    }, 2000);
    console.log(userobj);
  };
  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-center">Add New User</h1>

      <form className="mt-10 mx-auto w-1/2 grid gap-5 " onSubmit={handlesubmit}>
        <TextField
          value={name}
          onChange={(e) => namechange(e.target.value)}
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          value={rollno}
          onChange={(e) => rollnochange(e.target.value)}
          id="outlined-basic"
          label="Rollno"
          variant="outlined"
          required
        />
        <TextField
          value={email}
          onChange={(e) => emailchange(e.target.value)}
          id="outlined-basic"
          type="email"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          value={department}
          onChange={(e) => departmentchange(e.target.value)}
          id="outlined-basic"
          label="Department"
          variant="outlined"
          required
        />
        <TextField
          value={photourl}
          onChange={(e) => photourlchange(e.target.value)}
          id="outlined-basic"
          label="Photourl"
          variant="outlined"
        />
        <Button
          type="submit"
          className="px-auto w-fit"
          variant="contained"
          endIcon={<PublishIcon />}
        >
          ADD USER
        </Button>
      </form>
    </div>
  );
}

export default Adduser;
