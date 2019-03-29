import { ready } from "./bootstrap/ready";
import Application from "./core/Application";

// Silence is golden, but this is not bad either
new Application().ready(ready).start();
