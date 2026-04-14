import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProducts";
import { SAMPLE_PRODUCTS } from "@/types/product";
import { createRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Route as RootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/products",
  component: ProductsPage,
});

const CATEGORIES = [
  "All",
  "Midi",
  "Maxi",
  "Casual",
  "Festive",
  "Evening",
  "Wrap",
  "Slip",
  "Tiered",
] as const;

const SKELETON_IDS = [
  "sk1",
  "sk2",
  "sk3",
  "sk4",
  "sk5",
  "sk6",
  "sk7",
  "sk8",
] as const;

function ProductsPage() {
  const { data: products, isLoading } = useProducts();
  const displayProducts = products ?? SAMPLE_PRODUCTS;
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = displayProducts.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.012 355) 0%, oklch(0.96 0.018 230) 50%, oklch(0.97 0.010 60) 100%)",
      }}
    >
      {/* Page header */}
      <div className="bg-card/80 backdrop-blur border-b border-border py-10 md:py-14">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground font-body uppercase tracking-[0.2em] mb-2">
              Handpicked for you
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-3">
              Our Collection
            </h1>
            <p className="text-muted-foreground font-body text-sm md:text-base max-w-md mx-auto">
              Dreamy dresses for every occasion — from brunch to ballroom, find
              your perfect look.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-card/90 backdrop-blur-sm border-b border-border/60 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search dresses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 rounded-full font-body"
                data-ocid="products-search"
              />
            </div>
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="shrink-0"
                  data-ocid={`filter-${cat.toLowerCase()}`}
                >
                  <Badge
                    variant={activeCategory === cat ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-smooth px-3 py-1 font-body text-xs"
                  >
                    {cat}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="container mx-auto px-4 py-10">
        {/* Count */}
        {!isLoading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-muted-foreground font-body mb-6"
          >
            Showing {filtered.length} style{filtered.length !== 1 ? "s" : ""}
          </motion.p>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {SKELETON_IDS.map((sk) => (
              <div
                key={sk}
                className="bg-card rounded-lg overflow-hidden border border-border/60 space-y-0"
              >
                <Skeleton className="aspect-[3/4] rounded-none w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            data-ocid="products-empty"
          >
            <span className="text-6xl mb-4">👗</span>
            <h2 className="font-display font-semibold text-xl text-foreground mb-2">
              No dresses found
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              Try adjusting your search or category filter.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="rounded-full font-body"
              data-ocid="products-clear-filters"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
            data-ocid="products-grid"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: Math.min(i, 7) * 0.06 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom gradient accent */}
      <div className="h-1 gradient-soft opacity-40" />
    </div>
  );
}
