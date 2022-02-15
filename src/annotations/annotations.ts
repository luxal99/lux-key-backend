import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Pagination = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    try {
      return JSON.parse(decodeURI(ctx.switchToHttp().getRequest().query.q))
        .pagination;
    } catch (e) {
      return null;
    }
  },
);
export const Sort = createParamDecorator((data, ctx: ExecutionContext) => {
  try {
    return JSON.parse(decodeURI(ctx.switchToHttp().getRequest().query.q)).sort;
  } catch (e) {
    return null;
  }
});

export const DateQuery = createParamDecorator((data, ctx: ExecutionContext) => {
  try {
    return JSON.parse(decodeURI(ctx.switchToHttp().getRequest().query.q))
      .dateQuery;
  } catch (e) {
    return null;
  }
});

export const ReportQuery = createParamDecorator((data, ctx: ExecutionContext) => {
  try {
    return JSON.parse(decodeURI(ctx.switchToHttp().getRequest().query.q));
  } catch (e) {
    return null;
  }
});
