import { Switch } from "@mui/material";

export function Alarm(props) {
  return (
    <div className="flex flex-col items-center justify-flex-start p-4 bg-white rounded-lg shadow-md max-w-2xl m-20 hover:shadow-xl transition duration-500 ease-in-out cursor-pointer h-200" onClick={props.onClick} id={props.id}>
      <div className="alarm_header flex flex-row items-center justify-between w-full">
        <h2 className="alarm_hour text-7xl font-bold text-gray-800" onClick={props.onClickBody}>{props.hour}:{props.minute}</h2>
        <Switch />
        </div>
        <div className="alarm_days flex flex-row items-center justify-between w-full mt-4">
        <h2 className="alarm_message text-2xl font-bold text-gray-800 text-center" onClick={props.onClickBody}>{props.message}</h2>
        </div>
      <div className="days flex flex-row w-full mt-4 text-white" onClick={props.onClickBody}>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Dom</div>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Seg</div>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Ter</div>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Qua</div>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Qui</div>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Sex</div>
        <div className="day bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full mr-2">Sab</div>
    </div>
    </div>
  );
}
