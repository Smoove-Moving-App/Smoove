import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import StarRating from "./StarRating.jsx"


export default function overallScoreChart(data) {
  const [overallScore, setOverallScores] = useState("");
  const [options, setOptions] = useState({
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
           hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '20px'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '25px',
              show: true,
            }
          }
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Overall Score'],
    }
  });

  const [series, setSeries] = useState([1]);
  
  useEffect(() => {
    setSeries([data.scores.overallScore]);
    console.log('CITY', data.scores);
  }, [data])


  return (
    <div id="card">
      <div className="headingWStar">
        <h3 className="cityHeader">{data.scores.city}</h3> 
        <StarRating data={data} />
      </div>
      <div id="chart">
        <Chart
          options={options.options}
          series={series}
          type="radialBar"
          height={250}
        />
      </div>
    </div>
  );
}
