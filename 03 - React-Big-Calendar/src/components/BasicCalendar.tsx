import moment from "moment";
import MyCalendar from "./MyCalendar";

const events = [
  {
    start: moment('2025-04-30T10:00:00').toDate(),
    end: moment('2025-04-30T11:00:00').toDate(),
    title: 'MRI Registration',
  },
  {
    start: moment('2025-04-30T14:00:00').toDate(),
    end: moment('2025-04-30T15:30:00').toDate(),
    title: 'ENT Appointment',
  },
];

export default function BasicCalendar() {
  return <MyCalendar events={events} />;
}