// import { BasicCalendar } from "./components"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AdvancedCalendar, BasicCalendar, ControlledCalendar, CustomizedCalendar } from "./components";


const App = () => {
  return (
    <main style={{ height: '95vh', width: '90vw', margin: 'auto' }}>
      {/* <BasicCalendar />    */}
      {/* <ControlledCalendar/> */}
      {/* <CustomizedCalendar/> */}
      <AdvancedCalendar/>
    </main>
  );
}
export default App