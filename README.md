# Geometric Brownian Motion Simulation for Currency Exchange in React
[Preview](https://codesandbox.io/p/github/GeniusPRO271/exchange-simulation/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clicogyk4000b3b6l7ni2x6o7%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clicogyk4000d3b6l208akpu6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clicogyk4000b3b6l7ni2x6o7%2522%253A%257B%2522id%2522%253A%2522clicogyk4000b3b6l7ni2x6o7%2522%252C%2522activeTabId%2522%253A%2522clicohee200l03b6lfx9guycz%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clicogyk4000a3b6l09i71v5i%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.gitignore%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clicohee200l03b6lfx9guycz%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clicogyk4000d3b6l208akpu6%2522%253A%257B%2522id%2522%253A%2522clicogyk4000d3b6l208akpu6%2522%252C%2522activeTabId%2522%253A%2522clicoh2k6006u3b6lankgjqzm%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clicoh2k6006u3b6lankgjqzm%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clicoh4i200cx3b6l756qq7p1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)
### Introduction:
The provided code showcases a currency exchange simulation using Geometric Brownian Motion (GBM) implemented in React. GBM is a stochastic process widely used in financial modeling to simulate the fluctuation of asset prices over time. This essay will focus on the implementation details of the GBM simulation specifically for currency exchange.
### Implementation Details:
The App component serves as the main entry point for the currency exchange simulation. It utilizes React's useState, useEffect, and useRef hooks to manage the state of various parameters and the simulation process. The Chart component is also imported for visualizing the simulated data.
### Geometric Brownian Motion Simulation:
The core of the simulation logic lies within the generateGBMPaths function and the randomNormal helper function.
The generateGBMPaths function takes multiple parameters such as initial states, drift rates, diffusion rates, and time duration to simulate the GBM paths for currency exchange. It calculates the GBM process by generating random samples from a normal distribution using the randomNormal function and then iteratively updating the asset prices based on the GBM equations.
The function initializes arrays for time, Brownian motion increments, drift, diffusion, and asset prices. It starts with an initial time and asset prices, and then iterates over the specified time duration, updating the values using the GBM equations. The drift and diffusion components are calculated based on the provided drift rates, diffusion rates, and Brownian motion increments.
The randomNormal function generates random numbers following a standard normal distribution. It utilizes the Box-Muller transform to generate two independent random variables.
### User Interface:
The user interface allows users to specify various parameters for the GBM simulation. These parameters include currency names, initial states, drift rates, diffusion rates, and the time duration of the simulation. Users can input their desired values for each parameter and initiate the simulation by clicking the "SIMULATE" button.
Upon clicking the button, the runProgram function is called, which executes the GBM simulation and updates the state variables data1, data2, and timelable for visualization. The simulation runs asynchronously, updating the data points at regular intervals using the setInterval function.
### Conclusion:
In conclusion, the provided code demonstrates a currency exchange simulation using Geometric Brownian Motion in React. By simulating the GBM paths for two currencies, the application provides insights into the potential fluctuations of currency exchange rates over a specified time duration. The use of GBM allows for realistic modeling of asset price movements, considering factors such as drift rates and diffusion rates. This project showcases the integration of React's state management, hooks, and a visualization component to deliver an interactive and informative currency exchange simulation experience.