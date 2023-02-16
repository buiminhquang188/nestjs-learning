import { DataSource } from 'typeorm';

// Run migrations
// npx typeorm-ts-node-commonjs migration:run -d ./ormconfig.ts

// Revert migrations
// npx typeorm-ts-node-commonjs migration:revert -d ./ormconfig.ts

// Sync Migrations from Entity
// npx typeorm-ts-node-esm migration:generate ./src/migrations/SchemaSync -d ./ormconfig.ts

export const connection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/dist/migrations/*.js'],
});
