import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import styles from "../pages/css/home.module.css";
import { useNavigate } from "react-router-dom";

const TopBar = ({toggleMenu}) => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex m-0 w-100 shadow-sm px-3"
      style={{
        minHeight: "4rem",
        position: "fixed",
        top: 0,
        backgroundColor: "#fff",
      }}
    >
      <div className="d-flex align-items-center">
        <img src={logo} alt="comp logo" height={48} onClick={()=>navigate('/')}/>
      </div>
      <div className={`d-flex w-100 align-items-center justify-content-end`}>
        <i
        className={`${styles.toggler} bi bi-list`}
          
          style={{ cursor: "pointer", fontSize: "1.5em" }}
          onClick={()=>toggleMenu()}
        ></i>
      </div>
    </div>
  );
};
export default TopBar;
