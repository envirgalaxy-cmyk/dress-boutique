import Types "../types/products";
import ProductLib "../lib/products";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (products : List.List<Types.Product>) {
  public query func getProducts() : async [Types.Product] {
    Runtime.trap("not implemented");
  };

  public query func getProduct(id : Nat) : async ?Types.Product {
    Runtime.trap("not implemented");
  };
};
