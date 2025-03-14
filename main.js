import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom";

const App = () => {
  const [microApps, setMicroApps] = useState([]);

  // Micro frontend configuration (loaded dynamically from Import Map)
  const microAppConfig = [
    { name: "Micro App X", modulePath: "microAppX" },
    { name: "Micro App Y", modulePath: "microAppY" }
  ];

  useEffect(() => {
    // Dynamically import micro apps using the Import Map
    const loadApps = microAppConfig.map((app) =>
      import(app.modulePath).then((module) => ({
        name: app.name,
        Component: module.default,
      }))
    );

    Promise.all(loadApps).then(setMicroApps);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Dynamic Micro Frontends with Import Maps</h1>
      {microApps.map(({ name, Component }) => (
        <div key={name} style={{ margin: "20px 0" }}>
          <h2>{name}</h2>
          <Component />
        </div>
      ))}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
