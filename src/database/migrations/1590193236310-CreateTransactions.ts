import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";

export default class CreateTransactions1590193236310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(
        new Table({
          name: 'transactions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'title',
              type: 'varchar'
            },
            {
              name: 'type',
              type: 'varchar'
            },
            {
              name: 'value',
              type: 'decimal',
              precision: 10,
              scale: 2
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transactions');
    }

}
