import logo from "./logo.svg";
import "./App.css";
import { Alarm } from "./components/alarm";
import { AlarmAdd, AlarmOff } from "@mui/icons-material";
import { Modal } from "./components/Createmodal";
import { useRef, useState } from "react";
import { ModalExcluir } from "./components/modalEdit";
import { AlarmScreen } from "./components/alarmScreen";

function App() {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [message, setMessage] = useState("");
  const [alarms, setAlarms] = useState([]);
  const [switchState, setSwitchState] = useState(false);
  const ref = useRef();
  const siren = require("./siren.mp3");
  

  function handleSwitch() {
    setSwitchState(!switchState);
  }

var alarmAudio = new Audio(siren);
alarmAudio.muted = true;
alarmAudio.autoplay = true;
alarmAudio.loop = true;

  function checkAlarm() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  

      var alarms = JSON.parse(localStorage.getItem("alarms"));
      if (alarms.length > 0) {
      alarms.forEach((alarm) => {
        if (alarm.hour == hours && alarm.minute == minutes && seconds == 0) {
          changeColor();
          alarmAudio.muted = false;
          document
            .getElementsByClassName("alarmScreen")[0]
            .classList.remove("hidden");
          document
            .getElementsByClassName("alarmScreen")[0]
            .classList.add("flex");
          document.getElementById("clockAlarm").innerHTML =
            alarm.hour + ":" + alarm.minute;
          document.getElementById("messsageAlarm").innerHTML = alarm.message;
          document
            .getElementsByClassName("stopButton")[0]
            .addEventListener("click", function () {
              alarmAudio.pause();
              document
                .getElementsByClassName("alarmScreen")[0]
                .classList.remove("flex");
              document
                .getElementsByClassName("alarmScreen")[0]
                .classList.add("hidden");
            });
        }
      });
    }
  }

 

    setInterval(checkAlarm, 1000);
    

function changeColor() {
  var color = document.getElementsByClassName("alarmScreen")[0];
  var count = 0;
  var interval = setInterval(function() {
    if (count % 2 == 0) {
      color.style.backgroundColor = "red";
    } else {
      color.style.backgroundColor = "yellow";
    }
    count++;
    if (count == 20) {
      clearInterval(interval);
    }
  }, 500);
}


  const renderTime = () => {
    var date = new Date();
    var currentTime = document.getElementById("clock");
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // get the brazilian time
    var brazilianHours = date.getHours();
    if (brazilianHours < 0) {
      brazilianHours = 24 + brazilianHours;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (brazilianHours < 10) {
      brazilianHours = "0" + brazilianHours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    currentTime.innerHTML = brazilianHours + ":" + minutes + ":" + seconds;
  };
  setInterval(renderTime, 1000);




 
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
        message: message,
      };
      if(alarm.hour.length == 1) {
        alarm.hour = "0" + alarm.hour;
      }
      if(alarm.minute.length == 1) {
        alarm.minute = "0" + alarm.minute;
      }
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
  function stopAlarm() {
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    document.getElementsByClassName("alarmScreen")[0].classList.remove("flex");
    document.getElementsByClassName("alarmScreen")[0].classList.add("hidden");
  }

function sobrepor() {
  

}


 

  return (
    <div className="App flex flex-col w-full h-full bg-gray-100">
          
      <div className="clock flex flex-row justify-center items-center w-full h-24 bg-gray-800 text-white text-4xl">
        <div id="clock"> 00:00:00</div>
      </div>
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
                onClickSwitch={handleSwitch}
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
        message={message}
        setMessage={(e) => setMessage(e.target.value)}
      />
      <ModalExcluir deleteAlarm={deleteAlarm} />
      <AlarmScreen handleStop={stopAlarm} />
      <audio
        id="alarmAudio"
        className="hidden"
      >
        <source src={siren} type="audio/mpeg" />
      </audio>

    </div>
  );
}

export default App;
