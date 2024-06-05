import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductUrl from "./ProductUrl";

function ProductList({ Product }) {
  const [showUrls, setShowUrls] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const ProductUrls = () => setShowUrls(!showUrls);

  const product = [
    { name: "product 1" },
    { name: "product 2" },
    { name: "product 3" },
    { name: "product 4" },
    { name: "product 5" },
  ];

  const handleCheckboxChange = (productName) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.includes(productName)
        ? prevSelectedProducts.filter((name) => name !== productName)
        : [...prevSelectedProducts, productName];

      if (updatedProducts.length > 0) {
        setShowErrorMessage(false);
      }

      return updatedProducts;
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedProducts.length === 0) {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 1000);
    } else {
      setShowUrls(true);
    }
  };

  const filteredProducts = product.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="font-HelveticaNeueLtd fixed inset-0 z-50 flex justify-center items-center bg-opacity-50"
      >
        {showUrls ? (
          <ProductUrl ProductUrls={ProductUrls} selectedProducts={selectedProducts} />
        ) : (
          <div className="w-[80%] md:w-[60%] lg:w-[45%] bg-[#fff] shadow-md rounded-[37px]">
            <div
              className="bg-[#f4f1f1] px-6 py-3 rounded-t-[37px] border-b"
              onClick={Product}
            >
              <h1 className="text-base md:text-xl font-medium">Product List</h1>
            </div>

            <div className="p-6 border-b">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-400 rounded-md px-8 py-1 outline-none text-normal text-[#343434]"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <span className="absolute left-[1%]">
                  <Image src="/searchIcon.svg" width={18} height={18} />
                </span>
              </div>
            </div>

            <form>
              <div className="flex flex-col items-start gap-5 px-4 sm:px-7">
                <ul className="w-full">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <li
                        key={product.name}
                        className="flex items-center gap-2 py-2 sm:py-4 text-[14px] border-b md:text-[16px] lg:text-[18px] font-medium"
                      >
                        <span>
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.name)}
                            onChange={() => handleCheckboxChange(product.name)}
                          />
                        </span>
                        {product.name}
                      </li>
                    ))
                  ) : (
                    <li className="text-[14px] md:text-[16px] lg:text-[18px] font-medium p-5">
                      Not Found
                    </li>
                  )}
                </ul>
              </div>
              {showErrorMessage && (
                <div className="text-red-500 text-sm px-4 sm:px-7">
                  Please select at least one product.
                </div>
              )}
              <div className="flex justify-between items-center gap-2 sm:gap-3 p-4 sm:p-5">
                <span className="text-xs sm:text-base text-center">{selectedProducts.length} Product selected</span>
                <div className="flex gap-1 sm:gap-3">
                  <button
                    onClick={Product}
                    className="text-[#222] border text-[12px] md:text-[16px] font-normal rounded-md w-[3.5rem] sm:w-[4.5rem] h-[2rem]"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleNextClick}
                    className="text-[#222] border text-[12px] md:text-[16px] font-normal rounded-md w-[3.5rem] sm:w-[4.5rem] h-[2rem]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </motion.section>
    </>
  );
}

export default ProductList;
