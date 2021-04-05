import React from "react";
import { Heading } from "@chakra-ui/react";

export default function CreditCard({ handleNextSection, displayAggregatePrice, price}) {

  return (
    <div class="container">
      <Heading mb="10px" textAlign="center">
        Almost Done!
      </Heading>
      <div class="card mx-auto col-md-5 col-8 mt-3 p-0">
        <img
          class="mx-auto pic"
          src="https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg"
        />
        <div class="card-title d-flex px-4">
          <p class="item text-muted">
            AMIT CLEANING SERVICE CHARGE: {" "}  {price}
          </p>
        </div>
        <div class="card-body">
          <p class="text-muted">Your payment details</p>
          <div class="numbr mb-3">
            <i class=" col-1 fas fa-credit-card text-muted p-0"></i>
            <input class="col-10 p-0" type="text" placeholder="Card Number" />
          </div>
          <div class="line2 col-lg-12 col-12 mb-4">
            <i class="col-1 far fa-calendar-minus text-muted p-0"></i>
            <input class="cal col-5 p-0" type="text" placeholder="MM/YY" />
            <i class="col-1 fas fa-lock text-muted"></i>
            <input class="cvc col-5 p-0" type="text" placeholder="CVC" />
          </div>
        </div>
        <div class="footer text-center  my-4 p-0">
          <div class="col-lg-12 col-12 p-0 btn btn-primary">
            <button onClick={handleNextSection}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}