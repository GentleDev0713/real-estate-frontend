import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Locationtab from "./Locationtab";
import { statusList } from "../../../data/common";

import { Container, useToast } from "@chakra-ui/react";

function Edit() {
  const toast = useToast();
  const params = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [typeList, setTypeList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [featureList, setFeatureList] = useState([]);
  const [tabKey, setTabKey] = useState("tab1");

  useEffect(() => {
    axios
      .get("https://real-estate-backend-rwp6.onrender.com/admin/get-categories")
      .then((res) => {
        setTypeList(res.data.result);
      });
    axios
      .get("https://real-estate-backend-rwp6.onrender.com/admin/get-currencies")
      .then((res) => {
        setCurrencyList(res.data.result);
      });
    axios
      .get("https://real-estate-backend-rwp6.onrender.com/admin/get-features")
      .then((res) => {
        setFeatureList(res.data.result);
      });
    axios
      .get(
        `https://real-estate-backend-rwp6.onrender.com/admin/property/${params.id}`
      )
      .then((res) => {
        let data = res.data.result;
        setDescription(data.BasicInformation.description);
        setName(data.BasicInformation.name);
        setStatus(data.BasicInformation.status);
        setType(data.BasicInformation.type);
        setCurrency(data.BasicInformation.currency);
        setPrice(data.BasicInformation.price);
        setPeriod(data.BasicInformation.period);
        setSpace(data.BasicInformation.space);
        setVideo(data.BasicInformation.video);
        // setThumbnail(data.Gallery.file);
        // setFiles(data.Gallery.picture);
        setLocation({
          lat: data.Location.latitude,
          long: data.Location.longitude,
          region: data.Location.region,
          address: data.Location.address,
        });
        // let features = data.Features[0].split(",");
        // setFeatures(features);
        setId(data.Details.id);
        setBeds(data.Details.beds);
        setBaths(data.Details.bathrooms);
        setCondition(data.Details.condition);
        setBuilt(data.Details.built);
        setNeighbor(data.Details.neighbor);
        setLiving(data.Details.living);
        setDining(data.Details.dining);
        setStory(data.Details.story);
        setParking(data.Details.parking);
      });
  }, [params.id]);

  // Error
  const [error, setError] = useState(undefined);
  const [fieldError, setFieldError] = useState(undefined);
  const [minFileError, setMinFileError] = useState(undefined);
  const [maxFileError, setMaxFileError] = useState(undefined);

  //  Basic Information
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statusList[0]);
  const [type, setType] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [space, setSpace] = useState("");
  const [video, setVideo] = useState("");

  //  Gallery
  const [thumbnail, setThumbnail] = useState("");

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file, key) => (
    <div className="thumb" key={key}>
      <div className="thumbInner">
        <img src={file.preview} alt="img" />
      </div>
    </div>
  ));

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  //  Location
  const [location, setLocation] = useState({
    lat: 50.29011,
    long: 5.2712,
    region: "",
    address: "",
  });
  const locationData = (data) => {
    setLocation(data);
  };

  //  Feature
  const [features, setFeatures] = useState([]);
  const featuresData = (id) => {
    if (features.indexOf(id) !== -1) {
      features.splice(features.indexOf(id), 1);
    } else {
      setFeatures([...features, id]);
    }
  };

  //  Details
  const [id, setId] = useState("");
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [condition, setCondition] = useState("");
  const [built, setBuilt] = useState("");
  const [neighbor, setNeighbor] = useState("");
  const [living, setLiving] = useState(true);
  const [dining, setDining] = useState(true);
  const [story, setStory] = useState(0);
  const [parking, setParking] = useState("");

  //  Validation
  const validate = () => {
    if (!description) {
      toast({
        title: "Error",
        description: "Insert Property Description",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!name) {
      toast({
        title: "Error",
        description: "Insert Property Name",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!price) {
      toast({
        title: "Error",
        description: "Insert Property Price",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }

    if (!space) {
      toast({
        title: "Error",
        description: "Insert Property Space",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab1");
      return false;
    }
    if (!id) {
      toast({
        title: "Error",
        description: "Insert Property ID",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!beds) {
      toast({
        title: "Error",
        description: "Insert Property Beds",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!baths) {
      toast({
        title: "Error",
        description: "Insert Property Bathrooms",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab5");
      return false;
    }

    if (!thumbnail) {
      toast({
        title: "Error",
        description: "Insert Property Thumbnail",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Insert Property Gallery",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    if (files.length > 5) {
      toast({
        title: "Error",
        description: "You can upload only 5 pictures",
        status: "warning",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      setTabKey("tab2");
      return false;
    }

    return true;
  };

  //  Submit
  const submitData = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (user === null) {
      alert("You need to login first");
    } else {
      const formData = {
        name: name,
        description: description,
        status: status,
        type: type ? type : typeList[0].name,
        currency: currency ? currency : currencyList[0].symbol,
        price: price,
        period: period ? period : "Monthly",
        space: space,
        video: video,
        lat: location.lat,
        long: location.long,
        address: location.address,
        region: location.region,
        id: id,
        beds: beds,
        bathrooms: baths,
        condition: condition,
        built: built,
        neighbor: neighbor,
        living: living,
        dining: dining,
        story: story,
        parking: parking,
        category: type ? type : typeList[0].name,
        authorId: user._id,
      };
      axios
        .put(
          `https://real-estate-backend-rwp6.onrender.com/admin/property/${params.id}/update`,
          formData
          // {
          //   headers: { "Content-Type": "multipart/form-data" },
          // }
        )
        .then((res) => {
          const Msg = res.data.Msg;
          navigate(-1);
        })
        .catch((err) => {
          const Msg = err.response.data.Msg;
          if (Msg === "Please Fill Out All Feilds") {
            setError(true);
            setFieldError(true);
            setMinFileError(false);
          } else if (Msg === "Please Fill Thumbnail Picture") {
            setError(true);
            setFieldError(false);
            setMinFileError(true);
          } else if (Msg === "You can upload only 5 pictures") {
            setError(true);
            setFieldError(false);
            setMinFileError(false);
            setMaxFileError(true);
          } else {
            console.log(err.response.data);
          }
        });
    }
  };

  return (
    <div className="section">
      <Container maxW="80%">
        <div className="row">
          <Tab.Container defaultActiveKey={tabKey} activeKey={tabKey}>
            {/* Tabs Start */}
            <div className="col-md-4">
              <Nav variant="tabs" className="nav nav-tabs tab-cards">
                <Nav.Item>
                  <Nav.Link eventKey="tab1" onClick={() => setTabKey("tab1")}>
                    <span>01</span> Basic Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2" onClick={() => setTabKey("tab2")}>
                    <span>02</span> Gallery
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3" onClick={() => setTabKey("tab3")}>
                    <span>03</span> Location
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4" onClick={() => setTabKey("tab4")}>
                    <span>04</span> Features
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab5" onClick={() => setTabKey("tab5")}>
                    <span>05</span> Details
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* Tabs End */}
            {/* Tab Content Start */}
            <div className="col-md-8">
              <form>
                <Tab.Content className="m-0">
                  <Tab.Pane eventKey="tab1">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <label>Property Description</label>
                        <textarea
                          name="content"
                          rows={4}
                          className="form-control"
                          placeholder="Property Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Name"
                          required
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Status</label>
                        <select
                          className="form-control"
                          name="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          {statusList.map((res, key) => (
                            <option key={key} value={res}>
                              {res}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label>Property Type</label>
                        <select
                          className="form-control"
                          name="type"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          {typeList.map((res, key) => (
                            <option key={key} value={res.name}>
                              {res.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Price</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <select
                              className="form-control"
                              name="type"
                              value={currency}
                              onChange={(e) => setCurrency(e.target.value)}
                            >
                              {currencyList.map((res, key) => (
                                <option key={key} value={res.symbol}>
                                  {res.symbol}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            placeholder="Property Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      {status === "Rental" ? (
                        <div className="col-md-6">
                          <label>Rental Period</label>
                          <select
                            className="form-control"
                            name="period"
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                          >
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </select>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="col-md-6 form-group">
                        <label>Property Space (Sqm)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Space (Sqm)"
                          name="space"
                          value={space}
                          onChange={(e) => setSpace(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <label>Property Video</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Video URL"
                          name="video"
                          value={video}
                          onChange={(e) => setVideo(e.target.value)}
                        />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="form-group">
                      <label>Property Thumbnail</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="propertyThumbnail"
                          onChange={(e) => setThumbnail(e.target.files[0])}
                          style={{ display: "none" }}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="propertyThumbnail"
                        >
                          Choose File
                        </label>
                        <span style={{ marginLeft: "30px" }}>
                          {thumbnail ? thumbnail.name : ""}
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Property Gallery</label>
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps(-5)} multiple />
                        <div className="dropzone-msg dz-message needsclick">
                          <i className="fas fa-cloud-upload-alt" />
                          <h5 className="dropzone-msg-title">
                            Drop files here or click to upload.
                          </h5>
                          <span className="dropzone-msg-desc">
                            This is just a demo dropzone. Selected files are{" "}
                            <strong>not</strong> actually uploaded.
                          </span>
                        </div>
                      </div>
                      <aside className="thumbsContainer">{thumbs}</aside>
                      <span className="acr-form-notice">
                        *You can upload up to 5 images for your listing
                      </span>
                      <span className="acr-form-notice">
                        *Listing images should be atleast 620x480 in dimensions
                      </span>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <Locationtab locationData={locationData} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4">
                    <div className="row">
                      {featureList.map((res, key) => (
                        <div key={key} className="col-lg-4 col-md-6 col-sm-6">
                          <label className="acr-listing-feature">
                            <input
                              type="checkbox"
                              name={"feature" + res._id + ""}
                              onClick={() => featuresData(res._id)}
                            />
                            <i className="acr-feature-check fas fa-check" />
                            <i
                              className={
                                "acr-listing-feature-icon flaticon-" +
                                res.icon +
                                ""
                              }
                            />
                            {res.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab5">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label>Property ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property ID"
                          name="id"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Beds</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Beds"
                          name="beds"
                          value={beds}
                          onChange={(e) => setBeds(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Bathrooms</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of Bathrooms"
                          name="baths"
                          value={baths}
                          onChange={(e) => setBaths(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Condition</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Condition"
                          name="condition"
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Year Built</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Year Built"
                          name="built"
                          value={built}
                          onChange={(e) => setBuilt(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Neighborhood</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property Neighborhood"
                          name="neighborhood"
                          value={neighbor}
                          onChange={(e) => setNeighbor(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Living Room</label>
                        <select
                          className="form-control"
                          name="livingRoom"
                          value={living}
                          onChange={(e) => setLiving(e.target.value)}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Dining Room</label>
                        <select
                          className="form-control"
                          name="diningRoom"
                          value={dining}
                          onChange={(e) => setDining(e.target.value)}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Building Stroies</label>
                        <input
                          type="number"
                          className="form-control"
                          name="buildstory"
                          value={story}
                          onChange={(e) => setStory(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Parking</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Parking"
                          name="Parking"
                          value={parking}
                          onChange={(e) => setParking(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="termsAndConditions"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="termsAndConditions"
                        >
                          I Agree to the terms &amp; Conditions of Property
                          Submission
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn-custom"
                      name="submit"
                      onClick={(e) => {
                        submitData(e);
                      }}
                    >
                      Submit Listing
                    </button>
                    {user.isAdmin ? (
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={() => navigate(-1)}
                      >
                        <span className="fa fa-reply"></span> Cancel
                      </button>
                    ) : (
                      <></>
                    )}
                    <div>
                      {error === undefined || false ? (
                        ""
                      ) : (
                        <div
                          style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "80%",
                              backgroundColor: "#FF3131",
                              color: "white",
                              padding: "10px 20px 10px 20px",
                              borderRadius: "5px",
                              alignItems: "center",
                            }}
                          >
                            <span>
                              {fieldError ? " Please Fill Out All Fields" : ""}
                            </span>
                            <span>
                              {minFileError
                                ? " Please Select Images for Thumbnail or Gallery"
                                : ""}
                            </span>
                            <span>
                              {maxFileError
                                ? "You can select only 5 pictures"
                                : ""}
                            </span>
                            <button
                              style={{
                                border: "white 2px solid",
                                borderRadius: "25px",
                                width: "35px",
                                backgroundColor: "#FF3131",
                                color: "white",
                                fontSize: "15px",
                                alignItems: "center",
                              }}
                              onClick={() => {
                                setError(undefined);
                                setFieldError(undefined);
                                setMinFileError(undefined);
                                setMaxFileError(undefined);
                              }}
                            >
                              x
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </form>
            </div>
          </Tab.Container>
          {/* Tab Content End */}
        </div>
      </Container>
    </div>
  );
}

export default Edit;
