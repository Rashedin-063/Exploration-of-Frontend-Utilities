import moment from "moment";
import MyCalendar from "./MyCalendar";

const events = [
  {
    start: moment('2025-04-30T10:00:00').toDate(),
    end: moment('2025-04-30T11:00:00').toDate(),
    title: 'MRI Registration',
    data: {
      type: "Reg",
    }
  },
  {
    start: moment('2025-04-30T14:00:00').toDate(),
    end: moment('2025-04-30T15:30:00').toDate(),
    title: 'ENT Appointment',
    data: {
      type: 'App'
    }
  },
];

interface EventData {
  type: string;
}

interface EventProps {
  event: {
    data?: EventData;
    title?: React.ReactNode; // Align with ReactNode type
  };
  title?: React.ReactNode; // Align with ReactNode type
}

const components = {
  event: (props: EventProps) => {
    const eventType = props?.event?.data?.type;
    const title = props.title || ""; // Ensure title is a string
    switch (eventType) {
      case "Reg": 
        return (
          <div
            style={{
              background: 'yellow',
              color: 'black',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            {title}
          </div>
        );
      case "App": 
        return <div style={{ background: 'lightgreen', color: 'black', padding: '10px', borderRadius: '4px' }}>{title}</div>;
      default:
        return null;
    }
  }
};

export default function AdvancedCalendar() {
  return <MyCalendar events={events} components={components}/>;
}