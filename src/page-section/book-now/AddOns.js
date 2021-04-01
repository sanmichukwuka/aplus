import React from "react";
import { Card } from "reactstrap";

const imgUrl =
  " https://s3.amazonaws.com/appforest_uf/f1555551991916x360655976154467000/115_fridge-refrigerator-freezer-kitchen-07-512.png";

export default function AddOns({handleNextSection }) {
  return (
    <div className=" mt-5 d-flex justify-content-center">
      <div className="position-relative start-40">
        <h1 className="text-primary text-bold"> ADD ONS</h1>
        <div className="d-flex flex-wrap">
          {[1, 1, 2, 5, 4].map((e) => (
            <Card onClick={handleNextSection} className="mt-3 text-center m-1 w-25">
              <div className="m-4">
                <img
                  style={{ width: "150xp", height: "150px" }}
                  src="https://s3.amazonaws.com/appforest_uf/f1555551991916x360655976154467000/115_fridge-refrigerator-freezer-kitchen-07-512.png"
                />
              </div>
              <p>Add any extra facility</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
