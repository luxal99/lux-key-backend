import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Pagination = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    try {
      return JSON.parse(
        decodeURI(ctx.switchToHttp().getRequest().query.pagination)
      );
    } catch (e) {
      return null;
    }
  }
);
export const Sort = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    try {
      return JSON.parse(
        decodeURI(ctx.switchToHttp().getRequest().query.sort)
      );
    } catch (e) {
      return null;
    }
  }
);

