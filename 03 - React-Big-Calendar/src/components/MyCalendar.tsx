import { Calendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = (props: Omit<CalendarProps, 'localizer'>) => {
  return <Calendar {...props} localizer={localizer}/>
};
export default MyCalendar;
