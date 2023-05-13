import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    JSON.parse(localStorage.removeItem("userInfo"));
    navigate("/login");
  };

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        padding: "10px 20px",
      }}
    >
      <div
        className="col-md-7 col-lg-7 text-right"
        style={{ fontSize: "25px", marginLeft: "100px", MarginTop: "10px" }}
      >
        Admin Panel
      </div>
      <div
        className="col-md-3 col-lg-3"
        style={{
          fontSize: "30px",
          textAlign: "right",
          paddingRight: "15px",
          marginTop: "-5px",
          fontFamily: "Times New Roman",
        }}
      >
        {userInfo.name}
      </div>
      <div
        className="col-md-2 col-lg-2 text-center"
        style={{ marginRight: "50px" }}
      >
        <p
          onClick={() => logout()}
          style={{
            backgroundColor: "white",
            padding: "5px 10px",
            borderRadius: "20px",
            cursor: "pointer",
            width: "50%",
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
};

export default AdminHeader;
