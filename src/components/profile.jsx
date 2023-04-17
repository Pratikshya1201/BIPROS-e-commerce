import React, { useState } from "react";
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

export const Profile = () => {
    const details = JSON.parse(localStorage.getItem("item"));
  const [inputs, setInputs] = useState({
    name: details ? details.name :  "",
    adress: details ? details.adress :  "",
    phone: details ? details.phone :  "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("item", JSON.stringify(inputs));
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        phone: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        adress: "",
        phone: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, adress: tempData.email, phone: tempData.phone });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div >
      <h1 >User Profile</h1>
      <div >
        <form onSubmit={handleSubmit}>
          <div >
            <label><b>Name : </b></label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div >
            <label><b>Address : </b></label>
            <input name="adress" value={inputs.adress} onChange={handleChange} />
          </div>
          <div >
            <label><b>Phone number : </b></label>
            <input name="phone" value={inputs.phone} onChange={handleChange} />
          </div>
          <button type="submit" >
            {editClick ? "update" : "Add"}
          </button>
        </form>
      </div>
      {tableData.map((item, i) => (
            <Card variant='outlined' sx={{ minWidth: 275 }}>
                <CardContent>
             <Typography>
                {item.name}
                </Typography>
                <Typography>
                {item.adress}
                </Typography>
                <Typography>
                {item.phone}
                </Typography>
              </CardContent>
              <Button variant="contained" onClick={() => handleEdit(i)}>Edit</Button>
              <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(i)}>Delete</Button>
              </Card>
              ))
            };
            </div>
       )
        }