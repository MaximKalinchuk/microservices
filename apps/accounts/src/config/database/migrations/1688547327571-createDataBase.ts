import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataBase1688547327571 implements MigrationInterface {
    name = 'CreateDataBase1688547327571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "managers" ("id" uuid NOT NULL, "created_At" TIMESTAMP DEFAULT now(), "updated_At" TIMESTAMP DEFAULT now(), "deleted_At" TIMESTAMP, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "fullName" character varying NOT NULL, CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "managers"`);
    }

}
