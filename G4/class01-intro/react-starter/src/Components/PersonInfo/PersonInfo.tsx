// import React from "react";
import "./PersonInfo.css";

//Function Personinfo
interface PersonInfoProps {
  firstName: string;
  lastName: string;
  bgColor?: string;
}

function PersonInfo({ firstName, lastName, bgColor }: PersonInfoProps) {
  return (
    <div
      className="PersonInfo"
      style={{ backgroundColor: bgColor || "lightblue" }}
    >
      <strong>{firstName}</strong> <strong>{lastName}</strong>
    </div>
  );
}

export default PersonInfo;

// class PersonInfo extends React.Component {
//   firstName = "Boris";
//   lastName = "Borisovski";

//   render() {
//     return (
//       <div className="PersonInfo">
//         <strong>{this.firstName}</strong> <strong>{this.lastName}</strong>
//       </div>
//     );
//   }
// }

// export default PersonInfo;
