import React from "react";

export default function FormatDate(props) {
  let utcDate = new Date().getTime();
  let localTime = new Date(utcDate + props.date);

  let date = localTime.getUTCDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[localTime.getUTCMonth()];
  let year = localTime.getUTCFullYear();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[localTime.getUTCDay()];

  let hour = localTime.getUTCHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = localTime.getUTCMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let ampm = `a.m.`;
  if (localTime.getUTCHours() >= 12 && localTime.getUTCHours() < 23) {
    ampm = `p.m.`;
  }
  return (
    <div className="FormatDate">
      <h4>
        {date} {month} {year} ({day})
      </h4>
      <h4>
        {hour}:{minute} {ampm}
      </h4>
    </div>
  );
}
