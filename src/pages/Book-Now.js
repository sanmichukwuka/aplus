import React, { useState } from "react";
import { Heading, Box, color } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Access,
  AddOns,
  AddTip,
  CreditCard,
  CleanType,
  HowDidYou,
  HowOften,
  OfficeTypeClean,
  ParkingLot,
  PriceCalculator,
  ScheduleDate,
  SelectService,
  ServiceAddress,
  ServiceCategories,
  CompanyInfo,
  SpecialNotes,
  SquareFeet,
  SpecialProducts,
  NumberOfRooms,
  NumberOfBathRooms,
  Vaccum,
  ZipCode,
  Success,
  
} from "../page-section/book-now";

import AppBar from "../components/AppBar";
import axios from 'axios';



export default function BookNow() {
  const [activeSection, setActiveSection] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  
  const [state, setState] = useState({
    organisation: { email: "", name: "" },
    officeTypeClean: "",
    companyName: null,
    email: "",
    password: null,
    aggregatePrice: "",
    zipCode: "",
    serviceCategories: "",
    // serviceSelected: "",
    numberOfRooms: "",
    numberOfBathRooms: "",
    cleanType: "",
    // addOns: "",
    addTip: "",
    hasVaccum: "",
    parkingLot: "",
    howDidYou: "",
    howOften: "",
    specialNotes: "",
    scheduleDate: "",
    serviceAddress: "",
    squareFeet: "",
    paymentMethod: "",
    howDidYouHearAboutUs: ""
  });

  console.log(state)
  const displayAggregatePrice = (howOften) => {
    const params = {
      howOften: howOften,
      squareFeet: state.squareFeet,
      email: state.organisation.email
    }
    try {
      axios
        .post("http://localhost:8080/aggregatePrice",  params )
        .then((response) => {
          setDisplayPrice(response.data.aggregatePrice);
          console.log({ response });
        });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleNext = (type, data) => {
    if (activeSection < 16) setActiveSection(activeSection + 1);
    setState({ ...state, [type]: data });
    console.log(type + ": " + data);
  };

  const handleBack = () => {
    if (activeSection > -1) setActiveSection(activeSection - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ZipCode data={state} handleNextSection={handleNext} />;
      case 1:
        return <ServiceCategories handleNextSection={handleNext} />;
      case 2:
        return <OfficeTypeClean handleNextSection={handleNext} data={state} />;
      case 3:
        return <SquareFeet data={state} handleNextSection={handleNext} />;
      case 4:
        return <CleanType handleNextSection={handleNext} />;
      case 5:
        return <AddTip data={state} handleNextSection={handleNext} />;
      case 6:
        return <Vaccum handleNextSection={handleNext} />;
      case 7:
        return <Access handleNextSection={handleNext} />;
      case 8:
        return <Pets handleNextSection={handleNext} />;
      case 9:
        return <CompanyInfo handleNextSection={handleNext} />;
      case 10:
        return <HowDidYou handleNextSection={handleNext} />;
      case 11:
        return <ScheduleDate handleNextSection={handleNext} />;
      case 12:
        return <ServiceAddress handleNextSection={handleNext} />;
      case 13:
        return <HowOften data={state} handleNextSection={handleNext} displayAggregatePrice={displayAggregatePrice}/>;
      case 14:
        return <CreditCard handleNextSection={handleNext} price={displayPrice} />;
      case 15:
        return <Success handleNextSection={handleNext} />;
      default:
        return null;
    }
  }

  return (
    <>
      <AppBar />
      {activeSection > 0 && (
        <div
          style={{
            color: "#fff",
            backgroundColor: "blue",
            height: "60px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <span style={{ cursor: "pointer" }} onClick={handleBack}>
            <AiOutlineArrowLeft style={{ fontSize: "30px" }} />
          </span>
        </div>
      )}
      <Heading textAlign="center" color="blue">
        WANT A FRESH START? WE GOT YOU
      </Heading>
      <Box mt="20px">{getStepContent(activeSection)}</Box>
    </>
  );
}
































// import React, { useState } from "react";
// import { Heading, Box } from "@chakra-ui/react";
// import {
//   Access,
//   AddOns,
//   CreditCard,
//   CleanType,
//   HowDidYou,
//   HowOften,
//   Pets,
//   PriceCalculator,
//   ScheduleDate,
//   SelectService,
//   ServiceAddress,
//   ServiceCategories,
//   SpecialNotes,
//   SquareFeet,
//   SpecialProducts,
//   NumberOfRooms,
//   NumberOfBathRooms,
//   Vaccum,
//   ZipCode,
//   Success,
// } from "../page-section/book-now";

// import AppBar from "../components/AppBar";
import CompanyInfo from '../page-section/book-now/CompanyInfo';

// const sections = [
//   "ZipCode",
//   "Service Categories",
//   "Select Service",
//   "Number Of Rooms",
//   "Number Of BathRooms",
//   "CleanType",
//   "AddOns",
//   "SpecialProducts",
//   "Vaccum",
//   "Access",
//   "Pets",
//   "SpecialNotes",
//   "HowDidYou",
//   "ScheduleDate",
//   "ServiceAddress",
//   "HowOften",
//   "CreditCard",
//   "Success",
// ];

// export default function BookNow() {
//   const [activeSection, setActiveSecton] = useState(0);

//   function getStepContent(step) {
//       switch(step) {
//         case 0:
//               return <ZipCode onChange={handleNext} />;
//         case 1:
//             return <ServiceCategories onClick={handleNext} />
//         case 2:
//             return <SelectService onClick={handleNext} />
//         case 3:
//             return <NumberOfOptions onClick={handleNext} />
//         case4:
//             return <SquareFeet onClick={handleNext} />
//         case 5:
//             return <CleanType onClick={handleNext} />
//         case 6:
//             return <AddOns onClick={handleNext} />
//         case 7:
//             return <Vacuum onClick={handleNext} />
//         case 8:
//             return <Access onClick={handleNext} />
//         case 9:
//             return <Pets onClick={handleNext} />
//         case 10:
//             return <SpecialNotes onClick={handleNext} />
//         case 11:
//             return <HowDidYou onClick={handleNext} />
//         case 12:
//             return <ScheduleDate onClick={handleNext} />
//         case 13:
//             return <ServiceAddress onClick={handleNext} />
//         case 14:
//             return <HowOften onClick={handleNext} />
//         case 15:
//             return <CreditCard onClick={handleNext} />
//         case 16:
//             return <Success onClick={handleNext} />
//         default:
//             null;

//       }
//   }

//   const handleNext = () => {
//       setActiveSecton(activeSection + 1);
//   };

//   const handleBack = () => {
//       setActiveSection(activeSection - 1);
//   };

//   return (
//       <>
//       <AppBar />
//       <Heading textAlign="center" color="blue" >
//        WANT A FRESH START WE GOT YOU
//        </Heading>
//        {/* <Heading>{sections[activeSection]}</Heading> */}
//        <Box mt="20px">{getStepContent(activeSection)}</Box> /* questions */
//        </>
//   )
// }
