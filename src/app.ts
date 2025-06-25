import { ServerApp } from "./presentation/server";

function main() {
  ServerApp.start(process.env.PORT || 3000);
};

main();