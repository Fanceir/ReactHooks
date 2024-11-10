import React, { useState } from "react";

export default function DateCom() {
  const [date] = useState(() => {
    const dt = new Date();
    return {
      year: dt.getFullYear(),
      month: dt.getMonth() + 1,
      day: dt.getDate(),
    };
  });
  return (
    <>
      <h1>当前的日期</h1>
      <p>当前的月份{date.year}</p>
      <p>当前的月份{date.month}</p>
      <p>当前的月份{date.day}</p>
    </>
  );
}
