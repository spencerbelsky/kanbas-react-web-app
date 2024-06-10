import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [module, setModule] = useState({
        id: 1, name: "Spencer",
        description: "A module lives here",
        course: "6969",
      });
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    
  return (
    <div id="wd-working-with-modules">
    <h3>Module</h3>
    <h4>Retrieving Modules</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-module-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Name
      </a><hr/>
    </div>
  );
    }
