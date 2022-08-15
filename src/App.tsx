import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={onMinutesChange}
      />
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={onHoursChange}
      />
    </>
  );
}

export default App;
