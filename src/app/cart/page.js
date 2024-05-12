'use client'
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartAsideModal = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Array de elementos falsos para simular productos en el carrito
  const fakeCartItems = [
    { id: 1, name: "Producto 1", quantity: 2 },
    { id: 2, name: "Producto 2", quantity: 1 },
    { id: 3, name: "Producto 3", quantity: 3 }
  ];

  const handleOpenCart = () => {
    setCartItems(fakeCartItems)
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    // Add product to cart logic here
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    // Remove product from cart logic here
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <>
      <button className="bg-transparent hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full p-2" onClick={handleOpenCart}>
        <MdOutlineShoppingCart className="text-2xl" />
      </button>

      {showCart && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-amber-50 z-50 overflow-auto transform transition-all ease-in-out duration-300">
          <div className="absolute top-0 right-0 p-4">
            <button className="bg-transparent hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full p-2" onClick={handleCloseCart}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Carrito</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <div className="flex flex-col space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border border-gray-200 rounded-md p-2">
                    <div className="ml-4 flex flex-col">
                      <h5 className="text-sm font-medium mb-1">{item.name}</h5>
                      <p className="text-gray-600 text-sm">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button
                        className="bg-transparent hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full p-2"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <AiOutlineClose className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <button className="bg-transparent hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-md p-2">
                <MdOutlineShoppingCart className="text-2xl" />
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartAsideModal;
