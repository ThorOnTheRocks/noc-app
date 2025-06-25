import { CheckService } from "../domain/use-cases/checks/checks-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {
  public static start(port: string | number) {
    console.log(`Server is running on port ${port}`);

    CronService.createJob("*/3 * * * * *", () => {
      const date = new Date();
      console.log("Cron job executed every 3 seconds", date);

      new CheckService(
        () => console.log("The service is working"), 
        (error) => console.log(error)
      )
      .execute(process.env.URL ?? "");

    });
  }
}