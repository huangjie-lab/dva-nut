import { connect } from "dva";
import React from "react";

export default connect((state) => {
  console.log("ExamplePage page", state);
  return state;
})(function ExamplePage() {
  return <div>ExamplePage</div>;
});
