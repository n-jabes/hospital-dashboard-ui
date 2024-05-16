import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import './patients.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Patients = () => {

  const [showForm, setShowForm] = useState(false);
  const columns = ['#', 'Names', 'Card No.', 'Location'];

  const data = [
    [1, 'Esther Umuhoza ', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
    [1, 'Esther Umuhoza', 'C3 D3 C3', 'Musanze'],
  ];

  const options = {
    filterType: 'checkbox',
    elevation: 0,
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20],
    rowHover: false,
    responsive: 'none',
  };

  const getMuiTheme = () =>
    createTheme({
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '5px',
              color: '#80889C',
            },
            body: {
              padding: '10px 5px 10px 20px',
              textAlign: 'left',
            },
            footer: {
              padding: '5px ',
            },
          },
        },
      },
    });

  return (
    <div className="patients">
      {showForm && <div className="patientFormContainer">
        <button className="close" onClick={()=> setShowForm(!showForm)}>x</button>
        <h1 className="title">New Patient</h1>
        <form action="#">
          <div className="item">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter patient Full Names" />
          </div>
          
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter patient Email" />
          </div>
          
          <div className="item">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter patient Password" />
          </div>

          <div className="item">
            <label htmlFor="cardId">Card Id</label>
            <input type="text" placeholder="Enter patient Card Id"/>
          </div>
          <button>Submit</button>
        </form>
      </div>}
      <div className="addPatientButton">
        <button className="addUserBtn" onClick={()=> setShowForm(!showForm)}>+ New user</button>
      </div>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={'Patients'}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
};

export default Patients;
