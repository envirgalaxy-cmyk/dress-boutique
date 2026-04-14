import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProduct } from "@/hooks/useProduct";
import { SAMPLE_PRODUCTS } from "@/types/product";
import { createRoute, notFound } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle, Tag, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { Route as ProductsRoute } from "./products";

export const Route = createRoute({
  getParentRoute: () => ProductsRoute,
  path: "$productId",
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const { data: product, isLoading } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="aspect-[3/4] rounded-2xl w-full" />
          <div className="space-y-4 pt-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    throw notFound();
  }

  const discountedPrice = Math.round(
    product.originalPrice * (1 - product.discountPercent / 100),
  );
  const savings = product.originalPrice - discountedPrice;

  const relatedProducts = SAMPLE_PRODUCTS.filter(
    (p) => p.id !== product.id,
  ).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body hover:text-accent transition-smooth mb-8"
          data-ocid="product-back-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discountPercent > 0 && (
                <div className="absolute top-4 left-4">
                  <span className="badge-discount text-sm px-4 py-1.5">
                    {product.discountPercent}% OFF
                  </span>
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-background/70 flex items-center justify-center rounded-2xl">
                  <Badge
                    variant="secondary"
                    className="font-body text-base px-6 py-2"
                  >
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 lg:pt-4"
          >
            <div>
              <Badge
                variant="secondary"
                className="font-body text-xs tracking-wider uppercase mb-3"
              >
                <Tag className="w-3 h-3 mr-1" />
                {product.category}
              </Badge>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-2">
                {product.name}
              </h1>
            </div>

            {/* Pricing */}
            <div className="bg-muted/40 rounded-xl p-4 border border-border/60">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-display font-bold text-4xl text-foreground">
                  ₹{discountedPrice.toLocaleString("en-IN")}
                </span>
                {product.discountPercent > 0 && (
                  <span className="text-lg text-muted-foreground line-through font-body">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                {product.discountPercent > 0 && (
                  <span className="badge-discount text-xs">
                    {product.discountPercent}% OFF
                  </span>
                )}
              </div>
              {savings > 0 && (
                <p className="text-sm text-accent font-body font-medium mt-1">
                  You save ₹{savings.toLocaleString("en-IN")} (
                  {product.discountPercent}% off)
                </p>
              )}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <CheckCircle
                    className="w-4 h-4"
                    style={{ color: "oklch(0.65 0.18 145)" }}
                  />
                  <span className="text-sm font-body text-foreground">
                    In Stock — Ready to ship
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-body text-muted-foreground">
                    Out of Stock
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                About this dress
              </h2>
              <p className="font-body text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {product.inStock ? (
                <WhatsAppButton
                  product={product}
                  className="flex-1 justify-center"
                />
              ) : (
                <Button
                  disabled
                  variant="secondary"
                  className="flex-1 font-body rounded-full"
                >
                  Currently Unavailable
                </Button>
              )}
              <Link to="/products" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full rounded-full font-body"
                >
                  Browse More
                </Button>
              </Link>
            </div>

            {/* Care note */}
            <p className="text-xs text-muted-foreground font-body border-t border-border pt-4">
              💬 Click &quot;Enquire on WhatsApp&quot; to confirm your size,
              colour, and delivery details directly with us.
            </p>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
          data-ocid="related-products"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">
                You might also like
              </p>
              <h2 className="font-display font-bold text-2xl text-foreground">
                Related Styles
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm font-body text-accent hover:underline transition-smooth hidden sm:block"
              data-ocid="related-view-all"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((related, i) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <ProductCard product={related} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/products">
              <Button
                variant="outline"
                className="rounded-full font-body"
                data-ocid="related-view-all-mobile"
              >
                View all dresses
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
