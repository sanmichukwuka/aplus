import React from "react";
import { Card, FormGroup, Label, Input, DropdownItem } from "reactstrap";

export default function HowDiYou({ handleNextSection }) {
  return (
    <div class=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold">
          SPECIAL NOTES OR INSTRUCTIONS?
        </h1>
        <form className="mt-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Yulp</option>
            <option value="1">Google</option>
            <option value="2">Street Banner</option>
            <option value="3">Family & Friends</option>
            <option value="3">Instagram</option>
            <option value="3">Facebook</option>
            <option value="3">Twitter</option>
            <option value="3">Website</option>
            <option value="3">Thumbtack</option>{" "}
            <option value="3">Handy</option>
          </select>
          <button
            type="button"
            className="btn mt-4 btn-lg btn-primary"
            onClick={handleNextSection}
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

// export default function HoDiYou({ handleNextSection }) {
//   return (
//     <div class=" mt-5 d-flex justify-content-center">
//       <div className="position-relative start-40">
//         <h1 className="text-primary text-bold">
//           SPECIAL NOTES OR INSTRUCTIONS?
//         </h1>
//         <form className="mt-3">
//           <select class="form-select" aria-label="Default select example">
//             <option selected>Yulp</option>
//             <option value="1">Google</option>
//             <option value="2">Street Banner</option>
//             <option value="3">Family & Friends</option>
//             <option value="3">Instagram</option>
//             <option value="3">Facebook</option>
//             <option value="3">Twitter</option>
//             <option value="3">Website</option>
//             <option value="3">Thumbtack</option>{" "}
//             <option value="3">Handy</option>
//           </select>
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
