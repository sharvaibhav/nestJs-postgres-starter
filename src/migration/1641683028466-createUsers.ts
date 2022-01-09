import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsers1641683028466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE User (
            id int,
            firstName varchar(255),
            lastName varchar(255),
            address varchar(255),
            city varchar(255),
            isActive boolean
        );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Shippers;`);
  }
}
