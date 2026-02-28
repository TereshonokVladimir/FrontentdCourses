# Practice: Unit Tests

## Tasks

### Task 1
Write unit tests for `UsersService.findAll()` and `UsersService.create()`. Mock the repository with `getRepositoryToken(User)` and `useFactory` returning `{ find: jest.fn(), save: jest.fn() }`. Assert that `findAll` returns the mocked data and `create` calls `save` with the DTO. Use `Test.createTestingModule()` and `compile()`.

### Task 2
Test `UsersController` with mocked `UsersService`. Use `controller.get(service)` after compiling the module. Test that `GET /` calls `service.findAll()` and returns the result. Test that `POST /` calls `service.create(dto)` with the body and returns 201. Mock the service methods with `jest.spyOn()`.

### Task 3
Test `AuthGuard` in isolation. Create a mock `ExecutionContext` with `switchToHttp().getRequest()` returning `{ headers: { authorization: 'Bearer valid-token' } }`. Mock `JwtService.verifyAsync` to return a payload. Assert `canActivate` returns `true` and sets `request.user`. Test the failure case: no token throws `UnauthorizedException`.

### Task 4
Test a pipe: `ParseIdsPipe` that parses `?ids=1,2,3` to `[1, 2, 3]`. Create mock `ArgumentsMetadata` and `ExecutionContext`. Call `pipe.transform('1,2,3', metadata)` and assert `[1, 2, 3]`. Test invalid input (`'1,a,3'`) throws `BadRequestException`. Use `jest.fn()` for metadata if needed.

### Task 5
Test an interceptor that transforms the response. Mock `CallHandler` with `handle: () => of({ id: 1 })`. Call `interceptor.intercept(context, next)` and assert the result is an Observable that emits the transformed value (e.g., `{ data: { id: 1 } }`). Use `firstValueFrom` or `lastValueFrom` to convert Observable to Promise. Test error handling: when `next.handle()` throws, the interceptor should propagate or handle the error. Achieve 80%+ coverage for the service and controller.
