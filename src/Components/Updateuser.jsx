import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PublishIcon from "@mui/icons-material/Publish";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FetchUserByID, FunctionUpdateuser } from "../Redux/Action";

function Updateuser() {
  const [_id, _idchange] = useState(0);
  const [name, namechange] = useState("");
  const [rollno, rollnochange] = useState("");
  const [email, emailchange] = useState("");
  const [department, departmentchange] = useState("");
  const [photourl, photourlchange] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  const userobj = useSelector((state)=>state.user.userobj)

  const handlesubmit = (e) => {
    const userobj = { _id, name, rollno, email, department, photourl };
    e.preventDefault();
    dispatch(FunctionUpdateuser(userobj,_id));
    setTimeout(() => {
      navigate("/user");
    }, 2000);
    console.log(userobj);
  };

  useEffect(() => {
    dispatch(FetchUserByID(id));
  }, []);
  useEffect(() => {
    if(userobj){
      _idchange(userobj._id);
      namechange(userobj.name);
      rollnochange(userobj.rollno)
      emailchange(userobj.email);
      departmentchange(userobj.department);
      photourlchange(userobj.photourl);
    }

  }, [userobj]);
  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-center">Add New User</h1>

      <form className="mt-10 mx-auto w-1/2 grid gap-5 " onSubmit={handlesubmit}>
        <TextField
          value={name}
          onChange={(e) => namechange(e.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          disabled
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
          UPDATE USER
        </Button>
      </form>
    </div>
  );
}

export default Updateuser;
