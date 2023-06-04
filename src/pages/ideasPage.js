import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Spinner,
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
import { getQuotes } from "../controllers/requests";

export default function Home() {
  const navigate = useNavigate();
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
  const [descModal, setDescModal] = useState(false)
  
  const [quoteModal, setQuoteModal] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [ideaIndex, setIdeadIndex] = useState(0);
  const loggedInUser = useSelector((state) => state.auth.userInfo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAppIdeas();
  }, []);

  const fetchAppIdeas = async () => {
    setLoading(true)
    const res = await getQuotes();
    if (res?.data?.status == 200) {
      setIdeas(res?.idea);
      setLoading(false);
    }
    // for (const key in res?.data) {
    //   const ideaObj = {
    //     owner: res?.data[key].userName,
    //     title: res?.data[key].title,
    //     desc: res?.data[key].descr,
    //   };
    //   ideas.push(ideaObj);
    //   console.log("okkkk");
    // }
    // return ideas;
  };
  const dispatch = useDispatch();

  const handleMenu = () => {
    // console.log(loggedInUser);
    setNav(!nav);
  };

  // console.log(ideas);

  const handleQuote = () => {
    setQuoteModal(true);
    dispatch(
      updateUser({ newName: "changed", newToken: "657", newPas: "out" })
    );
  };

  return (
    <Container fluid className={`${style.container} p-0 pt-5 min-vh-100 w-100`}>
      <TopBar toggleMenu={handleMenu} />
      <SideBar show={nav} off={handleMenu} />{
        loading? <div className="mt-5 d-flex w-100 justify-content-center align-items-center min-vh-100" ><Spinner/></div> :
      
      (
        <>
      <div
        className={`w-100 mt-4 px-3 py-3`}
        style={{ fontFamily: "Montserrat", marginTop: 30 }}
      >
        <h4>Trending App Ideas</h4>
        <hr />
        <p className="text-danger">
          Disclaimer :{" "}
          <i className="text-dark" style={{ fontSize: "0.8rem" }}>
            All ideas here are intellectual properties of <br /> the owners, no
            part of it should be reproduce without the consent of the owner.
          </i>
        </p>
      </div>

      <div className="w-100 mt-3">
        <p className="p-3 bg-secondary w-100 text-light">Recently added</p>
        <table className="table">
          <thead className="" style={{backgroundColor:'red'}}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">App title</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody className="w-100 px-3 bg-danger">
            {ideas.map((item, index) => (
              <tr key={index} className="bg-danger">
                <th scope="row">{index + 1}</th>
                <td>{item?.ownerName}</td>
                <td>{`${item?.phoneNumber? '+234':''} ${item?.phoneNumber}`}</td>
                <td>{item?.title}</td>
                <td className="px-2">
                  <Button
                  onClick={()=>{
                    setDescModal(true)
                    setIdeadIndex(index)
                  }}
                    className="d-flex text-light text-center align-items-center justify-content-center"
                    variant="secondary "
                    style={{
                      maxHeight: "2em",
                      maxWidth: "5em",
                      fontSize: "0.7em",
                    }}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={descModal}  centered backdrop="static">
        <Modal.Header className="bg-secondary text-light">
          <Col className="text-capitalize">{ideas[ideaIndex]?.title}</Col>
          <Col className="d-flex justify-content-end">
            <i
              className="bi bi-x-circle"
              onClick={() => setDescModal(false)}
              style={{ cursor: "pointer", fontSize: "0.7em" }}
            ></i>
          </Col>
        </Modal.Header>
        <Modal.Body className="d-flex, justify-content-center" >
        <p className="d-flex text-start text-secondary justify-content-start px-3 w-100 m-0" style={{ fontSize: "0.9em" }}>
            Idea By : {ideas[ideaIndex]?.ownerName}
          </p>
          <p className="d-flex text-start text-secondary justify-content-start px-3 w-100 m-0" style={{ fontSize: "0.9em" }}>
            {ideas[ideaIndex]?.email}
          </p>
          <hr/>
          <div className="d-flex flex-column align-items-center">
            <p> <b> <u>Description </u></b></p>
          <p className="text-secondary px-3 mt-2" style={{ fontSize: "0.9em" }}>{
            ideas[ideaIndex]?.desc
          }
          </p>
          
          <i
            className="bi bi-lightbulb-fill"
            style={{ color: "#E79C3D", fontSize:'2rem' }}
          ></i>
          </div>
          
          <hr />
          <div className="d-flex justify-content-center w-100 align-items-center">
          
          <p className="px-2 m-0"> <i className="bi bi-telephone-fill text-primary"></i> 08166064166</p> |
          
          <p className="px-2 m-0 ml-2"> <i className="bi bi-envelope-fill text-primary ml-2"></i>{' '}floathhub@gmail.com</p>
          </div>
        </Modal.Body>
      </Modal>
      <div
        className="d-flex mt-3 w-100 justify-content-center text-light align-items-center"
        style={{
          backgroundColor: "#192252",
          minHeight: "5rem",
          
          bottom: 0,
        }}
      >
        All Right Reserved Floath Solution Hub 2023
      </div>
      </>
      )}
    </Container>
  );
}
