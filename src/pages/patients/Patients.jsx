import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import './patients.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Pusher from 'pusher-js';

const baseURL = 'https://innovahyperbackend.onrender.com';

const Patients = () => {
  const [showForm, setShowForm] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(baseURL + '/medicalRecords/patients');
        if (response.status === 200) {
          setPatients(response.data.data);
        } else {
          console.error('No patients found or error in fetching data');
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  console.log(patients);

  const columns = ['#', 'Names', 'Card No.', 'Location'];

  const data = patients.map((patient, index) => [
    index + 1,
    patient.fullName,
    patient.cardId,
    patient.email,
  ]);


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
              fontFamily: 'Poppins, sans-serif',
            },
            body: {
              padding: '10px 5px 10px 20px',
              textAlign: 'left',
              fontFamily: 'Poppins, sans-serif',
            },
            footer: {
              padding: '5px ',
              fontFamily: 'Poppins, sans-serif',
            },
          },
        },
      },
    });

  return (
    <div className="patients">
      {showForm && (
        <div className="patientFormContainer">
          <button className="close" onClick={() => setShowForm(!showForm)}>
            x
          </button>
          <h1 className="title">New Patient</h1>
          <form action="#">
            <div className="item">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter patient Full Names" required/>
            </div>

            <div className="item">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter patient Email" required/>
            </div>

            <div className="item">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter patient Password" required/>
            </div>

            <div className="item">
              <label htmlFor="cardId">Card Id</label>
              <input type="text" placeholder="Enter patient Card Id" required/>
            </div>
            <button>Submit</button>
          </form>
        </div>
      )}
      <div className="addPatientButton">
        <button className="addUserBtn" onClick={() => setShowForm(!showForm)}>
          + New user
        </button>
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
