module {
  public type Product = {
    id : Nat;
    name : Text;
    description : Text;
    originalPrice : Float;
    discountPercent : Nat;
    imageUrl : Text;
    category : Text;
    inStock : Bool;
  };
};
