import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

function FloatingWA() {
  // const [show, setShow] = useState(false);
  // const [header, setHeader] = useState("");

  // const onCLickShow = () => {
  //   setShow(!show);
  // };

  return (
    <div className="SidebtnContainer">
      <div className="container">
        <Link href="/">
          <img src="/images/WA.svg" className="wabtn"></img>
        </Link>
        {/* <div className="iconContainer">
          <Icon
            icon="logos:whatsapp-icon"
            className=""
            style={{
              cursor: "pointer",
              fontSize: "36px",
              color: "#A5090C",
            }}
          />
        </div>
        
          <div className="extendSide">
            Chat WhatsApp <br></br>Kami Sekarang
          </div>
         */}
      </div>
    </div>
  );
}

export default FloatingWA;
