# Database Integration

## Concept

Nest integrates with ORMs like TypeORM, Prisma, and Sequelize. The `TypeOrmModule` is the most common choice: it provides repository pattern, migrations, and entity-based modeling. Nest's DI makes repositories injectable and testable.

## Why It Matters

Database access should be abstracted, transactional, and type-safe. Nest's integration provides connection pooling, migration support, and repository injection. Proper integration enables clean architecture and easier testing with mocks.

## Key Concepts

- `TypeOrmModule.forRoot()`: configure connection
- `TypeOrmModule.forFeature([Entity])`: register entities per module
- Repository pattern: inject `Repository<Entity>`
- Entities: `@Entity()`, `@Column()`, `@PrimaryGeneratedColumn()`
- Migrations: CLI or programmatic

## Code Example

```typescript
// app.module.ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // use migrations in prod
})

// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findAll() {
    return this.usersRepo.find()
  }
}
```

## Under the Hood

TypeOrmModule creates a connection pool and registers repositories. `forFeature` makes `Repository<User>` available in the module. Nest injects the repository when UsersService is created. Transactions use `queryRunner` or `@Transaction()` decorator.

## Common Mistakes

- Using `synchronize: true` in production (data loss risk)
- Not using transactions for multi-step operations
- N+1 queries: forgetting to use `relations` or `join`
- Exposing entities directly in API responses (use DTOs)

## Best Practices

- Use migrations; never synchronize in production
- Wrap multi-step writes in transactions
- Use DTOs for input/output; map entities to DTOs
- Use connection pooling; configure for your load

## Summary

TypeOrmModule integrates TypeORM with Nest. Use forFeature for per-module entities. Inject repositories; use transactions for consistency. Migrations over synchronize.
