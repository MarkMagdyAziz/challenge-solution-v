import * as React from "react";
import { Link } from "react-router-dom";

import { Table, Header, Image, Label } from "semantic-ui-react";

const UsersTable = (props) => {
  const { name, gender, email, picture, location } = props.user;

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={picture.medium} circular size="mini" />
            <Header.Content>
              {`${name.first} ${name.last}`}
              <Header.Subheader>{email}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{location.country}</Table.Cell>
        <Table.Cell>
          <Label style={{ backgroundColor: "rgb(210,250,229)" }} horizontal>
            Active
          </Label>
        </Table.Cell>
        <Table.Cell>{gender}</Table.Cell>
        <Table.Cell>
          <Link to="#" style={{ color: "blue" }}>
            Edit
          </Link>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

// const styles = {
//   tableHeader: {
//     color: "red",
//     backgroundColor: "red",
//   },
//   activeButton: {
//     backgroundColor: "rgba(210,250,229,255)",
//     borderRadius: 10,
//     borderWidth: 1,
//   },
// };
export default UsersTable;
