import Types "../types/products";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type Product = Types.Product;

  public func seedProducts(_products : List.List<Product>) {
    Runtime.trap("not implemented");
  };

  public func getAllProducts(_products : List.List<Product>) : [Product] {
    Runtime.trap("not implemented");
  };

  public func getProductById(_products : List.List<Product>, _id : Nat) : ?Product {
    Runtime.trap("not implemented");
  };
};
