import { type Product, SAMPLE_PRODUCTS } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

// Backend integration: currently uses sample data since backend bindgen
// returns empty interface. Will call actor.getProduct(id) when backend is ready.
export function useProduct(id: string) {
  return useQuery<Product | undefined>({
    queryKey: ["product", id],
    queryFn: async () => {
      // TODO: replace with actor.getProduct(id) when backend methods are available
      return SAMPLE_PRODUCTS.find((p) => p.id === id);
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
