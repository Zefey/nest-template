<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 代码生成

nest 提供的代码生成 cli 能减少写模板代码的工作

```
# 最后一个参数 modules 表示模块所在目录
npx nest g -h # 帮助
npx nest g module user modules       # 生成 User 模块
npx nest g controller user modules   # 生成 User 控制器
npx nest g service user modules      # 生成 User Service
```

### 控制器与服务

controller 负责处理请求和响应，不会直接和数据层接触，而是调用一个或多个 service 去完成想要实现的业务功能。service 层与数据层进行交互，向上提供方法，service 的方法尽可能小，只完成一个功能。

**参数校验**
使用基于类的参数校验方式，并通过管道装饰器完成验证

**获取 Jwt Payload**
被 `@UseGuards(AuthGuard())` 装饰的控制器，代表需要 Jwt 校验，通过校验后，可以用 @Jwt() 注解拿到 Jwt 的 Payload

```ts
class LoginDto {
  @IsString()
  phone: string;
  @IsString()
  password: string;
}
@Controller()
export class AppController {
  ...
  @UseGuards(AuthGuard())
  @Post()
  async getHello(@Body() body: IndexBodyDto, @Jwt() jwt: JwtPayload): Promise<any> {
    ...
    return jwt
  }
  ...
}
```

### 错误/异常 (待定)

全局范围添加了异常过滤器（src/common/allException.filter.ts），会拦截所有异常，格式化响应体。
对于业务逻辑类异常，封装了 ErrorException 异常类，继承于框架自带的 HttpException。ErrorException 构造方法接受固定格式的错误码对象，错误码对象需要在 src/common/error.exception.ts 文件中集中定义。使用示例如下：

```js
// 业务逻辑中抛出异常
throw new ErrorException(500, '登录失败');
```

### 接口协议

```js
{
  code: 0,
  msg: "成功",
  data: {...},
  t: 1594727565012,
  traceID: '45c076e9-faf9-4f05-95f2-0e21eca615a8'
}
```

### 日志

#### 配置

.env 中的 LOG_OUTPUT 可以配置日志输出方式，默认 console，支持 file

#### 日志 ID

基于 winston 的日志功能，并用 `nest-winston` 重新实现了 NestJs 自带的日志 Service，在不方便进行依赖注入的地方，也可以直接引用 `src/common/logger` 中的方法。
了便于日志查找，同一个请求产生的多条日志都会生成相同的日志 ID（tractID）。

#### 权限控制 (RABC)

RBAC（基于角色的权限控制）是企业软件常用的权限管理技术

**API 鉴权使用方式**

```ts
@Post()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.Admin)
@ApiBearerAuth()
create(@Body() userDto: UserDto): Promise<User> {
  return this.userService.create(userDto);
}
```

### 路径别名

见 `tsconfig.json`
