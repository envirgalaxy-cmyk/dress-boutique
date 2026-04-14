/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols

// Hand-maintained TanStack Router route tree.
// Uses createRoute with getParentRoute to avoid needing codegen.

import { Route as RootRoute } from "./routes/__root";
import { Route as AboutRoute } from "./routes/about";
import { Route as ContactRoute } from "./routes/contact";
import { Route as IndexRoute } from "./routes/index";
import { Route as ProductsRoute } from "./routes/products";
import { Route as ProductsProductIdRoute } from "./routes/products.$productId";

const routeTree = RootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProductsRoute.addChildren([ProductsProductIdRoute]),
]);

export { routeTree };
