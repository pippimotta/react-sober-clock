import React from "react";
import TimeBox from "./TimeBox";
import Toggler from './Toggler';
import "./styles.css";
import { getYearData, getMonthData, getWeekData, getHourData } from "./date";

export default function App() {
  const now = new Date().toLocaleTimeString('japanese',{hour12:false});
  const [time, setTime] = React.useState(now);
  const [lightMode, setLightMode]  =  React.useState(true);

  setInterval(()=>{
    const newTime = new Date().toLocaleTimeString('japanese',{hour12:false});
    setTime(newTime)
  },1000)

  const timeBox = [];
  const timeStd = ["Year", "Month", "Week", "Day"];
  const timeData = [
    getYearData(),
    getMonthData(),
    getWeekData(),
    getHourData()
  ];
  for (let i = 0; i < 4; i++) {
    timeBox.push({
      timeStd: timeStd[i],
      data: timeData[i]
    });
  }
  const timeBoxElements = timeBox.map((box) => (
    <TimeBox
      timeStd={box.timeStd}
      per={box.data.passedPer}
      remain={box.data.remained}
      time={box.data.time}
      display={box.data.display}
      lightMode={lightMode}
    />
  ));

  function toggleLightMode(){
    setLightMode(prevMode => !prevMode)
  }

  return (
    <main className={lightMode? 'light':""}>
      <div className='header'>
        <h1 className="title">Welcome back, sober.</h1>
        <Toggler lightMode={lightMode}  toggleLightMode={toggleLightMode}/>
      </div>
      <h1 className='time-string'>{time}</h1>
      <div className="time-container">{timeBoxElements}</div>
    </main>
  );
}
