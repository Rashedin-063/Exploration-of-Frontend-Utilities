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

// const formats = useMemo(() => ({
//   dateFormat: 'dd',

//   dayFormat: (date, , localizer) =>
//     localizer.format(date, 'DDD', culture),

//   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
//     localizer.format(start, { date: 'short' }, culture) + ' — ' +
//     localizer.format(end, { date: 'short' }, culture)
// }), [])

const ControlledCalendar = () => {
  return (
    // <MyCalendar
    //   defaultView={'day'}
    //   views={['month', 'week', 'day']}
    //   date={moment('1995-03-06').toDate()}
    //   toolbar={false}
    // />
    // <MyCalendar
    //   events={events}
    //   max={moment('2025-04-30T14:00:00').toDate()}
    //   min={moment('2025-04-30T10:00:00').toDate()}

    // />
    <MyCalendar
      events={events}
      formats={{ dayHeaderFormat: (date) => moment(date).format('dddd @ DD') }}
    />
  );
}
export default ControlledCalendar