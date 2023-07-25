import React, { useState } from "react";
import { Collapse, Col } from "react-bootstrap";

const CollapseSkills = ({ skillTitle, description, index }) => {
  const [on, setOn] = useState(false);
  const [onFirst, setOnFirst] = useState(true);
  return (
    <div className="w-100  " style={{fontSize:'0.8em'}}>
      <div className="w-100 bg-primary rounded-top d-flex">
        <Col className="px-2 py-2" xs={8}>{skillTitle}</Col>
        <Col className="text-end px-3 py-2">{ on ? <i class="bi bi-caret-up" onClick={()=>setOn(!on)}></i> : <i className="bi bi-caret-down" onClick={()=>setOn(!on)}></i>}</Col>
      </div>
      <Collapse in={ index == 0? onFirst : on}>
        <div className="text-dark px-3 py-3 shadow-sm">
          <p>{description}</p>
        </div>
      </Collapse>
    </div>
  );
};
export default CollapseSkills;
