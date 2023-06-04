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
import homeBg from "../assets/images/home-image.png";
import { serviceDescriptions } from "../assets/contents";
import SideBar from "../components/sideBar";
import { postQuotes } from "../controllers/requests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const initialValues = {
    userName: "",
    contact: "",
    description: "",
  };

  const userSchema = yup.object().shape({
    userName: yup.string().required("Enter your name"),
    contact: yup.string().email().required("Email is needed"),
    description: yup.string().required("describe your project"),
  });
  const [nav, setNav] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);
  const loggedInUser = useSelector((state) => state.auth.userInfo);

  const dispatch = useDispatch();

  const handleMenu = () => {
    console.log(loggedInUser);
    setNav(!nav);
  };

  const handleQuote = () => {
    setQuoteModal(true);
    dispatch(
      updateUser({ newName: "changed", newToken: "657", newPas: "out" })
    );
  };

  const postUserQuote = async (value) => {
    console.log("Submitted");
    const res = await postQuotes(value);
    console.log(res);
  };

  return (
    <Container fluid className={`${style.container} p-0 pt-5 min-vh-100 w-100`}>
      <TopBar toggleMenu={handleMenu} />
      <SideBar show={nav} off={handleMenu} />
      <div
        className={`w-100 mt-4 px-4 py-3`}
        style={{ fontFamily: "Montserrat", marginTop: 30 }}
      >
        <h4>Trending App Ideas</h4>
        <hr/>
        <p className="text-danger">Disclaimer : <i className="text-dark" style={{fontSize:'0.8rem'}}>All ideas here are intellectual properties of <br/> the owners, 
        no part of it should be reproduce without the consent of the owner.
        </i>
        </p>
       
      </div>
      <div
        className="d-flex mt-3 w-100 justify-content-center text-light align-items-center"
        style={{ backgroundColor: "#192252", minHeight: "5rem", position:'fixed', bottom:0}}
      >
        All Right Reserved Floath Solution Hub 2023
      </div>
    </Container>
  );
}
