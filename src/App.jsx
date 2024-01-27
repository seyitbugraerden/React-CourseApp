import React, { useState, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Course from "./components/Course";
import Classes from "./components/Classes";

function App() {
  const [isTurned, setIsTurned] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>{loading ? <ProgressSpinner /> : isTurned ? <Classes /> : <Course />}</>
  );
}

export default App;
