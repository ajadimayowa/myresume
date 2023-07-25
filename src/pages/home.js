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
import homeBg from "../assets/images/mypic.png";
import suplus from "../assets/images/suplus.png";
import trove from "../assets/images/trove.png";
import natco from "../assets/images/natco.png";
import htm from "../assets/images/html5.png";
import css from "../assets/images/css.png";
import jscript from "../assets/images/jscript.png";
import reac from "../assets/images/react.png";
import tscript from "../assets/images/typescript.png";
import boot from "../assets/images/bootstrap.png";

import innov from "../assets/images/innov.png";
import { serviceDescriptions } from "../assets/contents";
import SideBar from "../components/sideBar";
import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import CollapseSkills from "../components/collapseSkill";

export default function Home() {
  const brands = [
    "FlexipGroup",
    "Surplusfood",
    "floathhub",
    "TrovestCapital",
    "XpressMedika",
    "Peekup",
  ];

  const tools = [
    { name: "Github", color: "" },
    { name: "Postman", color: "" },
    { name: "Insomnia", color: "" },
    { name: "Draw.io", color: "" },
    { name: "Redux", color: "" },
    { name: "Figma", color: "" },
  ];

  const potfolio = [
    {
      image: suplus,
      title: "Surplus Food 9ja",
      description:
        "An e-commerce web and mobile application built to handle buying and selling of groceries in lagos.",
      demo: "https://surplusfood9ja.vercel.app/",
      stacks: [
        "React Js",
        "React Native",
        "Bootstrap",
        "MongoDb",
        "Redux Toolkit",
      ],
    },
    {
      image: trove,
      title: "Trove Minds",
      description:
        "A Fintech solution for managing daily contribution of artisans in lagos, Nigeria.",
      demo: "https://trovestalajo.vercel.app/",
      stacks: ["React Js", "React Native", "AWS", "Bootstrap", "MongoDb"],
    },
    {
      image: natco,
      title: "Natco Nigeria",
      description:
        "A platform built to take care for event registration and organisation for artisans accross Lasgos state.",
      demo: "https://natcong.com/",
      stacks: ["Wordpress", "Paystack", "MongoDb", "Firebase"],
    },
    {
      image: innov,
      title: "Innovative institute",
      description:
        "A driving school management solution built to handle student registration and progress tracking.",
      demo: "https://innovativedrivinginstitute.com/",
      stacks: ["React Js", "MongoDb", "Redux Toolkit", "Firebase"],
    },
  ];
  const navigate = useNavigate();
  const initialValues = {
    userName: "",
    title: "",
    description: "",
    email: "",
    phoneNumber: "",
  };

  const nonTechSkills = [
    {
      title: "Critical thinking",
      description:
        "Critical thinking is the ability to make informed decisions by evaluating several different sources of information objectively. As such, I possess many other essential skills, including analysis, creativity, problem-solving and empathy.",
    },
    {
      title: "Self-Organising",
      description:
        "Critical thinking is the ability to make informed decisions by evaluating several different sources of information objectively. As such, I possess many other essential skills, including analysis, creativity, problem-solving and empathy.",
    },
    {
      title: "Strong Ethics and Professionalism",
      description:
        "Critical thinking is the ability to make informed decisions by evaluating several different sources of information objectively. As such, I possess many other essential skills, including analysis, creativity, problem-solving and empathy.",
    },
    {
      title: "Creativity",
      description:
        "Critical thinking is the ability to make informed decisions by evaluating several different sources of information objectively. As such, I possess many other essential skills, including analysis, creativity, problem-solving and empathy.",
    },
    {
      title: "Collaboration and Communication",
      description:
        "Critical thinking is the ability to make informed decisions by evaluating several different sources of information objectively. As such, I possess many other essential skills, including analysis, creativity, problem-solving and empathy.",
    },
  ];

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
    <Container fluid className={`${style.container} p-0 min-vh-100 w-100`}>
      <div className={`${style.mobileView} p-0 min-vh-100 w-100`}>
        <TopBar toggleMenu={handleMenu} />
        <SideBar show={nav} off={handleMenu} />
        {/* //this is for mobile intro */}
        <div className={`${style.mobileIntro}`} onClick={() => setNav(false)}>
          <div
            className={`w-100 px-4 py-5`}
            style={{ fontFamily: "Montserrat", marginTop: 20 }}
          >
            <p className="text-center text-secondary w-100 m-0 p-0 mt-0">
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
                fontWeight: 700,
                fontSize: "0.8em",
              }}
            >
              Software Developer <br />
              (M.E.R.N)
              <br />
              {/* +2348166064166 | samtalktech@outlook.com */}
            </p>
            <div
              className={`${style.homeImage} justify-content-center mt-3 w-100`}
            >
              <img src={homeBg} alt="home image" height={276} width={275} />
            </div>
            <p
              className="mt-2 text-center px-4"
              style={{ fontSize: 14, fontFamily: "Montserrat" }}
            >
              (BTech Computer Engineering) <br />
              +2348166064166 | samtalktech@outlook.com
            </p>
            <hr />
          </div>

          <div className="w-100 d-flex flex-column align-items-center">
            <p
              className="px-4 text-center"
              style={{ fontSize: "0.8em ", fontFamily: "Montserrat" }}
            >
              A skilled software developer with years of experience in
              designing, creating, and maintaining computer software. <br />{" "}
              <br />I have expertise in programming languages and frameworks,
              which allows me to write code that meets specific requirements and
              solves complex problems
            </p>
          </div>
          <span
            className="d-flex gap-3 mt-2 justify-content-center"
            style={{ fontFamily: "Myfont" }}
          >
            <Button variant="primary text-light">
              <a
                href="https://wa.me/message/NSIQY7RHQ2W4C1"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Contact me
              </a>
            </Button>
            <Button variant="secondary" onClick={() => setQuoteModal(true)}>
              Request Resumee
            </Button>
            {/* ${description.icon} */}
          </span>
        </div>

        {/* this is for desktop intro */}
        <div
          className={`${style.desktopIntro} justify-content-center gap-3 mt-5`}
        >
          <div className={`justify-content-center w-25`}>
            <img src={homeBg} alt="home image" height={320} width={319} />
          </div>
          <div className="w-50">
            <h4 style={{ fontFamily: "MyFont", fontWeight: "900" }}>
              INTRODUCTION
            </h4>
            <p>
              Hello, my name is Mayowa Samuel Ajadi, I'm a Software developer
              from Lagos, Nigeria. I'v got over 2yrs of professional experience
              in this field. A skilled professional who designs, creates, and
              maintains computer software. I’v got expertise in programming
              languages and frameworks, which allows me to write code that meets
              specific requirements and solves complex problems. I have
              collaboration experience with stakeholders, such as clients or
              project managers, to understand their needs and develop efficient
              and scalable solutions. I possess strong analytical and
              problem-solving skills, which enables me to debug and optimize
              code for performance. With a keen eye for detail, I ensure that my
              applications are user-friendly, secure, and adhere to industry
              standards. I do my best to stay updated on the latest technologies
              and trends to continuously enhance my skills and deliver
              innovative software solutions.
            </p>
            <div className="w-100">
              <span
                className="d-flex gap-3 mt-2"
                style={{ fontFamily: "Myfont" }}
              >
                <Button variant="primary text-light">
                  <a
                    href="https://wa.me/message/NSIQY7RHQ2W4C1"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Contact me
                  </a>
                </Button>
                <Button variant="secondary" onClick={() => setQuoteModal(true)}>
                  Request Resumee
                </Button>
                {/* ${description.icon} */}
              </span>
            </div>
          </div>
        </div>

        <div
          className="d-flex bg-primary w-100 gap-4 px-3 p-3 mt-5 align-items-center "
          style={{
            fontSize: 14,
            fontFamily: "Montserrat",
            minHeight: "5rem",
            lineHeight: "3rem",
            backgroundColor: "#4148C7",
            flexWrap: "wrap",
          }}
        >
          {brands?.map((brand) => (
            <p
              className="p-0 m-0"
              style={{
                fontFamily: "Myfont",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              {brand}
            </p>
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
            My non techinical skills
          </h3>
          <div className="w-100 d-flex flex-column gap-3 text-light">
            {nonTechSkills.map((nonTech, index) => (
              <CollapseSkills
                index={index}
                skillTitle={nonTech.title}
                description={nonTech.description}
              />
            ))}
          </div>
          <hr />
        </div>

        <h3
          className="mt-4 px-3 mb-0 text-primary"
          style={{
            fontFamily: "Myfont",
            fontWeight: "700",
            fontSize: 24,
            lineHeight: "1.2em",
            color: "#5F45A3",
          }}
        >
          Below are some of the <br />
          projects i have worked on.
        </h3>
        <p
          className="px-3 m-0 mt-2"
          style={{ fontSize: "0.8em ", fontFamily: "Montserrat" }}
        >
          Listed here are some cool stuffs i have built alongside a bunch of
          highly skilled and intelligent software engineers like my self. if you
          need more discussions on any of these projects, kindly reach out to
          me.
        </p>

        <div
          className={`${style.mobilePotfolio} flex-column w-100 gap-5 px-3 p-3 align-items-center`}
          style={{
            fontSize: 14,
          }}
        >
          {potfolio?.map((pot) => (
            <div className="w-100">
              <div
                className="rounded shadow-sm d-flex justify-content-center align-items-center"
                style={{
                  minHeight: "18rem",
                  minWidth: "90%",
                  backgroundColor: "#fff",
                }}
              >
                <img src={pot.image} alt="prod image" height={213} />
              </div>
              <h3
                className="mt-3 text-center text-uppercase"
                style={{ fontFamily: "Myfont", fontWeight: "700" }}
              >
                {pot.title}
              </h3>
              <p
                className="m-0 text-center px-5"
                style={{ fontFamily: "Montserrat", fontSize: 12 }}
              >
                {pot.description}
              </p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                {pot.stacks.map((stacks) => (
                  <p style={{ fontFamily: "Myfont" }}>{stacks}</p>
                ))}
              </div>

              <span
                className="d-flex gap-3 mt-2 justify-content-center"
                style={{ fontFamily: "Myfont" }}
              >
                <Button variant="primary text-light">
                  <a
                    href={pot.demo}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontFamily: "Myfont",
                    }}
                  >
                    Live Demo
                  </a>
                </Button>
                <Button variant="secondary" onClick={() => setQuoteModal(true)}>
                  <a
                    href="https://wa.me/message/NSIQY7RHQ2W4C1"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontFamily: "Myfont",
                    }}
                  >
                    Github
                  </a>
                </Button>
                {/* ${description.icon} */}
              </span>
            </div>
          ))}
        </div>

        <div
          className="w-100 px-3 py-3  mt-3 "
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <h3
            className="mt-4 px-3 mb-0 text-primary text-center"
            style={{
              fontFamily: "Myfont",
              fontWeight: "700",
              fontSize: 24,
              lineHeight: "1.2em",
              color: "#5F45A3",
            }}
          >
            My Current Stack <br />
          </h3>

          <div
            className="w-100 d-flex flex-column justify-content-center align-items-center"
            style={{ zIndex: 1 }}
          >
            <div className="d-flex gap-2 mt-2">
              <Card
                className="shadow-sm text-light d-flex justify-content-center align-items-center"
                style={{
                  minWidth: "10rem",
                  minHeight: "10rem",
                  maxWidth: "10rem",
                  maxHeight: "10rem",
                }}
              >
                <img src={htm} alt="home image" height={100} width={100} />
              </Card>

              <Card
                className="shadow-sm text-light d-flex justify-content-center align-items-center"
                style={{
                  minWidth: "10rem",
                  minHeight: "10rem",
                  maxWidth: "10rem",
                  maxHeight: "10rem",
                }}
              >
                <img src={css} alt="home image" height={100} width={100} />
              </Card>
            </div>
            <div className="d-flex gap-2 mt-2">
              <Card
                className="shadow-sm text-light d-flex justify-content-center align-items-center"
                style={{
                  minWidth: "10rem",
                  minHeight: "10rem",
                  maxWidth: "10rem",
                  maxHeight: "10rem",
                }}
              >
                <img src={jscript} alt="home image" height={100} width={100} />
              </Card>

              <Card
                className="shadow-sm text-light d-flex justify-content-center align-items-center"
                style={{
                  minWidth: "10rem",
                  minHeight: "10rem",
                  maxWidth: "10rem",
                  maxHeight: "10rem",
                }}
              >
                <img src={reac} alt="home image" height={100} width={100} />
              </Card>
            </div>
            <div className="d-flex gap-2 mt-2">
              <Card
                className="shadow-sm text-light d-flex justify-content-center align-items-center"
                style={{
                  minWidth: "10rem",
                  minHeight: "10rem",
                  maxWidth: "10rem",
                  maxHeight: "10rem",
                }}
              >
                <img src={tscript} alt="home image" height={100} width={100} />
              </Card>

              <Card
                className="shadow-sm text-light d-flex justify-content-center align-items-center"
                style={{
                  minWidth: "10rem",
                  minHeight: "10rem",
                  maxWidth: "10rem",
                  maxHeight: "10rem",
                }}
              >
                <img src={boot} alt="home image" height={100} width={100} />
              </Card>
            </div>
          </div>
        </div>

        <div className="w-100 mt-5 px-3">
          <h3
            className="text-center w-100"
            style={{ fontFamily: "Montserrat" }}
          >
            Other Tools I use
          </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-wrap w-100 mt-4 w-100 px-3 gap-3">
          {tools.map((description, index) => (
            <div
              className="d-flex justify-content-center align-items-center text-center text-light rounded rounded-5"
              key={index}
              style={{
                maxHeight: "1.5em",
                minHeight: "2em",
                minWidth: "7em",
                fontSize: "0.8rem",
                backgroundColor: "#7A0D0C",
                fontFamily: "Montserrat",
              }}
            >
              {description.name}
            </div>
          ))}
        </div>

        <div
          className="d-flex flex-column mt-3 w-100 px-3 py-3 gap-3 text-light bg-primary"
          style={{ height: "35rem" }}
        >
          <h3
            className="mt-4 text-center"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "700",
              fontSize: "1.5em",
              lineHeight: "1.3em",
            }}
          >
            Lets Talk About <br />
            Your Next Project!
          </h3>
          <p className="text-center">
            I bringing years of IT experience to all of your project needs in
            the most simplest way you can think of.
          </p>
          <div className="d-flex justify-content-center">
            <a href="https://wa.me/message/NSIQY7RHQ2W4C1">
              <Button variant="light" style={{ maxWidth: "9em" }}>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
        <Modal
          show={quoteModal}
          centered
          backdrop="static"
          size="sm"
          className="p-2"
        >
          <Modal.Header className="bg-primary text-light">
            <Col style={{ fontSize: "0.9em" }}>Request Resumee</Col>
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
                  style={{ fontFamily: "Montserrat", fontSize: "0.9em" }}
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
                      style={{ outline: "none", fontSize: "0.9em" }}
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
                      style={{ outline: "none", fontSize: "0.9em" }}
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
                      style={{ outline: "none", fontSize: "0.9em" }}
                    />
                  </Form.Group>

                  <Form.Group className="border border-1 rounded px-1 w-100">
                    <textarea
                      onChange={handleChange}
                      name="description"
                      placeholder="Type in other documents you need me to send."
                      className="border w-100 border-0 px-2 py-1 bg-transparent"
                      style={{
                        outline: "none",
                        minHeight: "7rem",
                        fontSize: "0.9em",
                      }}
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
                      style={{ outline: "none", fontSize: "0.9em" }}
                    />
                  </Form.Group>

                  <span className="d-flex gap-2 mt-2">
                    <Button
                      disabled={Object.keys(errors).length > 0}
                      variant="primary text-light"
                      type="submit"
                      onClick={() => handleSubmit}
                      style={{ fontSize: "0.9em" }}
                    >
                      Done
                    </Button>
                    <Button
                      variant="light border"
                      onClick={() => setQuoteModal(false)}
                      style={{ fontSize: "0.9em" }}
                    >
                      Cancel
                    </Button>
                  </span>
                </form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>

        <Modal
          show={quoteSucModal}
          centered
          backdrop="static"
          size="sm"
          className="p-4"
        >
          <Modal.Header className="bg-primary text-light">
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
                Thank you for your intrest in my expertise, i will reach out to
                you shortly.
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
                <i className="bi bi-telephone-fill text-primary"></i>{" "}
                08166064166
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
        {/* <div
          className="d-flex justify-content-center text-light align-items-center"
          style={{ backgroundColor: "#192252", minHeight: "5rem" }}
        >
          All Right Reserved Floath Solution Hub 2023
        </div> */}
      </div>
    </Container>
  );
}
