import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import './records.css';
import Action from '../../components/action/Action';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
const baseURL = 'https://innovahyperbackend.onrender.com';

const Records = () => {
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const response = await axios.get(baseURL + '/medicalRecords/records', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        console.log(response.data.data);
        if (response.status === 200) {
          setMedicalRecords(response.data.data);
        } else {
          console.error('No medical records found or error in fetching data');
        }
      } catch (error) {
        console.log('Failed to fetch medical records', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedicalRecords();
  }, []);

  const columns = [
    '#',
    'Names',
    'Card No.',
    'Temperature',
    'Weight',
    'Height',
    'Heart Beat',
    'Oxygen Level',
    'Action',
  ];

  console.log(medicalRecords);

  // Use the fetched data to construct the data array
  const data = medicalRecords
    ? medicalRecords.map((record, index) => [
        index + 1,
        record.fullName,
        record.cardId,
        record.temperature,
        record.weight,
        record.height,
        record.bloodPressure,
        record.oxygen,
        <Action text="send message" />,
      ])
    : [];

  // const datas = [
  //   [
  //     1,
  //     'Esther Umuhoza',
  //     'C3 D3 C3',
  //     37.5,
  //     59,
  //     165,
  //     82.5,
  //     <Action text="send message" />,
  //   ],
  // ];

  const options = {
    filterType: 'checkbox',
    elevation: 0,
    selectableRows: false,
    rowsPerPage: 10,
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
              padding: '5px',
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif',
            },
            footer: {
              padding: '5px',
              fontFamily: 'Poppins, sans-serif',
            },
          },
        },
      },
    });

  return (
    <div className="records">
      <div style={{ overflowX: 'auto', width: '100%' }}>
        {/* Container for horizontal scrolling */}
        {loading ? (<h2 className="loading">Loading . . .</h2>) : (
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={'Records'}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
        )}
      </div>
    </div>
  );
};

export default Records;
