import React, { useState } from 'react';
import placeholderImage from '@/../public/img/profile-img.png';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt = 'Image', ...props }) => {
    const [imgSrc, setImgSrc] = useState<string>(src || placeholderImage.src);

    // Функція для обробки помилок завантаження зображення
    const handleError = () => {
        if (imgSrc !== placeholderImage) {
            setImgSrc(placeholderImage.src);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
};

export default ImageWithFallback;