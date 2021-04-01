import React from "react";
import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

export default function Access({ handleNextSection }) {
  


  return (
    <div class=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold"> HOW DO WE GET IN ?</h1>
        <Card className="mt-3">
          <FormGroup onChange={handleNextSection} tag="fieldset">
            <FormGroup className="m-3" check> 
              <Label check>
                <Input value="Standard Clean" type="radio" name="radio1" /> Yes,
                Someone is home.
              </Label>
            </FormGroup>
            <DropdownItem divider />
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Clean" type="radio" name="radio1" /> Yes,
                Doorman
              </Label>
            </FormGroup>
            <DropdownItem divider />
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Plus Clean" type="radio" name="radio1" />
                Hidden Key{" "}
              </Label>
            </FormGroup>
            <DropdownItem divider />
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Plus Clean" type="radio" name="radio1" />
                Others{" "}
              </Label>
            </FormGroup>
          </FormGroup>
        </Card>
      </div>
    </div>
  );
}
