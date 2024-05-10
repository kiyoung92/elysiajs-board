import { Elysia } from "elysia";
import { userController } from "./controllers/user.controller";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get('/hello', () => "hello world!")
  .get('/user', () => userController())
  .route('USER', '/user', () => 'user!')
  .listen(3000);

app.handle(new Request("http://localhost:3000/")).then(res => res.text()).then(console.log)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
