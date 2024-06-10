// src/components/Calendar.tsx
import React from "react";
import { calendar, day } from "./calender.css";
// import { calendar, day } from "./calendar.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC = () => {
  const renderDaysOfWeek = () => {
    return daysOfWeek.map((dayName) => (
      <div key={dayName} className={day}>
        {dayName}
      </div>
    ));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(
        <div key={i} className={day}>
          {i}
        </div>,
      );
    }
    return days;
  };

  return (
    <div className={calendar}>
      {renderDaysOfWeek()}
      {renderDays()}
    </div>
  );
};

export default Calendar;
