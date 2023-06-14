import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

function FloatingWA() {
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState("");

  const onCLickShow = () => {
    setShow(!show);
  };

  return (
    <div className="SidebtnContainer">
      <div className="container">
        <div className="iconContainer">
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
        <Link href="/">
          <div className="extendSide">Chat WhatsApp Kami Sekarang</div>
        </Link>
      </div>
    </div>
  );
}

export default FloatingWA;
