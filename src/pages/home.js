import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Modal,
  Col,
  InputGroup,
} from "react-bootstrap";

import { Formik } from "formik";
import style from "./css/home.module.css";
import TopBar from "../components/topBar";
import homeBg from "../assets/images/home-image.png";
import { serviceDescriptions } from "../assets/contents";
import SideBar from "../components/sideBar";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

export default function Home() {
  const initialValues = {
    userName: "",
    contact: "",
    description: "",
  };
  const [nav, setNav] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);

  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <Container fluid className={`${style.container} p-0 pt-5 min-vh-100 w-100`}>
      <TopBar toggleMenu={handleMenu} />
      <SideBar show={nav} off={handleMenu} />
      <div
        className={`w-100 mt-4 px-4 py-3`}
        style={{ fontFamily: "Montserrat", marginTop: 30 }}
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
          Driving Innovation <br /> through Cutting-Edge <br /> Software
          Solutions.
        </h3>
        <p className="mt-2">
          Our approach is simple, flexible and easy to use. <br />
          we know what you need and we know <br /> how to get it done.
        </p>
        <span className="d-flex gap-3 mt-2">
          <Button variant="primary text-light">Our Services</Button>
          <Button variant="secondary" onClick={() => setQuoteModal(true)}>
            Request Quote
          </Button>
          {/* ${description.icon} */}
        </span>
      </div>
      <div className="d-flex justify-content-center mt-5 w-100">
        <img src={homeBg} alt="home image" height={469} />
      </div>
      <div
        className="d-flex flex-column mt-3 w-100 px-3 gap-3"
        style={{ backgroundColor: "#F1F8F9" }}
      >
        {serviceDescriptions.map((description, index) => (
          <div key={index}>
            <i className="bi bi-alarm"></i>
            <p>{description.title}</p>
            <p>{description.descriptions}</p>
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
      <Modal show={quoteModal} centered backdrop="static">
        <Modal.Header className="bg-secondary text-light">
          <Col>Description</Col>
          <Col className="d-flex justify-content-end">
            <i
              className="bi bi-x-circle"
              onClick={() => setQuoteModal(false)}
              style={{ cursor: "pointer", fontSize: "0.7em" }}
            ></i>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={(val) => console.log(val)}
          >{ ({handleSubmit,handleChange})=>(
            <form
            onSubmit={()=>handleSubmit}
              className="d-flex flex-column gap-3"
              style={{ fontFamily: "Montserrat" }}
            >
              <InputGroup
                className="border border-1 rounded px-1"
                style={{ maxWidth: "16em" }}
              >
                <input
                name="userName"
                onChange={handleChange}
                  placeholder="Name"
                  className="border border-0 px-2 py-1 bg-transparent"
                  style={{ outline: "none" }}
                />
              </InputGroup>

              <InputGroup
                className="border border-1 rounded px-1"
                style={{ maxWidth: "16em" }}
              >
                <input
                onChange={handleChange}
                name="contact"
                  placeholder="Email/phone number"
                  className="border border-0 px-2 py-1 bg-transparent"
                  style={{ outline: "none" }}
                />
              </InputGroup>

              <InputGroup className="border border-1 rounded  pl-3 pt-2">
                <textarea
                onChange={handleChange}
                name="description"
                  placeholder="Briefly describe your project"
                  className="border w-100 border-0 px-2 py-1 bg-transparent"
                  style={{ outline: "none", minHeight: "15rem" }}
                />
              </InputGroup>

              <span className="d-flex gap-2 mt-2">
                <Button
                  variant="secondary text-light"
                  type='submit'
                  onClick={
                    ()=>setQuoteModal(false)
                  }
                >
                  Send Quote
                </Button>
                <Button
                  
                  variant="light border"
                  onClick={() => setQuoteModal(false)}
                >
                  Cancel
                </Button>
              </span>
            </form>)
          }
            
          </Formik>
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
