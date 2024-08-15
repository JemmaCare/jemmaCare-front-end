import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const DateTimePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="appointmentDateTime" className="text-teal-600 font-semibold mb-2">
        Select Date and Time
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeCaption="Time"
        dateFormat="Pp"
        placeholderText="Click to select a date"
        className="w-full max-w-xs p-2 border-2 border-teal-500 rounded-lg text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        popperClassName="react-datepicker-popper"
        calendarClassName="react-datepicker"
        wrapperClassName="w-full max-w-xs"
        dayClassName={(date) =>
          date.getDate() === selectedDate?.getDate()
            ? "react-datepicker__day--selected bg-teal-500 text-white"
            : undefined
        }
      />
    </div>
  );
};

export default DateTimePicker;
