import React from "react";
import Image from "next/image";

function ProductUrl({ ProductUrls }) {
  return (
    <>
      <section className="font-HelveticaNeueLtd fixed inset-0 z-50 flex justify-center items-center bg-opacity-50">
        <div className="w-[80%] md:w-[60%] lg:w-[45%] bg-[#fff] shadow-md rounded-[37px]">
          <div
            className="bg-[#f4f1f1] px-6 py-3 rounded-t-[37px] border-b"
            onClick={ProductUrls}
          >
            <h1 className="text-base md:text-xl font-medium">Product Url</h1>
          </div>

          <form>
            <div className="flex flex-col gap-5 px-5 sm:px-10 pt-5 lg:w-[80%]">
              <ul>
                <li className="flex flex-col gap-1 py-2 text-[14px] md:text-[16px] font-medium">
                  <label>Product1</label>
                  <input
                    type="text"
                    placeholder="Product Url"
                    className="placeholder:text-sm placeholder:font-normal border rounded-md px-2 py-1 outline-none text-[#5f5f5f]"
                  />
                </li>
                <li className="flex flex-col gap-1 py-2 text-[14px] md:text-[16px] font-medium">
                  <label>Product2</label>
                  <input
                    type="text"
                    placeholder="Product Url"
                    className="placeholder:text-sm placeholder:font-normal border rounded-md px-2 py-1 outline-none text-[#5f5f5f]"
                  />
                </li>
              </ul>
            </div>
            <div className="flex justify-end items-end gap-3 p-5 sm:p-8">
              <button
                onClick={ProductUrls}
                class="text-[#222] border text-[14px] md:text-[16px] font-normal rounded-md w-[4.5rem] h-[2rem]"
              >
                Back
              </button>
              <button
                class="text-[#222] border text-[14px] md:text-[16px] font-normal rounded-md w-[4.5rem] h-[2rem]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ProductUrl;
