import React from "react";
import './navbar'
import Navbar from "./navbar";
import NotificationCard from "./notificationCard";

function Home(){

    return (
        <>
        <Navbar />
        <div style={{display:"flex"}}>
        <div
          style={{
            height: "88vh",
            width: "200px",
            backgroundColor: "#ddd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 10px",
            gap: "15px",
          }}
        >
          <button style={btnStyle}>JOBS</button>
          <button style={btnStyle}>Resume</button>
          <button style={btnStyle}>ToDo</button>
          <button style={btnStyle}>MyProfile</button>
          <button style={btnStyle}>Stats</button>
        </div>

        <div
          style={{
            flex: 2,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            // gap: "15px",
            alignItems: "flex-start",
          }}
        >
          <h2>Company notifications</h2>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>

        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#f3f3f3",
          }}
        >
          <h2>Latest placement stats</h2>
          <div
            style={{
              marginTop: "10px",
              borderRadius: "8px",
              backgroundColor: "#ddd",
              height: "300px",
              width: "100%",
            }}
          ></div>
        </div>
        </div>

        </>
    )
}

const btnStyle = {
  backgroundColor: "#222",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
};


export default Home;