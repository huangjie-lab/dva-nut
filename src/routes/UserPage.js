import { connect } from "dva";
import { useEffect } from "react";
import { NameSpace } from "../constant";
import { Button, Input } from "antd";

export default connect(
  (state) => {
    console.log("UserPage state", state); //sy-log
    return { user: state.user };
  },
  {
    fetchUser: () => ({ type: `${NameSpace.user}/fetchUser` }),
    add1: () => ({ type: `${NameSpace.user}/add` }),
  }
)(function UserPage(props) {
  const { user } = props;

  const refresh = () => {
    props.fetchUser();
  };

  const add1 = () => {
    props.add1();
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      <div style={{ margin: 100 }}>
        <h3>UserPage</h3>
        <p>{user.name.first}</p>
        <Input style={{ width: 400 }} />
        <Button type="primary" onClick={refresh}>
          refresh
        </Button>
        <Button type="link" onClick={add1}>
          add
        </Button>
      </div>
    </>
  );
});
