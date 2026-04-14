import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";
import { Link } from "@tanstack/react-router";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = Math.round(
    product.originalPrice * (1 - product.discountPercent / 100),
  );

  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id }}
      className="group block"
      data-ocid={`product-card-${product.id}`}
    >
      <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 border border-border/60">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
          {/* Discount badge */}
          {product.discountPercent > 0 && (
            <div className="absolute top-3 left-3">
              <span className="badge-discount">
                {product.discountPercent}% OFF
              </span>
            </div>
          )}
          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <Badge variant="secondary" className="font-body">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-display font-semibold text-sm text-foreground leading-tight mb-2 line-clamp-2 min-w-0">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-display font-bold text-base text-foreground">
              ₹{discountedPrice.toLocaleString("en-IN")}
            </span>
            {product.discountPercent > 0 && (
              <span className="text-xs text-muted-foreground line-through font-body">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
