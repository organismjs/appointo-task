import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <div className="wrapper">
      <div className="calendar-wrapper">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="slots-wrapper">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
    <div className="footer">

    </div>
    </div>
  );
}

export default App;
