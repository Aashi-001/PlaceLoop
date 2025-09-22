import React from "react";

function Navbar() {
    return (
        <>
        <nav style={{padding: "1rem 2rem", backgroundColor:"black", color:"white", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",}}>
            <span style={{ textAlign: "center", fontSize: "1.5em", color: "white" }}>
                
            </span>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap"}}>
                {["settings", "profile", "notifications"].map((x) => (
                    <div style={{color: "white", textDecoration: "none", fontWeight: "bold"}}>{x}</div>
                ))}
            </div>
        </nav>
        </>
    )
}

export default Navbar;