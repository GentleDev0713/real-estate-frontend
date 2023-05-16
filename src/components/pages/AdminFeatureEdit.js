import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { useToast } from "@chakra-ui/react";
import icons from "./../../data/icons";

const AdminFeatureEdit = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://real-estate-backend-rwp6.onrender.com/admin/feature/${params.id}`
      )
      .then((res) => {
        setName(res.data.result.name);
        setIcon(res.data.result.icon);
      });
  }, []);

  const onCancel = () => {
    navigate("/admin/features");
  };
  const postData = () => {
    if (name == "") {
      toast({
        title: "Error",
        description: "Name field is empty!!!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (icon == "") {
      toast({
        title: "Error",
        description: "Code field is Empty!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    const formData = {
      name: name,
      icon: icon,
    };
    axios
      .put(
        `https://real-estate-backend-rwp6.onrender.com/admin/feature/${params.id}/update`,
        formData
      )
      .then((res) => {
        navigate("/admin/features");
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Acres - Real Estate React Template | Admin Feature Edit</title>
        <meta name="description" content="#" />
      </Helmet>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Feature Edit</h2>
      </div>
      <div
        className="acr-user-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          onSubmit={(e) => {
            postData();
            e.preventDefault();
          }}
          style={{
            width: "70%",
            padding: "2%",
          }}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-light"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="form-group row">
            <label className="col-md-1 col-lg-1" style={{ marginTop: "10px" }}>
              Icon :
            </label>
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              type="icon"
              className="form-control col-md-6 col-lg-6"
            >
              <option value="">Select Icon</option>
              {icons.map((value, key) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <i
              className={"flaticon-" + icon + ""}
              style={{ fontSize: "30px", marginLeft: "20px" }}
            ></i>
          </div>
          <div className="form-group text-right">
            <button type="Submit" className="btn btn-primary">
              <span className="fa fa-save"></span> Save
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => onCancel()}
            >
              <span className="fa fa-reply"></span> Cancel
            </button>
          </div>
        </form>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {error ? (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              backgroundColor: "#FF3131",
              color: "white",
              padding: "10px 20px 10px 20px",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <span>{error ? `${errorMsg}` : ""}</span>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                border: "white 2px solid",
                borderRadius: "30px",
                width: "40px",
                backgroundColor: "#FF3131",
                height: "40px",
              }}
              onClick={() => {
                setError(false);
              }}
            >
              <p
                style={{
                  color: "white",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                x
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AdminFeatureEdit;
