import React from "react";

function Heading() {
  const hour = new Date().getHours();
  let zone = "";
  let headStyle = { color: "" };
  if (hour < 12) {
    zone = "Morning";
    headStyle.color = "red";
  } else if (hour < 18) {
    zone = "Afternoon";
    headStyle.color = "green";
  } else if (hour <= 23) {
    zone = "Evening";
    headStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={headStyle}>
      {`Good ${zone}`}
    </h1>
  );
}

export default Heading;
