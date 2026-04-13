import React from 'react';
import './MenuCard.css';

interface MenuCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div className="menu-card">
      <img src={imageUrl} alt={title} className="menu-card__image" />
      <h2 className="menu-card__title">{title}</h2>
      <p className="menu-card__description">{description}</p>
      <p className="menu-card__price">${price.toFixed(2)}</p>
    </div>
  );
};

export default MenuCard;