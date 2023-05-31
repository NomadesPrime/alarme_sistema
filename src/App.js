import logo from "./logo.svg";
import "./App.css";
import { Alarm } from "./components/alarm";
import { AlarmAdd } from "@mui/icons-material";
import { Modal } from "./components/Createmodal";
import { useRef, useState } from "react";
import { ModalExcluir } from "./components/modalEdit";

function App() {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [alarms, setAlarms] = useState([]);
  const [switchState, setSwitchState] = useState(false);
  const ref = useRef();

  


  function create() {
    if (hour === "00" && minute === "00") {
      alert("Please, select a hour");
      return;
    } else {
      // create alarm object with auto id
      var alarm = {
        id: Math.random().toString(36).substr(2, 9),
        hour: hour,
        minute: minute,
        message: "Alarme",
      };
      // save to local storage
      if (localStorage.getItem("alarms")) {
        var alarms = JSON.parse(localStorage.getItem("alarms"));
        alarms.push(alarm);
        localStorage.setItem("alarms", JSON.stringify(alarms));
      } else {
        var alarms = [];
        alarms.push(alarm);
        localStorage.setItem("alarms", JSON.stringify(alarms));
      }
    }
    // update state
    setAlarms(JSON.parse(localStorage.getItem("alarms")));
  }
 


  function handleCreate() {
    document.getElementsByClassName("modal")[0].classList.add("opacity-100");
    document.getElementsByClassName("modal")[0].classList.remove("opacity-0");
    document
      .getElementsByClassName("modal")[0]
      .classList.add("pointer-events-auto");
    document
      .getElementsByClassName("modal")[0]
      .classList.remove("pointer-events-none");
  }
  function handleOpen() {
    document.getElementsByClassName("modalEdit")[0].classList.add("flex");
    document.getElementsByClassName("modalEdit")[0].classList.remove("hidden");
  }
  var id_alarm;
  function getId(id) {
    id_alarm = id;
  }
  function deleteAlarm() {
    var alarms = JSON.parse(localStorage.getItem("alarms"));
    var newAlarms = alarms.filter((alarm) => alarm.id !== id_alarm);
    localStorage.setItem("alarms", JSON.stringify(newAlarms));
    setAlarms(JSON.parse(localStorage.getItem("alarms")));
    document.getElementsByClassName("modalEdit")[0].classList.add("hidden");
    document.getElementsByClassName("modalEdit")[0].classList.remove("flex");
  }
 



  return (
    <div className="App flex flex-col w-full h-full bg-gray-100">
      <div className="grid grid-cols-3 w-full">
        {localStorage.getItem("alarms")
          ? JSON.parse(localStorage.getItem("alarms")).map((alarm) => (
              <Alarm
                hour={alarm.hour}
                message={alarm.message}
                onClickBody={() => handleOpen()}
                minute={alarm.minute}
                id={alarm.id}
                onClick={() => getId(alarm.id)}
              />
            ))
          : null}
      </div>
      <div className="add_alarm flex flex-row w-full fixed bottom-0 right-0 p-4">
        <button
          className="rounded-full bg-gray-800 w-16 h-16 flex items-center justify-center text-white text-4xl hover:bg-gray-700 transition duration-500 ease-in-out"
          onClick={handleCreate}
        >
          <AlarmAdd />
        </button>
      </div>
      <Modal
        create={create}
        hour={hour}
        setHour={(e) => setHour(e.target.value)}
        minute={minute}
        setMinute={(e) => setMinute(e.target.value)}
      />
      <ModalExcluir
        deleteAlarm={deleteAlarm}
        
      />
    </div>
  );
}

export default App;
