import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Chart from './Chart';

function App() {
  const isActiveRef = useRef(false); // Add this line
  const [c1, setC1] = useState('');
  const [c2, setC2] = useState('');
  const [intialState1, setInitialState1] = useState(100);
  const [intialState2, setInitialState2] = useState(50);
  const [mu1, setMu1] = useState(0.05);
  const [mu2, setMu2] = useState(0.03);
  const [sigma1, setSigma1] = useState(0.2);
  const [sigma2, setSigma2] = useState(0.15);
  const [time, setTime] = useState(20);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [timelable, setTimeLable] = useState([]);

  function generateGBMPaths(S0_1, S0_2, mu_1, mu_2, sigma_1, sigma_2, T, dt) {
    const numSteps = Math.floor(T / dt);
    const t = new Array(numSteps);
    const W_1 = new Array(numSteps);
    const W_2 = new Array(numSteps);

    t[0] = 0;
    W_1[0] = 0;
    W_2[0] = 0;

    for (let i = 1; i < numSteps; i++) {
      t[i] = t[i - 1] + dt;
      W_1[i] = W_1[i - 1] + Math.sqrt(dt) * randomNormal();
      W_2[i] = W_2[i - 1] + Math.sqrt(dt) * randomNormal();
    }

    const drift_1 = new Array(numSteps);
    const diffusion_1 = new Array(numSteps);
    const S_1 = new Array(numSteps);

    const drift_2 = new Array(numSteps);
    const diffusion_2 = new Array(numSteps);
    const S_2 = new Array(numSteps);

    drift_1[0] = 0;
    diffusion_1[0] = 0;
    S_1[0] = S0_1;

    drift_2[0] = 0;
    diffusion_2[0] = 0;
    S_2[0] = S0_2;

    for (let i = 1; i < numSteps; i++) {
      drift_1[i] = (mu_1 - 0.5 * sigma_1 ** 2) * t[i];
      diffusion_1[i] = sigma_1 * W_1[i];
      S_1[i] = S0_1 * Math.exp(drift_1[i] + diffusion_1[i]);

      drift_2[i] = (mu_2 - 0.5 * sigma_2 ** 2) * t[i];
      diffusion_2[i] = sigma_2 * W_2[i];
      S_2[i] = S0_2 * Math.exp(drift_2[i] + diffusion_2[i]);
    }

    return { t, S_1, S_2 };
  }

  function randomNormal() {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  // Parameters
  const dt = 1; // Time step size in days

  // Generate sample paths of GBM for both currencies

  const runProgram = () => {
    let val = isActiveRef.current;
    setData2([]);
    setData1([]);
    setTimeLable([]);
    isActiveRef.current = !val;
    const { t, S_1, S_2 } = generateGBMPaths(
      intialState1,
      intialState2,
      mu1,
      mu2,
      sigma1,
      sigma2,
      time + 1,
      dt
    );

    let i = 0;
    console.log('ref', isActiveRef.current);
    if (isActiveRef.current) {
      // Use the ref here instead of the state variable
      const intervalId = setInterval(() => {
        if (!isActiveRef.current) {
          // Use the ref here instead of the state variable
          clearInterval(intervalId);
          return;
        }
        if (i < S_2.length - 1) {
          console.log('yo');
          setData2((prevData2) => [...prevData2, S_2[i].toFixed(2)]);
          setData1((prevData1) => [...prevData1, S_1[i].toFixed(2)]);
          setTimeLable((prev) => [...prev, i]);
          i++;
          // ... set data and increment i
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  };

  // Plot the sample paths using console.log

  return (
    <div className="main-container">
      <div className="box-container">
        <div className="control-panel-container">
          <div className="input-container">
            <label className="lable-container">
              Currency 1
              <input
                className="money-input"
                type="text"
                value={c1}
                placeholder="Curr1"
                onChange={(event) => {
                  setC1(event.target.value);
                }}
              />
            </label>
            <label className="lable-container">
              Currency 2
              <input
                className="money-input"
                type="text"
                value={c2}
                placeholder="Curr2"
                onChange={(event) => {
                  setC2(event.target.value);
                }}
              />
            </label>
            <label className="lable-container">
              Time
              <input
                className="money-input"
                type="number"
                max={9999}
                min={0}
                value={time}
                placeholder="Till"
                onChange={(event) => {
                  setTime(parseInt(event.target.value));
                }}
              />
            </label>
            <label className="lable-container">
              InitialS1
              <input
                className="money-input"
                type="number"
                max={9999}
                min={0}
                value={intialState1}
                placeholder="C1"
                onChange={(event) => {
                  setInitialState1(parseInt(event.target.value));
                }}
              />
            </label>
            <label className="lable-container">
              InitialS2
              <input
                className="money-input"
                type="number"
                max={9999}
                min={0}
                value={intialState2}
                placeholder="C2"
                onChange={(event) => {
                  setInitialState2(parseInt(event.target.value));
                }}
              />
            </label>
            <label className="lable-container">
              Mu 1
              <input
                className="money-input"
                type="number"
                max={9999}
                step={0.01}
                min={0}
                value={mu1}
                placeholder="Mu 1"
                onChange={(event) => {
                  setMu1(parseInt(event.target.value));
                }}
              />
            </label>
            <label className="lable-container">
              Mu 2
              <input
                className="money-input"
                type="number"
                max={9999}
                step={0.01}
                min={0}
                value={mu2}
                placeholder="Mu 2"
                onChange={(event) => {
                  setMu2(parseInt(event.target.value));
                }}
              />
            </label>
            <label className="lable-container">
              Sigma 1
              <input
                className="money-input"
                type="number"
                max={9999}
                min={0}
                step={0.01}
                value={sigma1}
                placeholder="Sigma 1"
                onChange={(event) => {
                  setSigma1(parseInt(event.target.value));
                }}
              />
            </label>
            <label className="lable-container">
              Sigma 2
              <input
                className="money-input"
                type="number"
                max={9999}
                min={0}
                step={0.01}
                value={sigma2}
                placeholder="Sigma 2"
                onChange={(event) => {
                  setSigma2(parseInt(event.target.value));
                }}
              />
            </label>
            <button
              className="simulate-button"
              onClick={() => {
                runProgram();
              }}
            >
              SIMULATE
            </button>
          </div>
        </div>
        <div>
          <Chart
            labels={timelable}
            title={'Currency Exchange'}
            data1={data1}
            data2={data2}
            c1={c1}
            c2={c2}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
