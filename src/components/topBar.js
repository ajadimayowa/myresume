import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";
import styles from "../pages/css/topBar.module.css";
import { useNavigate } from "react-router-dom";

const TopBar = ({ toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` d-flex m-0 w-100 justify-content-center shadow-sm px-3 text-light ${styles.topBar}`}
      style={{
        zIndex: 10,
      }}
    >
      <div className={`align-items-center w-25 ${styles.topBarMobile}`}>
        <h3
          className="w-100"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          M-SA
        </h3>
      </div>

      <div
        className={`m-0 w-100 shadow-sm px-2 text-light ${styles.desktopHeader}`}
      >
        <div
          className={`m-0 w-100 shadow-sm px-2 text-light ${styles.desktopTitle}`}
        >
          <h3
            className="text-center mt-3 mb-0"
            style={{
              fontFamily: "Myfont",
              fontWeight: "700",
              fontSize: "60px",
              lineHeight: "1.2em",
            }}
          >
            MAYOWA SAMUEL AJADI
          </h3>

          <h3
            className="text-center mt-3 mb-3"
            style={{
              fontFamily: "Myfont",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "1.2em",
            }}
          >
            Personal Potfolio website
          </h3>
        </div>
        <div className="d-flex gap-4 flex-row">
          <a
            href="https://github.com/ajadimayowa"
            target="_blank"
            className="text-light"
            style={{ cursor: "pointer", textDecoration:'none' }}
          >
            <i className="bi bi-github" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/devsamuelajadi/"
            target="_blank"
            className="text-light"
            style={{ cursor: "pointer", textDecoration:'none' }}
          >
            <i className="bi bi-linkedin" />
          </a>

          <a
            href="https://wa.me/message/NSIQY7RHQ2W4C1"
            target="_blank"
            className="text-light"
            style={{ cursor: "pointer", textDecoration:'none' }}
          >
            <i className="bi bi-whatsapp" />
          </a>
        </div>
      </div>
      <div
        className={`w-25  align-items-center justify-content-end  ${styles.topBarMobile}`}
      >
        <i
          className={`${styles.toggler} bi bi-list`}
          style={{ cursor: "pointer", fontSize: "1.5em" }}
          onClick={() => toggleMenu()}
        ></i>
      </div>
    </div>
  );
};
export default TopBar;
