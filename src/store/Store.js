import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set) => ({
    cart: [],

    addCar: (car) =>
      set((state) => {
        const existingCar = state.cart.find((c) => c.id === car.id);
        if (existingCar) {
          return {
            cart: state.cart.map((c) =>
              c.id === car.id ? { ...c, quantity: c.quantity + 1 } : c
            ),
          };
        }
        return { cart: [...state.cart, { ...car, quantity: 1 }] };
      }),

    removeCar: (id) =>
      set((state) => {
        const existingCar = state.cart.find((c) => c.id === id);
        if (existingCar.quantity === 1) {
          return {
            cart: state.cart.filter((c) => c.id !== id),
          };
        }
        return {
          cart: state.cart.map((c) =>
            c.id === id ? { ...c, quantity: c.quantity - 1 } : c
          ),
        };
      }),

    deleteCar: (id) =>
      set((state) => {
        return {
          cart: state.cart.filter((c) => c.id !== id),
        };
      }),

    clearCart: () => set({ cart: [] }),

    getTotalCars: () => {
      return (state) =>
        state.cart.reduce((total, car) => total + car.quantity, 0);
    },

    isCartOpen: false,
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  }))
);

export default useCartStore;
