import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Bar from './bar';
import _ from 'underscore'

let constTop = 300

function App() {
  const [secTop, setSecTop] = useState([`${constTop}px`, `${constTop}px`])
  const [top, setTop] = useState(new Array(6).fill('300px'))
  const [timeData, setTimeData] = useState([])

  useEffect(() => {
    setInterval(() => {
      triggerPositionChange()
    }, 1000);
  }, [])

  const triggerPositionChange = () => {
    let date = new Date()
    let timeArray = [date.getHours(), date.getMinutes(), date.getSeconds()]
    timeArray = timeArray.map(val => {
      let splitVal = val.toString().split('')
      return splitVal.length == 1 ? [0, ...splitVal] : splitVal
    })
    timeArray = _.flatten(timeArray)
    setTimeData(timeArray)
    let constTop = 300
    timeArray = timeArray.map(val => {
      return (constTop - ((+val) * 58)) + 'px'
    })
    setTop(timeArray)
  }

  const getCircle = () => {
    // return (
    //   <div className="circle-time">
    //   </div>
    // )
  }

  const getBar = ({ count, top , index}) => {
    return (
      <div className="anim04" style={{ top: top }}>
        <Bar count={count} timeData = {timeData[index]} />
      </div>
    )
  }
  let displayArray = [{ count: 2, top: top[0] }, { count: 9, top: top[1] }, { count: 5, top: top[2] }, { count: 9, top: top[3] }, { count: 5, top: top[4] }, { count: 9, top: top[5] }]
  // displayArray = [displayArray[2]]
  return (
    <div className="App">
      {/* <header className="App-header">
        Fancy Time
      </header>
      <div className="center-align">
        sec {new Date().getSeconds()}
      </div> */}
      <div style={{}} className="container">
        <div className="contaier">
          <div className="contaier">
            <div className="contaier">
              <div className="container">
                <div className="row jus-cen">
                  {displayArray.map((val, index) => (
                    <div className="wid-100">
                      {getBar({ count: val.count, top: val.top, index })}
                      {getCircle()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
