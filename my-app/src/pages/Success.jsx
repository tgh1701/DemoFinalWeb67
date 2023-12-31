import React from "react";

function SuccessPage() {
  return (
    <div style={{height: "100%", background: "#EBF0F5"}}>
      <div style={{textAlign: "center", padding: "260px"}}>
        <div
          className="card"
          style={{
            background: "white",
            padding: "60px",
            borderRadius: "4px",
            boxShadow: "0 2px 3px #C8D0D8",
            display: "inline-block",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              borderRadius: "200px",
              height: "200px",
              width: "200px",
              background: "#F8FAF5",
              margin: "0 auto",
            }}
          >
            <i
              className="checkmark"
              style={{
                color: "#9ABC66",
                fontSize: "100px",
                lineHeight: "200px",
                marginLeft: "-15px",
              }}
            >
              ✓
            </i>
          </div>
          <h1
            style={{
              color: "#88B04B",
              fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
              fontWeight: 900,
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            Success
          </h1>
          <p
            style={{
              color: "#404F5E",
              fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
              fontSize: "20px",
              margin: "0",
            }}
          >
            We received your purchase request
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
