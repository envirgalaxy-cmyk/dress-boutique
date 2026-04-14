import { type Product, SAMPLE_PRODUCTS } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

// Backend integration: currently uses sample data since backend bindgen
// returns empty interface. Will call actor.getProducts() when backend is ready.
export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      // TODO: replace with actor.getProducts() when backend methods are available
      return SAMPLE_PRODUCTS;
    },
    staleTime: 5 * 60 * 1000,
  });
}
