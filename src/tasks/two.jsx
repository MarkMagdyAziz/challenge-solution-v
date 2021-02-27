import * as React from "react";
import axios from "axios";
import { BackToHome } from "../App";
import UsersTable from "./UsersTable";
import { Dimmer, Loader, Table } from "semantic-ui-react";

/*
  hint: the API takes page and results as query string
  eg: `?page=3&results=10`
*/

const ChallengeTwo = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  //________________________________________________________
  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const result = await axios("https://randomuser.me/api/?results=5");
      const item = result.data.results;
      setData([...data, ...item]);
      setLoading(false);
    } catch (error) {
      console.warn(" error inside task two Feth data!", error);
      setIsError(true);
    }
  };

  return (
    <div style={styles.container}>
      {isError && <div>Something went wrong ...</div>}
      {loading === true || !data ? (
        <Dimmer active>
          <Loader inverted size="big" />
        </Dimmer>
      ) : (
        <div>
          <BackToHome />
          <h1 className="title is-1 has-text-white">Challenge 2</h1>
          <h2 className="subtitle has-text-grey-lighter">
            Fetch 5 users from the api
            <code>https://randomuser.me/api/?seed=dexi-interview</code> and
            display them in a table.
          </h2>
          <h2 className="subtitle has-text-grey-lighter">
            A <code>table-example.png</code> has been provided for guidance on
            styling.
          </h2>
          <h2 className="subtitle has-text-grey-lighter">
            Pay close attention to empty and loading states
          </h2>
          <h2 className="subtitle has-text-grey-lighter">
            The table should also have a <code>Load More</code> button that
            fetches the next page of the API and appends the results to the
            existing users.
          </h2>
          <div>
            <div>
              <Table structured striped stackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>NAME</Table.HeaderCell>
                    <Table.HeaderCell>COUNTRY</Table.HeaderCell>
                    <Table.HeaderCell>STATUS</Table.HeaderCell>
                    <Table.HeaderCell>GENDER</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {data.map((user) => {
                  return <UsersTable key={user.login.uuid} user={user} />;
                })}
              </Table>
            </div>
            <div style={styles.container}>
              <button style={styles.button} onClick={() => fetchData()}>
                Load More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    background: "#EC4899",
    padding: "12px 32px 12px 32px",
    margin: "5px",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid white",
    lineHeight: "24px",
  },
};
export default ChallengeTwo;
