import React from "react";

function notificationCard() {
    return (
        <>
        <div style={{
        width: "100%",
        maxWidth: "700px",
        padding: "15px 20px",
        borderRadius: "8px",
        backgroundColor: "#ccc",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        margin: "15px"}}>
            <h3 style={{ margin: "0 0 8px", fontSize: "16px" }}>title</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>message</p>
        </div>
        </>
    )
}

export default notificationCard;