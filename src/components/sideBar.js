import { Button, Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import styles from "../pages/css/home.module.css";
import { useNavigate } from "react-router-dom";

const SideBar = ({ show, off }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${
        show ? styles.sideBar : styles.offSideBar
      } flex-column text-light m-0 w-100 shadow-sm`}
    >
      <h1 className="w-100  p-3 px-4 text-end">
        <i
          className="bi bi-x-circle"
          onClick={off}
          style={{ cursor: "pointer", fontSize: "0.7em" }}
        ></i>
      </h1>
      <ul
        className="w-100 d-flex flex-column p-0 align-items-center mt-5"
        style={{ listStyle: "none", fontSize:'0.8em' }}
      >
        <li
          className="d-flex w-100 text-center justify-content-center align-items-center"
          style={{ minHeight: "3em" }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            Home
          </a>
        </li>

        {/* <li
          className="d-flex w-100 text-center justify-content-center align-items-center"
          style={{ minHeight: "3em" }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            Services
          </a>
        </li>

        <li
          className="d-flex w-100 text-center justify-content-center align-items-center"
          style={{ minHeight: "3em" }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            Products
          </a>
        </li> */}

       
        <li
          className="d-flex w-100 text-center justify-content-center align-items-center"
          style={{ minHeight: "3em" }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            About Me
          </a>
        </li>

        {/* <li
          className="d-flex w-100 text-center justify-content-center align-items-center"
          style={{ minHeight: "3em" }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            Start your career in tech
          </a>
        </li>
        <li
          className="d-flex w-100 text-center justify-content-center align-items-center"
          style={{ minHeight: "3em" }}
        >
          <a
          
            onClick={()=>navigate('/ideas')}
            style={{
              cursor:'pointer',
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Montserrat",
            }}
          >
            See suggested app ideas
          </a>
        </li> */}

      </ul>
      <div className="d-flex justify-content-center mt-4">
      <Button variant="primary text-light"><a href="https://wa.me/message/NSIQY7RHQ2W4C1" style={{textDecoration:'none', color:'#fff'}}>Contact me</a></Button>
      </div>
    </div>
  );
};
export default SideBar;
