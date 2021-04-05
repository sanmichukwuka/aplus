import React from "react";
import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

export default function ParkingLot({ handleNextSection }) {
  return (
    <div class=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold"> DO YOU HAVE A PARKING LOT</h1>
        <Card className="mt-3">
          <FormGroup onChange={handleNextSection} tag="fieldset">
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Clean" type="radio" name="radio1" />
                Yes, you can find a parking lot.
              </Label>
            </FormGroup>
            <DropdownItem divider />
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Clean" type="radio" name="radio1" /> No, we do not have a parking lot.
              </Label>
            </FormGroup>
          </FormGroup>
        </Card>
      </div>
    </div>
  );
}