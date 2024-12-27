"use client";

import { CartProvider } from "./_components/ItemCard/CartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
