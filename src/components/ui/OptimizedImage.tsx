"use client";

import Image from "next/image";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  if (fill) {
    return (
      <>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-0">
            <LoadingSpinner size="sm" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          quality={85}
        />
      </>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        quality={85}
      />
    </div>
  );
}
