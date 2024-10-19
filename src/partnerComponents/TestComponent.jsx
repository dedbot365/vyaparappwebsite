import React from "react";
import { Link } from "react-router-dom";

function TestComponent() {
  return (
    <div className="text-3xl">
      <Link to="/partnerWithUsPage">TestComponent</Link>
    </div>
  );
}

export default TestComponent;
