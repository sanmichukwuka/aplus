import React from "react";
import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

export default function Vaccum({ handleNextSection }) {
  return (
    <div class=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold"> CLEAN TYPE</h1>
        <p className="mt-2">
          Cleaning Machines
        </p>
        <Card className="mt-3">
          <FormGroup onChange={handleNextSection} tag="fieldset">
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Clean" type="radio" name="radio1" /> Would you prefer we use our company machines(Yes).
              </Label>
            </FormGroup>
            <DropdownItem divider />
            <FormGroup className="m-3" check>
              <Label check>
                <Input value="Standard Plus Clean" type="radio" name="radio1" />No, we have machines available.
                {" "}
              </Label>
            </FormGroup>
          </FormGroup>
        </Card>
      </div>
    </div>
  );
}




































// import React from "react";
// import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

// export default function Vaccum({ onClick }) {
//   return (
//     <div class=" mt-5 d-flex justify-content-center">
//       <div className="position-relative start-40">
//         <h1 className="text-primary text-bold"> CLEAN TYPE</h1>
//         <p className="mt-2">
//           Check our 50 Point Checklist for the best fit for your home.
//         </p>
//         <Card className="mt-3">
//           <FormGroup onChange={onClick} tag="fieldset">
//             <FormGroup className="m-3" check>
//               <Label check>
//                 <Input value="Standard Clean" type="radio" name="radio1" /> Yes,
//                 I don't have a vacuum.
//               </Label>
//             </FormGroup>
//             <DropdownItem divider />
//             <FormGroup className="m-3" check>
//               <Label check>
//                 <Input value="Standard Plus Clean" type="radio" name="radio1" />
//                 No, I rather you use my own.{" "}
//               </Label>
//             </FormGroup>
//             <DropdownItem divider />
//             <FormGroup className="m-3" check>
//               <Label check>
//                 <Input value="Standard Plus Clean" type="radio" name="radio1" />
//                 I don't want you to vacuum my carpet.{" "}
//               </Label>
//             </FormGroup>
//           </FormGroup>
//         </Card>
//       </div>
//     </div>
//   );
// }
