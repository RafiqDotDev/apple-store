import React, { useState } from "react";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  category?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc,
  category = "mobile",
  ...props
}) => {
  const [error, setError] = useState(false);

  // Reliable, high-availability Unsplash CDN images with fallbacks
  const backupImages: Record<string, string> = {
    mobile: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    accessory: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    laptop: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    setup: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
  };

  const currentSrc = error
    ? fallbackSrc || backupImages[category] || backupImages.mobile
    : src || backupImages[category] || backupImages.mobile;

  return (
    <img
      src={currentSrc}
      alt={alt || "NEXORA Product"}
      className={className}
      onError={() => {
        if (!error) setError(true);
      }}
      {...props}
    />
  );
};
