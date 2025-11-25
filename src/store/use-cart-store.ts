import { Product } from "@/types/product.types";
import { create } from "zustand";

interface ProductsStore {
  cart: Array<Product & Record<"quantity", number>>;
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  clearCart: () => void;
}

export const useCartStore = create<ProductsStore>()((set, get) => ({
  cart: [],

  getTotalItems: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },

  addItem: (item) => {
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (!existingItem) {
        return {
          cart: [{ ...item, quantity: 1 }, ...state.cart],
        };
      }

      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      };
    });
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      cart: state.cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    }));
  },

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));
