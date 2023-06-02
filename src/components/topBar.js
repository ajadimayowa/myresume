import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/floatlogo.png";

const TopBar = () => {
  return (
    <Row
      className="d-flex align-items-center m-0 w-100 shadow-sm px-3"
      style={{ minHeight: "4rem", position:'fixed', top:0, backgroundColor:'#fff' }}
    >
      <Col>
        <img src={logo} alt="comp logo" height={48} />
      </Col>
      <Col>
        {" "}
        <ul></ul>
      </Col>
      <Col className="d-flex justify-content-end">
      <i class="bi bi-list"></i>
      </Col>
    </Row>
  );
};
export default TopBar;
