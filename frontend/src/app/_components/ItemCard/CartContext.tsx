import React, { createContext, useContext, useState, useEffect } from "react";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
  quantity?: number;
};

type CartContextType = {
  cartItems: Food[];
  totalQuantity: number;
  updateCart: (items: Food[]) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalQuantity: 0,
  updateCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Local storage өгөгдөл унших
  const loadCartData = () => {
    if (typeof window !== "undefined") {
      try {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
          const parsedCart = JSON.parse(cartData);
          console.log("Loaded cart data:", parsedCart);

          setCartItems(parsedCart);
          // Нийт тоо хэмжээг тооцох
          const total = parsedCart.reduce(
            (sum: number, item: Food) => sum + (item.quantity || 0),
            0
          );
          setTotalQuantity(total);
        }
      } catch (error) {
        console.error("Error loading cart data:", error);
      }
    }
  };
  console.log("cartitemdata", cartItems);

  // Component mount хийгдэх үед local storage-аас өгөгдөл уншиж авах
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure that the code only runs in the browser environment
      loadCartData();
    }
  }, []);

  const updateCart = (newItems: Food[]) => {
    if (typeof window !== "undefined") {
      try {
        // Log the data to confirm what is being stored
        console.log("Updating cart:", newItems);

        localStorage.setItem("cart", JSON.stringify(newItems));
        setCartItems(newItems);

        const newTotal = newItems.reduce(
          (sum, item) => sum + (item.quantity || 0),
          0
        );
        setTotalQuantity(newTotal);
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  };

  // Storage event listener нэмэх
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleStorageChange = () => {
        loadCartData();
      };

      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, totalQuantity, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
