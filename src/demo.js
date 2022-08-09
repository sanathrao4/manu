import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2022-08-08";
const schedulerData = [
  {
    className:"slot1",
    startDate: "2022-08-08T08:30",
    endDate: "2022-08-08T10:30",
    title: "Completed"
  },
  {
    startDate: "2022-08-08T11:00",
    endDate: "2022-08-08T13:00",
    title: "Inprogress"
  },
  {
     startDate: "2022-08-08T13:00",
    endDate: "2022-08-08T14:00",
    title: "Break"
  },
  {
     startDate: "2022-08-08T14:00",
    endDate: "2022-08-08T16:00",
    title: "Open"
  },
  {
     startDate: "2022-08-08T16:00",
    endDate: "2022-08-08T18:00",
    title: "Inprogress"
  },
  {
     startDate: "2022-08-08T18:00",
    endDate: "2022-08-08T20:00",
    title: "Completed"
  },
];

export default () => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <DayView startDayHour={8} endDayHour={21} />
      <Appointments />
    </Scheduler>
  </Paper>
);
