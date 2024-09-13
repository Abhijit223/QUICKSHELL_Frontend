import React from 'react';
import './CardSkeleton.css'; // The CSS file for styling the skeleton

const CardSkeleton = () => {
  return (
    <div className="card skeleton">
      <div className="card_header">
        <div className="skeleton-box skeleton-text-id"></div>
        <div className="skeleton-box skeleton-avatar"></div>
      </div>
      <div className="skeleton-box skeleton-title"></div>
      <div className="card_footer">
        <div className="skeleton-box skeleton-footer-tag"></div>
        <div className="skeleton-box skeleton-footer-tag"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
