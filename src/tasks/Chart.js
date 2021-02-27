import * as React from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  const [chartData, setChartData] = React.useState({});

  //_______________________________________________________

  // const [userGender, setUserGender] = React.useState([]);
  // const [userAge, setUserAge] = React.useState([]);
  // const [userCountry, setUserCountry] = React.useState([]);
  //_______________________________________________________
  const { name, gender, email, picture, location } = props.user;
  const len = props.user.length;
  console.log("Test from ", len);
  const chart = () => {
    // let dataUserGender =  ;
    // let dataUserAge = ;
    // let dataUserCountry = ;
    // age , gender, country,
    // setChartData({
    //   labels: "empAge",
    //   datasets: [
    //     {
    //       label: "level of thiccness",
    //       data: "empSal",
    //       backgroundColor: ["rgba(75, 192, 192, 0.6)"],
    //       borderWidth: 4,
    //     },
    //   ],
    // });
  };
  return (
    <div>
      <h1>chart component</h1>
    </div>
  );
};

export default Chart;
