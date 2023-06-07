import { AlarmOff } from "@mui/icons-material";

export function AlarmScreen(props) {
  return (
    <div className="alarmScreen fixed inset-0 flex justify-center items-center z-50 transition duration-500 ease-in-out w-full h-full bg-gray-900 hidden">
      <div className="alarmScreenDiv bg-gray-800 rounded-lg flex flex-col justify-center items-center shadow-2xl w-3/4 h-3/4">
        <div className="hour text-white text-8xl mb-20">
          <div id="clockAlarm">00:00</div>
        </div>
        <div className="message text-white text-4xl mb-20">
          <div id="messsageAlarm">Message</div>
        </div>
        <div className="stopButton">
          <button
            className="rounded-full bg-gray-800 w-16 h-16 flex items-center justify-center text-white text-4xl hover:bg-gray-700 transition duration-500 ease-in-out"
            onClick={props.handleStop}
          >
            <AlarmOff />
          </button>
        </div>
      </div>
    </div>
  );
}
