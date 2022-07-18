import React, { useEffect, useState } from "react";
import { getCurrentDate } from "../services/dateService";

function Home() {
  const [date, setDate] = useState('')

  const getDateNow = async () => {
    let response = await getCurrentDate()
    setDate(response)
  }
  useEffect(() => {
    setInterval(getDateNow, 500)
  })

  return (
    <div>
      <p>{date}</p>
    </div>
  );
}

export default Home;
