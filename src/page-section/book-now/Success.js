import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function Success() {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <FiCheckCircle style={{ fontSize: "130px" }} />
        <p className="mt-4">
          Congratulations you have succesfully created a booking with Order. Your Card will be Charged after Cleaning Service Order is completed.
          Thanks For your patronage.
          #7888447B
        </p>
      </div>
    </div>
  );
}