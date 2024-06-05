"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductList from "./ProductList";

function review() {
  const [showReview, setShowReview] = useState(false);
  const Review = () => setShowReview(!showReview);

  const [showProduct, setShowProduct] = useState(false);
  const Product = () => setShowProduct(!showProduct);
  return (
    <>
      <section className=" flex items-center font-generalsans h-fit w-full py-[2rem] md:pt-[6rem] md:pb-[2rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="lg:w-[80%] bg-[#F3F5F8] p-5 border border-[#00000024] rounded">
            <div
              className="flex justify-between gap-3 items-center"
              onClick={Review}
            >
              <div className="flex gap-7">
                <div className="flex justify-center items-center w-[70px] h-[69px] border rounded-2xl bg-white">
                  <img src="/review.png" alt="review" width={45} height={45} />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#222] text-[12px] md:text-[15px] lg:text-[24px] font-semibold leading-normal">
                    Import reviews from another platform
                  </h1>
                  <p className="text-[#00000085] text-[12px] md:text-[15px] lg:text-[18px]">
                    Reviews must be collected from another review management
                    platform
                  </p>
                </div>
              </div>

              <span className={showReview && "rotate-180"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M13.5 6.75L9 11.25L4.5 6.75"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            {showReview && (
              <div className="flex gap-2 sm:gap-4 mt-10">
                <button
                  onClick={Product}
                  class="text-[#019ed1] text-[13px] md:text-[16px] leading-[21.6px] rounded-md border border-[#E6E5F6] bg-[#fff] hover:bg-opacity-90 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] w-[8rem] h-[2.5rem]"
                >
                  Amazon
                </button>
                <button
                  onClick={Product}
                  class="text-[#019ed1] text-[13px] md:text-[16px] leading-[21.6px] rounded-md border border-[#E6E5F6] bg-[#fff] hover:bg-opacity-90 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] w-[8rem] h-[2.5rem]"
                >
                  Flipkart
                </button>
                <button
                  onClick={Product}
                  class="text-[#019ed1] text-[13px] md:text-[16px] leading-[21.6px] rounded-md border border-[#E6E5F6] bg-[#fff] hover:bg-opacity-90 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] w-[8rem] h-[2.5rem]"
                >
                  Myntra
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={Product}
              className="fixed inset-0 bg-[#001632] z-40"
            />
            <ProductList Product={Product} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default review;
