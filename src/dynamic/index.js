import dynamic from "dva/dynamic";
import { app } from "..";

// 动态加载
export const ExamplePageDynamic = dynamic({
  app,
  models: () => [import("../models/example")],
  component: () => import("../routes/ExamplePage"),
});
