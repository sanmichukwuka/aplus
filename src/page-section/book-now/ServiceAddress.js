import React, { useState } from "react";

export default function ServiceAddress({ handleNextSection }) {
  const [value, onChange] = useState(new Date());

  return (
    <div class="container-sm">
      <h1 className="text-primary  text-center mb-4">Service Address</h1>
      <div className="d-flex justify-content-center">
        <form className="mt-3">
          <div className="d-flex">
            <div className="me-3">
              <label for="basic-url" class="form-label">
                Your Address{" "}
              </label>

              <input
                placeholder="Street Address"
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </div>
            <div>
              <label for="basic-url" class="form-label">
                Apt./Floor/UNIT{" "}
              </label>

              <input
                placeholder="Room Number"
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </div>
          </div>
          <button
            type="button"
            className="btn mt-4 btn-lg btn-primary"
            onClick={handleNextSection}
          >
            NEXT
          </button>
        </form>
      </div>{" "}
    </div>
  );
}




















// import React, { useState } from "react";

// export default function ServiceAddress({ onClick }) {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div class="container-sm">
//       <h1 className="text-primary  text-center mb-4">Service Address</h1>
//       <div className="d-flex justify-content-center">
//         <form className="mt-3">
//           <div className="d-flex">
//             <div className="me-3">
//               <label for="basic-url" class="form-label">
//                 Your Address{" "}
//               </label>

//               <input
//                 placeholder="Street Address"
//                 type="text"
//                 class="form-control"
//                 aria-label="Dollar amount (with dot and two decimal places)"
//               />
//             </div>
//             <div>
//               <label for="basic-url" class="form-label">
//                 Apt./Floor/UNIT{" "}
//               </label>

//               <input
//                 placeholder="Room Number"
//                 type="text"
//                 class="form-control"
//                 aria-label="Dollar amount (with dot and two decimal places)"
//               />
//             </div>
//           </div>
//           <button
//             type="button"
//             className="btn mt-4 btn-lg btn-primary"
//             onClick={onClick}
//           >
//             NEXT
//           </button>
//         </form>
//       </div>{" "}
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
