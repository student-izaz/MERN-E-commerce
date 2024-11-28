import React, { useState } from "react";

const FileUpload = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
  });
  const [image, setImage] = useState(null); // State for the image file

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    if (image) {
      formData.append("image", image); // Add the image file
    }

    try {
      console.log(formData);
      // Fetch API request
      const response = await fetch("http://localhost:5000/api/files/upload", {
        method: "POST",
        body: formData, // Send FormData as the body
      });

      if (response.ok) {
        const result = await response.json();
        alert("Product added successfully!");
        console.log("Response:", result);
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={productData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Enter category"
          value={productData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={productData.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {/* {uploadMessage && <p>{uploadMessage}</p>} */}
    </div>
  );
};

export default FileUpload;
