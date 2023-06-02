import React from "react";
import { Button, Container } from "react-bootstrap";
import style from "./css/home.module.css";
import TopBar from "../components/topBar";
import homeBg from "../assets/images/home-image.png";
import { serviceDescriptions } from "../assets/contents";

export default function Home() {
  return (
    <Container fluid className={`${style.container} p-0 pt-5 min-vh-100 w-100`}>
      <TopBar />
      <div className={`w-100 mt-4 px-3 py-3`} style={{marginTop:30 }}>
        <h3 className="">
          Driving Innovation <br />
          through Cutting-Edge <br /> Software Solutions.
        </h3>
        <p className="">
          Our approach is simple, flexible and easy to use. <br />
          we know what you need and we know how to <br /> get it done.
        </p>
        <span className="d-flex gap-3 ">
          <Button>Services</Button>
          <Button>Products</Button>
          {/* ${description.icon} */}
        </span>
      </div>
      <div className="d-flex justify-content-center mt-5 w-100">
        <img src={homeBg} alt="home image" height={469} />
      </div>
      <div className="d-flex flex-column mt-3 w-100 px-3 gap-3" style={{ backgroundColor: "#F1F8F9" }}>
        {serviceDescriptions.map((description) => (
          <div>
            <i class="bi bi-alarm"></i>
            <p>{description.title}</p>
            <p>{description.descriptions}</p>
          </div>
        ))}
      </div>

      <div className="footer" style={{backgroundColor:'192252'}}>

      </div>
      <div className="d-flex justify-content-center text-light align-items-center"
      style={{backgroundColor:'#192252', minHeight:'5rem'}}>
All Right Reserved Floath Solution Hub 2023
      </div>
    </Container>
  );
}
