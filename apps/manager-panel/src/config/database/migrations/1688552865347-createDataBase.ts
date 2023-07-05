import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataBase1688552865347 implements MigrationInterface {
    name = 'CreateDataBase1688552865347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "groups" ("id" uuid NOT NULL, "created_At" TIMESTAMP DEFAULT now(), "updated_At" TIMESTAMP DEFAULT now(), "deleted_At" TIMESTAMP, "groupName" character varying NOT NULL, "managerFullName" character varying NOT NULL, "creatorId" character varying NOT NULL, CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "managers" ("id" uuid NOT NULL, "created_At" TIMESTAMP DEFAULT now(), "updated_At" TIMESTAMP DEFAULT now(), "deleted_At" TIMESTAMP, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "fullName" character varying NOT NULL, CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "managers"`);
        await queryRunner.query(`DROP TABLE "groups"`);
    }

}
