import dva from "dva";
import "./index.css";
import "antd/dist/antd.css";

const createHistory = require("history").createBrowserHistory;

// 1. Initialize
export const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require("./models/example").default);
app.model(require("./models/user").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
