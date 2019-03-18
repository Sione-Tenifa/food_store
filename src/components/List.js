import React from "react";
import { Header, Button, Icon, } from "semantic-ui-react";

const List = ({ id, name, deleteList, updateList }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Header as="h2">{ name }</Header>
    </div>
    <Button
      name={name}
      icon
      color="red"
      size="tiny"
      onClick={() => deleteList(id) }
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default List;