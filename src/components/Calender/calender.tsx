// src/components/Calendar.tsx
import React from "react";
import { calendar, day, emptyDay } from "./calender.css";
// import { calendar, day } from "./calendar.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC = () => {
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((dayName) => (
      <div key={dayName} className={day}>
        {dayName}
      </div>
    ));
  };

  const renderDays = () => {
    const year = 2024;
    const month = 5; // 0부터 시작하므로 6월은 5입니다.
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // 첫 주의 빈 칸 채우기
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className={emptyDay}></div>);
    }

    // 실제 날짜 채우기
    for (let i = 1; i <= daysInMonth; i++) {
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
