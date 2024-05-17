import React from 'react';
import MUIDataTable from 'mui-datatables';
import './records.css';
import Action from '../../components/action/Action';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Records = () => {
  const columns = [
    '#',
    'Names',
    'Card No.',
    'Temperature',
    'Weight',
    'Height',
    'Heart beat',
    'Action',
  ];

  const data = [
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
    [
      1,
      'Esther Umuhoza',
      'C3 D3 C3',
      37.5,
      59,
      165,
      82.5,
      <Action text="send message" />,
    ],
  ];

  const options = {
    filterType: 'checkbox',
    elevation: 0,
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20],
    rowHover: false,
    responsive: 'none'
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
        {' '}
        {/* Container for horizontal scrolling */}
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={'Records'}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Records;
