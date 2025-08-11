import { envs } from "./config/envs.config";
import { ServerApp } from "./presentation/server";

(async() => {
  main();
})();


function main() {
  ServerApp.start(process.env.PORT || 3000);
};