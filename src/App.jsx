import React, { useState } from "react";
import Course from "./components/Course";

function App() {
  const [isTurned, setIsTurned] = useState(true);
  return <>{isTurned ? "" : <Course />}</>;
}

export default App;
