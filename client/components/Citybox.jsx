import React, { useState, useEffect } from "react";
import axios from "axios";
import RadialChart from "./RadialChart.jsx";
import "../styles/style.css";

export default function Citybox(id) {
  const [items, setItems] = useState("");
  const [cities, setCities] = useState("");
  const [data, setData] = useState("");
  const [overallScoresData, setOverallScoresData] = useState("");


  useEffect(() => {
    console.log("inside use effect");
    axios
      .get("https://api.teleport.org/api/urban_areas/")
      .then(function (response) {
        const urban = response.data._links["ua:item"];
        const cityNames = urban.map((el) => el.name);
        console.log(response);
        setCities(cityNames);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function autoFill(e) {
    console.log('ID HERE!', id)
    const input = document.getElementById(`myInput${id.id}`);
    console.log(input);
    input.value = e.target.innerText;
    setItems("");
  }

  function handleChange(e) {
    e.preventDefault();
    const currWord = e.target.value;
    let arr = [];
    for (let i = 0; i < cities.length; i++) {
      const slicedCity = cities[i].slice(0, currWord.length);
      if (currWord.toLowerCase() === slicedCity.toLowerCase()) {
        arr.push(
        <li className="autoComplete-item" key={"key" + i} onClick={autoFill}>
            {cities[i]}
          </li>
        );
        setItems(arr);
      }
      if (currWord.length === 0) {
        setItems("");
      }
    }
  }

  function displayScores(scoreData, city) {
    console.log("in display scores", scoreData);
    const scoresArr = [];
    console.log("categories", scoreData.categories);
    for (let i = 0; i < scoreData.categories.length; i++) {
      scoresArr.push(
        <div className="scoreContainer" key={"scoreContainerKey" + i}>
          <p className="scoreLabel" key={"Labelkey" + i}>
            {scoreData.categories[i].name}
          </p>
          <p className="scores" key={"Scorekey" + i}>
            {Math.floor(scoreData.categories[i].score_out_of_10)}
          </p>
        </div>
      );
    }
    const chartData = {city: city, overallScore: Math.floor(scoreData.teleport_city_score)};
    console.log("ARR", scoresArr);
    setData(scoresArr);
    setOverallScoresData(<RadialChart scores={chartData} />);
    console.log("DATA", data);
    return;
  }

  function submitButtonClick(e) {
    const input = document.getElementById(`myInput${id.id}`);
    const newCity = input.value.replaceAll(" ", "-").toLowerCase();
    axios({
      method: "post",
      url: "/getDetails",
      data: {
        city: newCity,
      },
    })
      .then((res) => {
        console.log("RES", res);
        // setData(res.data);
        displayScores(res.data, input.value);
        input.value = "";
      })
      .catch(function (error) {
        console.log("Error here:", error);
      });
  }

  return (
    <div className="container">
      <div id="cityBoxSearch">
        <div className="autoComplete">
          <h3>Enter City: </h3>
          <input
            onChange={(e) => handleChange(e)}
            id={`myInput${id.id}`}
            type="text"
            name="myCity"
            placeholder="city"
          ></input>
        </div>
        <input type="submit" onClick={(e) => submitButtonClick(e)}></input>
        <div className="autoComplete-list">{items}</div>
      </div>
      <div id="dataState">
        {overallScoresData}
        {data}
      </div>
    </div>
  );
}
