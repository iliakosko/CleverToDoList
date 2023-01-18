import React, { useContext } from "react";

import { TodoContext } from "../context";

import DatePicker from "react-horizontal-datepicker";
import moment from "moment";

function Calendar() {
  const { setSelectedProject } = useContext(TodoContext);

  const selectedDay = (val) => {
    const a = moment(val).format("MM/DD/YYYY");
    setSelectedProject(a);
  };
  return (
    <div className="Calendar">
      <DatePicker
        getSelectedDay={selectedDay}
        selectDate={new Date("2022-01-19")}
        labelFormat={"MMMM"}
        color={"#374e8c"}
      />
    </div>
  );
}

export default Calendar;
