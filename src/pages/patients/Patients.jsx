import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import "./patients.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Pusher from "pusher-js";
import io from "socket.io-client";

const baseURL = "https://innovahyperbackend.onrender.com";

const Patients = () => {
  const [showForm, setShowForm] = useState(false);
  const [patients, setPatients] = useState([]);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [cardId, setCardId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const response = await axios.get(baseURL + "/medicalRecords/patients");
        if (response.status === 200) {
          setPatients(response.data.data);
        } else {
          console.error("No patients found or error in fetching data");
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const columns = ["#", "Names", "Card No.", "Email"];

  const data = patients.map((patient, index) => [
    index + 1,
    patient.fullName,
    patient.cardId,
    patient.email,
  ]);

  const options = {
    filterType: "checkbox",
    elevation: 0,
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20],
    rowHover: false,
    responsive: "none",
  };

  const getMuiTheme = () =>
    createTheme({
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "5px",
              color: "#80889C",
              fontFamily: "Poppins, sans-serif",
            },
            body: {
              padding: "10px 5px 10px 20px",
              textAlign: "left",
              fontFamily: "Poppins, sans-serif",
            },
            footer: {
              padding: "5px ",
              fontFamily: "Poppins, sans-serif",
            },
          },
        },
      },
    });

  const handleCreateNewUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.post(
        baseURL + "/medicalRecords/patients",
        {
          fullName,
          email,
          password,
          cardId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      setError(response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setShowForm(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleCardIdChange = (e) => {
    setCardId(e.target.value);
    setError("");
  };

  return (
    <div className="patients">
      {showForm && (
        <div className="formParentContainer">
          <div className="patientFormContainer">
            <button className="close" onClick={() => setShowForm(!showForm)}>
              x
            </button>
            <h1 className="title">New Patient</h1>
            <form action="#" onSubmit={handleCreateNewUser}>
              <div className="item">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  placeholder="Enter patient Full Names"
                  name="fullName"
                  onChange={handleFullNameChange}
                  required
                />
              </div>

              <div className="item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter patient Email"
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div className="item">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter patient Password"
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div className="item">
                <label htmlFor="cardId">Card Id</label>
                <input
                  type="text"
                  name="cardId"
                  placeholder="Enter patient Card Id"
                  onChange={handleCardIdChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        
      )}
      <div className="addPatientButton">
        <button className="addUserBtn" onClick={() => setShowForm(!showForm)}>
          + New user
        </button>
      </div>
      {loading ? (
        <h2 className="loading">Loading . . .</h2>
      ) : (
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Patients"}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      )}
    </div>
  );
};

export default Patients;
