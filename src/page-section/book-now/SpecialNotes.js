
import React, { useState } from "react";

export default function SpecialNotes({ handleNextSection }) {
  const [organisation, setOrganisation] = useState({ name: "", email: "" });

  const onTextChange = (event, type) =>
    setOrganisation({ ...organisation, [type]: event.target.value });

    console.log(organisation);

  return (
    <div class=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold">Organization details.</h1>
        <form className="mt-3">
          <div className="me-3">
            <label for="basic-url" class="form-label">
              Organization Name{" "}
            </label>
            <input
              onChange={(event) => onTextChange(event, "name")}
              placeholder="Organization Name"
              type="text"
              class="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="me-3">
            <label for="basic-url" class="form-label">
              Company Email Address
            </label>
            <input
              onChange={(event) => onTextChange(event, "email")}
              placeholder="Company Email"
              type="email"
              class="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>

          <button
            type="button"
            className="btn mt-4 btn-lg btn-primary"
            // onChange={(event) => onTextChange(event, "email")}
            onClick={() => handleNextSection("organisation", organisation)}
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
}
















// import React from "react";
// import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

// export default function SpecialNotes({ handleNextSection }) {
//   return (
//     <div class=" mt-5 d-flex justify-content-center">
//       <div className="position-relative start-40">
//         <h1 className="text-primary text-bold">
//           SPECIAL NOTES OR INSTRUCTIONS?
//         </h1>
//         <form className="mt-3">
//           <input
//             placeholder="Please focus on the bathroom"
//             type="text"
//             class="form-control"
//             aria-label="Dollar amount (with dot and two decimal places)"
//           />
//           <button
//             type="button"
//             className="btn mt-4 btn-lg btn-primary"
//             onClick={handleNextSection}
//           >
//             NEXT
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


































// import React from "react";
// import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

// export default function SpecialNotes({ onClick }) {
//   return (
//     <div class=" mt-5 d-flex justify-content-center">
//       <div className="position-relative start-40">
//         <h1 className="text-primary text-bold">
//           SPECIAL NOTES OR INSTRUCTIONS?
//         </h1>
//         <form className="mt-3">
//           <input
//             placeholder="Please focus on the bathroom"
//             type="text"
//             class="form-control"
//             aria-label="Dollar amount (with dot and two decimal places)"
//           />
//           <button
//             type="button"
//             className="btn mt-4 btn-lg btn-primary"
//             onClick={onClick}
//           >
//             NEXT
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
