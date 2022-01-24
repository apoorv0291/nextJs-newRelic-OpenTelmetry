import React from "react";
import Head from "next/head";

const about = () => {
  const person = { aa: "111", bb: { ff: 111 } };
  return (
    <div>
      <Head>
        <title> Web Next Js</title>
      </Head>
      <h1>This is about</h1>
    </div>
  );
};

export default about;
