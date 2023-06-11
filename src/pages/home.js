import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Modal,
  Col,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";

import { Formik } from "formik";
import * as yup from "yup";
import style from "./css/home.module.css";
import TopBar from "../components/topBar";
import homeBg from "../assets/images/homeImage.png";
import { serviceDescriptions } from "../assets/contents";
import SideBar from "../components/sideBar";
import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const brands = [
    "FlexipGroup",
    "Surplusfood",
    "floathhub",
    "TrovestCapital",
    "XpressMedika",
    "LOAN24/7",
  ];

  const tools = [
    "FlexipGroup",
    "Surplusfood",
    "floathhub",
    "TrovestCapital",
    "XpressMedika",
    "LOAN24/7",
  ];

  const stacks = [
    "FlexipGroup",
    "Surplusfood",
    "floathhub",
    "TrovestCapital",
    "XpressMedika",
    "LOAN24/7",
  ];
  const navigate = useNavigate();
  const initialValues = {
    userName: "",
    title: "",
    description: "",
    email: "",
    phoneNumber: "",
  };

  const userSchema = yup.object().shape({
    userName: yup.string().required("Enter your name"),
    title: yup.string().required("Enter title"),
    description: yup.string().required("describe your project"),
    email: yup.string().required("Enter your email"),
  });
  const [nav, setNav] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);
  const [quoteSucModal, setQuoteSucModal] = useState(false);
  const loggedInUser = useSelector((state) => state.auth.userInfo);

  const dispatch = useDispatch();

  const handleMenu = () => {
    setNav(!nav);
  };

  const handleQuote = () => {
    setQuoteModal(true);
  };

  const postUserQuote = async (value) => {
    const res = await postQuotes(value);
    if (res?.status == 200) {
      setQuoteModal(false);
      setQuoteSucModal(true);
    }
  };

  return (
    <Container fluid className={`${style.container} p-0 pt-5 min-vh-100 w-100`}>
      <TopBar toggleMenu={handleMenu} />
      <SideBar show={nav} off={handleMenu} />
      <div
        className={`w-100 mt-4 px-4 py-3`}
        style={{ fontFamily: "Montserrat", marginTop: 30 }}
      >
        <p className="text-center text-prmary w-100 m-0 p-0 mt-4">
          Hello There! I'm
        </p>
        <h3
          className="text-center mt-3 mb-0"
          style={{
            fontFamily: "Myfont",
            fontWeight: "700",
            fontSize: 40,
            lineHeight: "1.2em",
          }}
        >
          MAYOWA <br /> SAMUEL <br /> AJADI
        </h3>
        <p
          className="text-center text-prmary w-100 m-0 p-0"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "0.8em",
          }}
        >
          (BTech Computer Engineering) <br/>
          +2348166064166 | samtalktech@outlook.com
        </p>
        <hr />
        <p
          className="mt-2 text-center px-4"
          style={{ fontSize: 14, fontFamily: "Montserrat" }}
        >
          A skilled software developer with years of experience in
          designing, creating, and maintaining computer software. <br /> <br />I
          have expertise in programming languages and frameworks, which allows
          me to write code that meets specific requirements and solves <br />{" "}
          complex problems
        </p>
        <span
          className="d-flex gap-3 mt-2 justify-content-center"
          style={{ fontFamily: "Myfont" }}
        >
          <Button variant="secondary text-light"><a href="https://wa.me/message/NSIQY7RHQ2W4C1" style={{textDecoration:'none', color:'#fff'}}>Contact me</a></Button>
          <Button variant="primary" onClick={()=>setQuoteModal(true)}>Request Resumee</Button>
          {/* ${description.icon} */}
        </span>
      </div>
      <div className={`${style.homeImage} justify-content-center mt-5 w-100`}>
        <img src={homeBg} alt="home image" height={600} width={"100%"} />
      </div>
      <div
        className="d-flex w-100 gap-2 px-3 p-3 align-items-center "
        style={{
          fontSize: 14,
          fontFamily: "Montserrat",
          minHeight: "5rem",
          lineHeight: "3rem",
          backgroundColor: "#F5F5F5",
          flexWrap: "wrap",
        }}
      >
        {brands?.map((brand) => (
          <p
            className="p-0 m-0"
            style={{
              fontFamily: "Myfont",
              fontSize: "1.5rem",
              color: "#868688",
            }}
          >
            {brand}
          </p>
        ))}
      </div>

      <h3
        className="mt-5 mb-5 px-3 mb-0 text-primary"
        style={{
          fontFamily: "Myfont",
          fontWeight: "700",
          lineHeight: "1.2em",
        }}
      >
        Below are The Stacks I use as at the time you are seeing this.
      </h3>

      <div
        className="d-flex flex-column w-100 gap-2 px-3 p-3 align-items-center"
        style={{
          fontSize: 14
        }}
      >
        {stacks?.map((brand) => (
         <div className="rounded shadow-sm" style={{minHeight:'20rem',minWidth:'90%', backgroundColor:'#F5F5F5'}}></div>
        ))}
      </div>

      <div className="w-100 mt-4 px-3">
        <h3>Other Tools I use</h3>
      </div>
      <div
        className="d-flex flex-wrap w-100 mt-3 w-100 px-3 gap-3"
        
      >
        {tools.map((description, index) => (
          <div className="rounded rounded-5 p-3" key={index} style={{minHeight:'2em', minWidth:'10em', backgroundColor:'#7A0D0C'}}>
            
            <p className="p-0 m-0">{description.descriptions}</p>
          </div>
        ))}
      </div>

      <div
        className={`w-100 mt-4 px-4 py-3`}
        style={{ fontFamily: "Montserrat", marginTop: 30 }}
      >
        <h3
          className="mt-4 text-secondary"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "1.5em",
            lineHeight: "1.3em",
          }}
        >
          Your business needs to grow and that is why we are here.
        </h3>
        <p>
          Bringing years of IT experience to all of your business need in the
          most simplest way you can think of.
        </p>
        <hr />
        <p className="mt-5" style={{ fontWeight: "bold" }}>
          24hr support on all of our products
        </p>
        <p>
          Bringing years of IT experience to all of your business need in the
          most simplest way you can think of.
        </p>
      </div>

      <div
        className="d-flex flex-column mt-3 w-100 px-3 py-3 gap-3 text-light bg-secondary"
        style={{ height: "35rem" }}
      >
        <h3
          className="mt-4"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "1.5em",
            lineHeight: "1.3em",
          }}
        >
          Your business needs <br /> to grow and that is why <br /> we are here.
        </h3>
        <p>
          Bringing years of IT experience to all of your business need in the
          most simplest way you can think of.
        </p>
        <Button variant="light" style={{ maxWidth: "9em" }}>
          Contact us
        </Button>
        <div className="w-100 gap-2 d-flex mt-5 justify-content-center align-items-center">
          <i className="bi bi-google-play" style={{ fontSize: "2em" }}></i>
          <p className="p-0 m-0">Download our Apps</p>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <p
          className="text-center w-75 mt-5"
          style={{ fontSize: "1rem", fontWeight: "700" }}
        >
          We are your trusted vendor for all your sofware solutions.
        </p>
      </div>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <p className="text-center mb-0">What customers are saying</p>
        <div className="d-flex gap-2 mt-2">
          <Card
            className="shadow-sm text-light"
            style={{ minWidth: "10rem", minHeight: "10rem" }}
          >
            <p>ok</p>
          </Card>

          <Card
            className="shadow-sm text-light"
            style={{ minWidth: "10rem", minHeight: "10rem" }}
          >
            <p>ok</p>
          </Card>
        </div>
      </div>
      <Modal show={quoteModal} centered backdrop="static" size="sm" className="p-2">
        <Modal.Header className="bg-secondary text-light">
          <Col style={{fontSize:'0.9em'}}>Request Resumee</Col>
          <Col className="d-flex justify-content-end">
            <i
              className="bi bi-x-circle"
              onClick={() => setQuoteModal(false)}
              style={{ cursor: "pointer", fontSize: "0.7em" }}
            ></i>
          </Col>
        </Modal.Header>
        <Modal.Body>
         
          <hr />
          <Formik
            initialValues={initialValues}
            validateOnBlur={true}
            validationSchema={userSchema}
            onSubmit={(val) => postUserQuote(val)}
          >
            {({ handleSubmit, handleChange, errors }) => (
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
                style={{ fontFamily: "Montserrat", fontSize:'0.9em' }}
              >
                <Form.Group
                  className="border border-1 rounded px-1"
                  style={{ maxWidth: "16em", zIndex: 50 }}
                >
                  <Form.Control
                    name="userName"
                    id="userName"
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border border-0 px-2 py-1 bg-transparent"
                    style={{ outline: "none",fontSize:'0.9em' }}
                  />
                </Form.Group>

                <Form.Group
                  className="border border-1 rounded px-1"
                  style={{ maxWidth: "16em" }}
                >
                  <Form.Control
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border border-0 px-2 py-1 bg-transparent"
                    style={{ outline: "none",fontSize:'0.9em' }}
                  />
                </Form.Group>

                <Form.Group
                  className="border border-1 rounded px-1"
                  style={{ maxWidth: "16em", zIndex: 50 }}
                >
                  <Form.Control
                    name="title"
                    id="userName"
                    onChange={handleChange}
                    placeholder="Purpose of request"
                    className="border border-0 px-2 py-1 bg-transparent"
                    style={{ outline: "none",fontSize:'0.9em' }}
                  />
                </Form.Group>

                <Form.Group className="border border-1 rounded px-1 w-100">
                  <textarea
                    onChange={handleChange}
                    name="description"
                    placeholder="Type in other documents you need me to send."
                    className="border w-100 border-0 px-2 py-1 bg-transparent"
                    style={{ outline: "none", minHeight: "7rem",fontSize:'0.9em' }}
                  />
                </Form.Group>

                <Form.Group
                  className="border border-1 rounded px-1"
                  style={{ maxWidth: "16em", zIndex: 50 }}
                >
                  <Form.Control
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleChange}
                    placeholder="Phone number (optional)"
                    className="border border-0 px-2 py-1 bg-transparent"
                    style={{ outline: "none",fontSize:'0.9em' }}
                  />
                </Form.Group>

                <span className="d-flex gap-2 mt-2" >
                  <Button
                    disabled={Object.keys(errors).length > 0}
                    variant="secondary text-light"
                    type="submit"
                    onClick={() => handleSubmit}
                    style={{fontSize:'0.9em'}}
                  >
                    Done
                  </Button>
                  <Button
                    variant="light border"
                    onClick={() => setQuoteModal(false)}
                    style={{fontSize:'0.9em'}}
                  >
                    Cancel
                  </Button>
                </span>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal show={quoteSucModal} centered backdrop="static" size="sm" className="p-4">
        <Modal.Header className="bg-secondary text-light">
          <Col>Success!! </Col>
          <Col className="d-flex justify-content-end">
            <i
              className="bi bi-x-circle"
              onClick={() => setQuoteSucModal(false)}
              style={{ cursor: "pointer", fontSize: "0.7em" }}
            ></i>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <p
              className="text-secondary text-center px-3"
              style={{ fontSize: "0.9em" }}
            >
              Thank you for your intrest in my expertise, i will reach out to you shortly.
            </p>
            <i
              className="bi bi-emoji-smile-fill text-secondary"
              style={{ color: "#E79C3D", fontSize: "2rem" }}
            ></i>
          </div>

          <hr />
          <div className="d-flex justify-content-center w-100 align-items-center">
            <p className="px-2 m-0">
              {" "}
              <i className="bi bi-telephone-fill text-primary"></i> 08166064166
            </p>{" "}
            |
            <p className="px-2 m-0 ml-2">
              {" "}
              <i className="bi bi-envelope-fill text-primary ml-2"></i>{" "}
              ajadimayowa879@gmail.com
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <div
        className="d-flex mt-3 justify-content-center text-light align-items-center"
        style={{ backgroundColor: "#192252", minHeight: "5rem" }}
      >
        All Right Reserved Floath Solution Hub 2023
      </div>
    </Container>
  );
}
