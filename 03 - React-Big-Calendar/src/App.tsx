// import { BasicCalendar } from "./components"

import { ControlledCalendar } from "./components";


const App = () => {
  return (
    <main style={{ height: '95vh', width: '90vw', margin: 'auto' }}>
      {/* <BasicCalendar />    */}
      <ControlledCalendar/>
    </main>
  );
}
export default App