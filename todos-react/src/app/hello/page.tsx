"use client"

import React, { useEffect, useState } from "react";

type HelloProps = {
  name?: string;
}

function Hello(props: HelloProps) {
  return <div>Hello <span>{props.name ?? 'world'}</span></div>
}

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <div>{now.toLocaleTimeString()}</div>
}

export default function HelloPage() {
  
  // return React.createElement('div', {
  //   className: 'Hello',
  //   id: 'hello-page',
  // }, 'Hello ', React.createElement('span', {}, 'world !'));

  return <div className="HelloPage" id="hello-page">
    <Hello name="Romain" />
    <Hello />
    <Hello />
    <Clock />
  </div>
}