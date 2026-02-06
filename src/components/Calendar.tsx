"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // Start at Jan 2026

  // Constant booked dates for demonstration (mapped by month index for variety)
  const bookedDatesMap: Record<number, number[]> = {
    0: [5, 12, 16, 19, 26], // Jan
    1: [2, 14, 20, 25], // Feb
    2: [10, 11, 22, 28], // Mar
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  // Get days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 is Sunday

  // Adjust firstDayOfMonth for Monday start (Mon=0, Sun=6)
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Days from previous month to fill the first row
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const prevMonthPadding = Array.from(
    { length: adjustedFirstDay },
    (_, i) => prevMonthLastDay - adjustedFirstDay + 1 + i,
  );

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Padding for the last row
  const totalCells = adjustedFirstDay + daysInMonth;
  const nextMonthPaddingCount = (7 - (totalCells % 7)) % 7;
  const nextMonthPadding = Array.from(
    { length: nextMonthPaddingCount },
    (_, i) => i + 1,
  );

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handlePrev = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNext = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const currentBookedDates = bookedDatesMap[month % 3] || []; // Cycle through some booked dates

  return (
    <div className="max-w-md w-full font-sans">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-sans! tracking-widest flex items-center gap-2">
          {monthName} {year}
        </h3>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer hover:opacity-50 transition-opacity p-1"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer hover:opacity-50 transition-opacity p-1"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-6 text-center text-sm">
        {weekDays.map((day) => (
          <div key={day} className="text-dark/40 font-medium mb-2">
            {day}
          </div>
        ))}

        {prevMonthPadding.map((d) => (
          <div key={`prev-${d}`} className="text-dark/20 py-2">
            {d}
          </div>
        ))}

        {days.map((d) => {
          const isBooked = currentBookedDates.includes(d);
          return (
            <div
              key={d}
              className={`py-2 transition-colors ${
                isBooked ? "text-dark/20" : "text-dark"
              }`}
            >
              {d}
            </div>
          );
        })}

        {nextMonthPadding.map((d) => (
          <div key={`next-${d}`} className="text-dark/20 py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-8 text-xs tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-dark"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-dark/20"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
