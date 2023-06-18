import React from "react";
import { Card } from "antd";

function DetailBooking() {
  return (
    <div>
      <Card
        // title="Detail Booking"
        // bordered={false}
        style={{
          width: "100%",
          height: "32rem", 
          borderRadius: "1.5rem", 
        }}
      >
        <h1 className="detailBookingTitle">Detail Booking</h1>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default DetailBooking;
