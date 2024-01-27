import React, { useState, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Course from "./components/Course";
import Classes from "./components/Classes";

function App() {
  const [isTurned, setIsTurned] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDataSelected = (data) => {
    setSelectedData(data);
    console.log(data);
  };
  return (
    <>
      {loading ? (
        <ProgressSpinner />
      ) : isTurned ? (
        <Classes onDataSelected={handleDataSelected} />
      ) : (
        <Course />
      )}
    </>
  );
}

export default App;
