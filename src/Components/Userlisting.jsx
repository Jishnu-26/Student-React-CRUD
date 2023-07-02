import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Rollno, Name, Email, Department, Photourl) {
  return { Rollno, Name, Email, Department, Photourl };
}


function Userlisting(props) {
  useEffect(() => {
    props.loaduser();
  }, []);

  const handledelete = (id) => {
    if (window.confirm("Do you want to delete the user " + id)) {
      props.removeuser(id);
      setTimeout(()=>{
        props.loaduser();
      },2000);
      
      toast.success("User deleted successfully");
    }
  };
  return props.user.loading ? (
    <div>
      <h2 className="text-2xl text-center  text-yellow-600 font-semibold">
        Loading...
      </h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <>
      <div className="flex mx-4 justify-between mt-5 mb-8">
        <div className="text-center text-3xl mt-2 mb-2">User Listing</div>
        <div className="mt-2 mb-2">
          <Link to={"/user/add"}>
            <Button variant="contained" endIcon={<AddCircleIcon />}>
              Add User
            </Button>
          </Link>
        </div>
      </div>
      <TableContainer className="mt-2 px-5" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rollno</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>
              <StyledTableCell align="center">Photourl</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.user.userlist &&
              props.user.userlist.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component="th" scope="row">
                    {item.rollno}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.department}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.photourl}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Stack
                      className="justify-center"
                      direction="row"
                      spacing={2}
                    >
                      <Button
                        onClick={() => handledelete(item._id)}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                      <Link to={"/user/edit/" + item._id}>
                        <Button variant="contained" endIcon={<EditIcon />}>
                          Edit
                        </Button>
                      </Link>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (id) => dispatch(Removeuser(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
