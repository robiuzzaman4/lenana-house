"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface CalendarProps {
  mode?: "single" | "range";
  selected?: Date | DateRange | null;
  onSelect?: (date: Date | DateRange | null) => void;
  disabledDates?: Date[];
  bookedDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({
  mode = "range",
  selected,
  onSelect,
  disabledDates = [],
  bookedDates = [],
  minDate,
  maxDate,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [internalSelected, setInternalSelected] = useState<
    Date | DateRange | null
  >(selected || (mode === "range" ? { from: null, to: null } : null));

  // Use controlled or uncontrolled state
  const selectedValue = selected !== undefined ? selected : internalSelected;

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

  // Helper function to check if a date is disabled
  const isDateDisabled = (day: number): boolean => {
    const date = new Date(year, month, day);

    // Check if date is in disabled dates
    const isInDisabledDates = disabledDates.some(
      (d) => d.toDateString() === date.toDateString(),
    );

    // Check if date is in booked dates
    const isInBookedDates = bookedDates.some(
      (d) => d.toDateString() === date.toDateString(),
    );

    // Check min/max date constraints
    const isBeforeMin = minDate && date < minDate;
    const isAfterMax = maxDate && date > maxDate;

    return (
      isInDisabledDates || isInBookedDates || !!isBeforeMin || !!isAfterMax
    );
  };

  // Helper function to check if a date is selected
  const isDateSelected = (day: number): boolean => {
    const date = new Date(year, month, day);

    if (mode === "single") {
      return (
        selectedValue instanceof Date &&
        selectedValue.toDateString() === date.toDateString()
      );
    } else {
      const range = selectedValue as DateRange;
      if (!range || !range.from) return false;

      if (!range.to) {
        return range.from.toDateString() === date.toDateString();
      }

      return date >= range.from && date <= range.to;
    }
  };

  // Helper function to check if a date is the start or end of a range
  const isRangeStart = (day: number): boolean => {
    if (mode !== "range") return false;
    const date = new Date(year, month, day);
    const range = selectedValue as DateRange;
    return range?.from?.toDateString() === date.toDateString();
  };

  const isRangeEnd = (day: number): boolean => {
    if (mode !== "range") return false;
    const date = new Date(year, month, day);
    const range = selectedValue as DateRange;
    return range?.to?.toDateString() === date.toDateString();
  };

  // Handle date click
  const handleDateClick = (day: number) => {
    if (isDateDisabled(day)) return;

    const clickedDate = new Date(year, month, day);

    if (mode === "single") {
      const newValue = clickedDate;
      setInternalSelected(newValue);
      onSelect?.(newValue);
    } else {
      const range = selectedValue as DateRange;

      // If no start date, set it
      if (!range?.from) {
        const newRange = { from: clickedDate, to: null };
        setInternalSelected(newRange);
        onSelect?.(newRange);
      }
      // If start date exists but no end date
      else if (!range.to) {
        // If clicked date is before start, reset with new start
        if (clickedDate < range.from) {
          const newRange = { from: clickedDate, to: null };
          setInternalSelected(newRange);
          onSelect?.(newRange);
        } else {
          // Set as end date
          const newRange = { from: range.from, to: clickedDate };
          setInternalSelected(newRange);
          onSelect?.(newRange);
        }
      }
      // If both dates are set, start over
      else {
        const newRange = { from: clickedDate, to: null };
        setInternalSelected(newRange);
        onSelect?.(newRange);
      }
    }
  };

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
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer hover:opacity-50 transition-opacity p-1"
            aria-label="Next month"
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
          const isDisabled = isDateDisabled(d);
          const isSelected = isDateSelected(d);
          const isStart = isRangeStart(d);
          const isEnd = isRangeEnd(d);

          return (
            <button
              key={d}
              onClick={() => handleDateClick(d)}
              disabled={isDisabled}
              className={`size-9 rounded-full transition-all ${
                isDisabled
                  ? "text-dark/20 cursor-not-allowed"
                  : "text-dark cursor-pointer hover:bg-secondary"
              } ${isSelected && !isDisabled ? "bg-secondary text-white" : ""} ${
                (isStart || isEnd) && !isDisabled ? "font-bold" : ""
              }`}
            >
              {d}
            </button>
          );
        })}

        {nextMonthPadding.map((d) => (
          <div key={`next-${d}`} className="text-dark/20 py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-8 text-xs tracking-widest">
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
