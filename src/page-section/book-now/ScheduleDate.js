import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ScheduleDate({ handleNextSection }) {
  const [value, onChange] = useState(new Date());

  return (
    <div class="">
      <h1 className="text-primary  text-center mb-4">
        Select a date For Service Appointment
      </h1>
      <div className="d-flex justify-content-center">
        <Calendar onChange={onChange} value={value} />
      </div>{" "}
      <div className="text-center">
        <button
          type="button"
          className="btn mt-4 btn-lg btn-primary"
          onClick={handleNextSection}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
















// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// export default function ScheduleDate({ handleNextSection }) {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div class="">
//       <h1 className="text-primary  text-center mb-4">
//         SPECIAL NOTES OR INSTRUCTIONS?
//       </h1>
//       <div className="d-flex justify-content-center">
//         <Calendar onChange={onChange} value={value} />
//       </div>{" "}
//       <div className="text-center">
//         <button
//           type="button"
//           className="btn mt-4 btn-lg btn-primary"
//           onClick={handleNextSection}
//         >
//           NEXT
//         </button>
//       </div>
//     </div>
//   );
// }
