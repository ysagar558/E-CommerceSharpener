import { useState } from "react";
import img1 from "../Images/Capture1.PNG";
import img2 from "../Images/Capture2.PNG";
import img3 from "../Images/Capture3.PNG";
import img4 from "../Images/Capture4.PNG";
import img5 from "../Images/Capture5.PNG";
import img6 from "../Images/Capture6.PNG";

const ProductDetails = () => {
  const images = [
    img1,img2,img3,img4,img5,img6,
  ];

  // 🔹 Hard-coded reviews (similar to Flipkart)
  const reviews = [
    {
      id: 1,
      name: "Ritu Pragnya",
      rating: 4,
      comment: "Love it ❤️",
      date: "Jan, 2022",
    },
    {
      id: 2,
      name: "Madhu Mitha",
      rating: 5,
      comment: "Excellent product",
      date: "Mar, 2021",
    },
    {
      id: 3,
      name: "Flipkart Customer",
      rating: 4,
      comment: "nyc one",
      date: "Dec, 2020",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ padding: "30px" }}>
      {/* ================= PRODUCT IMAGES ================= */}
      <div style={{ display: "flex", gap: "30px" }}>
        {/* Thumbnails */}
        <div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="product"
              width="60"
              style={{
                display: "block",
                marginBottom: "10px",
                cursor: "pointer",
                border:
                  selectedImage === img ? "2px solid #2874f0" : "1px solid #ddd",
              }}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div>
          <img src={selectedImage} alt="main-product" width="320" />
        </div>
        <div style={{ marginLeft: "140px" }}>
        <h3>Ratings & Reviews</h3>

        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              borderBottom: "1px solid #e0e0e0",
              padding: "15px 0",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              {review.rating} ⭐
            </div>

            <p style={{ margin: "5px 0" }}>{review.comment}</p>

            <small style={{ color: "#555" }}>
              {review.name} · {review.date}
            </small>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
