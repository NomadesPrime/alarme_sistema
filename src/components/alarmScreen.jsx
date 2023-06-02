import { AlarmOff } from "@mui/icons-material";

export function AlarmScreen(props) {
  return (
    // make this div a modal full screen
    <div className="alarmScreen fixed inset-0 bg-opacity-75 flex justify-center items-center z-50 transition duration-500 ease-in-out hidden w-full h-full">
      <div className="alarmScreenDiv bg-gray-800 rounded-lg flex flex-col justify-center items-center border-4 border-gray-800 shadow-2xl w-full h-full ">
        <div className="hour flex flex-row justify-center items-center h-24 bg-gray-800 text-white text-8xl w-2/4">
          <div id="clockAlarm">00:00</div>
        </div>
        <div className="message flex flex-row justify-center items-center h-60 bg-gray-800 text-white text-8xl w-3/6">
          <div id="messsageAlarm">Message</div>
        </div>
        <div className="stopButton flex flex-row justify-center items-center h-24 bg-gray-800 text-white text-4xl w-3/6">
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
