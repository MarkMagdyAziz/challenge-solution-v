import { BackToHome } from "../App";
import Chart from "./Chart";
import * as React from "react";
import axios from "axios";
import { Dimmer, Loader } from "semantic-ui-react";

/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas 
  than the ones required below.
*/
const ChallengeThree = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [seeChart, setSeeChart] = React.useState(false);

  //________________________________________________________

  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const result = await axios("https://randomuser.me/api/?results=100");
      const item = result.data.results;
      setData([...data, ...item]);
      setLoading(false);
    } catch (error) {
      console.warn(" error inside task two Feth data!", error);
      setIsError(true);
    }
  };

  ///________________________________________________________________
  const chart = () => {
    setSeeChart(true);
  };
  //_________________________________________________________________
  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {loading === true || !data ? (
        <Dimmer active>
          <Loader inverted size="big" />
        </Dimmer>
      ) : (
        <div>
          <BackToHome />

          <h1 className="title is-1 has-text-white">Challenge 3</h1>
          <h2 className="subtitle has-text-grey-lighter">
            Fetch 100 users from the same api as before, and visualize their
            distribution by <code>age</code>, <code>gender</code>,
            <code>country</code>, and <code>registration date</code>.
          </h2>
          <div>
            <button onClick={() => chart()}> see charts</button>
            {seeChart === true ? (
              <div>
                {data.map((user) => {
                  return <Chart key={user.login.uuid} user={user} />;
                })}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default ChallengeThree;
