import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    navigate("/login");
    JSON.parse(localStorage.removeItem("userInfo"));
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
        className="col-md-10 col-lg-10"
        style={{ fontSize: "25px", marginLeft: "60px", MarginTop: "5px" }}
      >
        Admin Panel
      </div>
      <div
        className="col-md-2 col-lg-2 text-right"
        style={{ fontSize: "20px" }}
      >
        {userInfo.name}
      </div>
      <div className="col-md-1 col-lg-1 text-center" style={{}}>
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
