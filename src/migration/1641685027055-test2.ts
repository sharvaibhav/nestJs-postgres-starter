import { MigrationInterface, QueryRunner } from 'typeorm';

export class test21641685027055 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE Tasks (
                  id int,
                  taskName varchar(255),
                  taskType varchar(255),
                  isActive boolean,
                  created date,
                  lastUpdated date
              );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
