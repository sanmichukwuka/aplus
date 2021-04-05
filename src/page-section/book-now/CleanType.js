import React from "react";
import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

export default function CleanType({ handleNextSection }) {
  return (
    <div class=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold"> CLEAN TYPE</h1>
        <p className="mt-2">
          Check the Cleaning process you want.
        </p>
        <Card className="mt-3">
          <FormGroup onChange={handleNextSection} tag="fieldset">
            <FormGroup className="m-3" check>
              <Label check>
                  <Input value="STANDARD_CLEANING" type="radio" name="radio1" />
                  Standard Plus Clean
              </Label>
            </FormGroup>
            <DropdownItem divider />
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="STANDARD_DEEP" type="radio" name="radio1" />
                Standard Deep Clean
              </Label>
            </FormGroup>
          </FormGroup>
        </Card>
      </div>
    </div>
  );
}
