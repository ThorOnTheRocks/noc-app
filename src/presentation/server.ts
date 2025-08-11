import { CheckService } from "../domain/use-cases/checks/checks-service";
import { FileSystemDatasource } from "../insfrastructure/datasources/file-system.datasource";
import { LogRepostioryImpl } from "../insfrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepostioryImpl(
  new FileSystemDatasource(),
)

export class ServerApp {
  public static start(port: string | number) {
    console.log(`Server is running on port ${port}`);

    CronService.createJob("*/3 * * * * *", () => {
      const url = 'https://www.gianlucagalota.dev';

      new CheckService(
        fileSystemLogRepository,
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      )
      .execute(url);

    });
  }
}