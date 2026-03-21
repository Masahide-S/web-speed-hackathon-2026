interface Props {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

/**
 * 軽量な画像コンポーネント - LCP最適化用
 * CoveredImageと異なり、重い処理（fetchBinary, EXIF読み取り等）を行わない
 * 直接画像URLを指定し、ブラウザネイティブの読み込みに任せる
 */
export const SimpleImage = ({ src, alt, priority = false, className = "" }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className || "w-full h-full object-cover"}
    />
  );
};
