import React from "react";
import Image from "next/image";

function ProductDetail({ productDetail }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          src={i < rating ? "/reviewstar.svg" : "/reviewstar1.svg"}
          alt="Reviews"
          width={15}
          height={15}
        />
      );
    }
    return stars;
  };

  const getVisibleReviews = () => {
    const start = currentSlideIndex * reviewsPerSlide;
    return reviews.slice(start, start + reviewsPerSlide);
  };

  const details = [
    {
      author: "Husain Shaikh",
      rating: 5,
      content: "5Fantastic sneekersLove it Quality of the product is super",
      images:
        "https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_38f98f2af1b644b9b0f2352c8c2e2de8.jpg?q=90;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzlEOUQ5RCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjAgMEgyQzEgMCAwIDEgMCAydjE0YzAgMS4xLjkgMiAyIDJoMThjMSAwIDItMSAyLTJWMmMwLTEtMS0yLTItMnptMCAxNS45MmMtLjAyLjAzLS4wNi4wNi0uMDguMDhIMlYyLjA4TDIuMDggMmgxNy44M2MuMDMuMDIuMDYuMDYuMDguMDh2MTMuODRIMjB6Ii8+PHBhdGggZD0iTTEwIDEyLjUxTDcuNSA5LjUgNCAxNGgxNGwtNC41LTZ6Ii8+PC9nPjwvc3ZnPg==",
      videos: "",
      verifiedPurchase: true,
      createdAt: "2024-04-05T05:31:25.382Z",
    },
    {
      author: "Flipkart Customer",
      rating: 5,
      content: "5Awesome shoe",
      images:
        "https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_7d15754dd7de4372b857957d9f219b93.jpg?q=90;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzlEOUQ5RCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjAgMEgyQzEgMCAwIDEgMCAydjE0YzAgMS4xLjkgMiAyIDJoMThjMSAwIDItMSAyLTJWMmMwLTEtMS0yLTItMnptMCAxNS45MmMtLjAyLjAzLS4wNi4wNi0uMDguMDhIMlYyLjA4TDIuMDggMmgxNy44M2MuMDMuMDIuMDYuMDYuMDguMDh2MTMuODRIMjB6Ii8+PHBhdGggZD0iTTEwIDEyLjUxTDcuNSA5LjUgNCAxNGgxNGwtNC41LTZ6Ii8+PC9nPjwvc3ZnPg==",
      videos: "",
      verifiedPurchase: true,
      createdAt: "2024-04-05T05:31:25.938Z",
    },
    {
      author: "Flipkart Customer",
      rating: 2,
      content: "2Very bad quality",
      videos: "",
      verifiedPurchase: true,
      createdAt: "2024-06-04T05:31:25.939Z",
    },
    {
      author: "Rohan Narwade",
      rating: 5,
      content: "5its a good product",
      videos: "",
      verifiedPurchase: true,
      createdAt: "2024-05-31T05:31:25.939Z",
    },
    {
      author: "Namoju  Jithendra chary",
      rating: 5,
      content: "5Superb product i like more",
      videos: "",
      verifiedPurchase: true,
      createdAt: "2024-05-26T05:31:25.940Z",
    },
    {
        author: "Flipkart Customer",
        rating: 2,
        content: "2Very bad quality",
        videos: "",
        verifiedPurchase: true,
        createdAt: "2024-06-04T05:31:25.939Z",
      },
      {
        author: "Rohan Narwade",
        rating: 5,
        content: "5its a good product",
        videos: "",
        verifiedPurchase: true,
        createdAt: "2024-05-31T05:31:25.939Z",
      },
      {
        author: "Namoju  Jithendra chary",
        rating: 5,
        content: "5Superb product i like more",
        videos: "",
        verifiedPurchase: true,
        createdAt: "2024-05-26T05:31:25.940Z",
      },
  ];

  return (
    <>
      <section className="font-HelveticaNeueLtd fixed inset-0 z-50 flex justify-center items-center bg-opacity-50">
        <div className="w-[80%] md:w-[60%] lg:w-[45%] bg-[#fff] shadow-md rounded-[37px]">
          <div className="bg-[#f4f1f1] px-6 py-3 rounded-t-[37px] border-b">
            <h1 className="text-base md:text-xl font-medium">
              Product Details
            </h1>
          </div>

          <form>
            <div className="max-h-[400px] overflow-y-scroll" style={{scrollbarWidth: 'none'}}>
              <ul className="flex flex-col gap-5 px-5 sm:px-10 pt-5 lg:w-[80%]">
                {details.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-5 py-2 text-[14px] md:text-[16px] font-medium"
                  >
                    <img src={item.images} width={50} height={50} />
                    <div>
                      <h1 className="text-[#222222] text-sm md:text-[16px] lg:text-[18px] leading-[22px] font-semibold">
                        {item.author}
                      </h1>
                      <span className="flex gap-1">
                        {renderStars(item.rating)}
                      </span>
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end items-end gap-3 p-5 sm:p-8">
              <button
                onClick={productDetail}
                className="text-[#222] border text-[14px] md:text-[16px] font-normal rounded-md w-[4.5rem] h-[2rem]"
              >
                Back
              </button>
              <button className="text-[#222] border text-[14px] md:text-[16px] font-normal rounded-md w-[4.5rem] h-[2rem]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
