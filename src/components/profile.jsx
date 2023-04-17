import React, { useState, useEffect } from "react";
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

export const Profile = () => {
    // const details = JSON.parse(localStorage.getItem("inputs"));
    // name: details ? details.name :  "",
    // adress: details ? details.adress :  "",
    // phone: details ? details.phone :  "",
  const [inputs, setInputs] = useState(JSON.parse(localStorage.getItem("inputs")) || 
    {
        name: "",
       adress: "",
        phone: "",
    }
);

    // useEffect(() => {
    //     localStorage.setItem("inputs", JSON.stringify(inputs));
    //   }, [inputs]);
  
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem("tableData")) || []);
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
    // localStorage.setItem("inputs", JSON.stringify(inputs));
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        adress: "",
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
}


  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, adress: tempData.adress, phone: tempData.phone });
    setEditClick(true);
    setEditIndex(index);
  };


  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [inputs, tableData]);

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
      {  tableData.map((inputs, i) => (
             <Card variant='outlined' sx={{ minWidth: 275 }}>
                <CardContent>
             <Typography>
                {inputs.name}
                </Typography>
                <Typography>
                {inputs.adress}
                </Typography>
                <Typography>
                {inputs.phone}
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