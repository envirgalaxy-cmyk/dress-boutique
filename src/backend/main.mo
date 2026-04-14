import Types "types/products";
import ProductsApi "mixins/products-api";
import List "mo:core/List";

actor {
  let products : List.List<Types.Product> = List.empty();

  include ProductsApi(products);
};
