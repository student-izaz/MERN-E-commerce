import './CategoryList.css'

import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Main from '../../pages/Main';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
    <Main/>
    <div className="category-list">
      {categories.map((cat) => (
        <div key={cat._id} className="category-item" onClick={() => handleCategoryClick(cat.name)}>
          <img src={`../../assets/${cat.image}`} alt={cat.name} />
        </div>
      ))}
    </div>
    </>
    
  );
};

export default CategoryList;

