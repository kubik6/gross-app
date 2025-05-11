import React, { useRef, useState } from 'react'

import '@/components/jobCategory/jobCategory.scss'

import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";

const JobCategory: React.FC = () => {
    const items = [
        { id: 1, icon: '🍽️', title: 'Restoran işi', subTitle: '23 iş elan' },
        { id: 2, icon: '📁', title: 'İnzibati', subTitle: '22 iş elan' },
        { id: 3, icon: '🎓', title: 'Təhsil və elm', subTitle: '20 iş elan' },
        { id: 4, icon: '🩺', title: 'Səhiyyə', subTitle: '14 iş elan' },
        { id: 5, icon: '🎨', title: 'Dizayn', subTitle: '11 iş elan' },
        { id: 6, icon: '📦', title: 'Müxtəlif', subTitle: '9 iş elan' },
        { id: 7, icon: '📦', title: 'Müxtəlif', subTitle: '9 iş elan' },
        { id: 8, icon: '📦', title: 'Müxtəlif', subTitle: '9 iş elan' },
        { id: 9, icon: '📦', title: 'Müxtəlif', subTitle: '9 iş elan' },
        { id: 10, icon: '📦', title: 'Müxtəlif', subTitle: '9 iş elan' },
    ];

    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollLeftButton = () => {
        if (carouselRef.current) {
            if (carouselRef.current.scrollLeft <= 0) {
                carouselRef.current.scrollTo({ left: carouselRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            }
        }
    };

    const scrollRightButton = () => {
        if (carouselRef.current) {
            const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            if (carouselRef.current.scrollLeft >= maxScroll - 1) {
                setTimeout(() => {
                    carouselRef.current?.scrollTo({ left: 0, behavior: 'auto' });
                }, 300);
            } else {
                carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        setStartX(pageX);
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleDragging = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        const deltaX = pageX - startX;
        carouselRef.current.scrollLeft = scrollLeft - deltaX;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className='job-category'>
            <div className='job-category__title'>
                <h2>İş elanları 2025</h2>
                <p>Sahələrə uyğun vakansiyalar</p>
            </div>
            <div className="carousel">
                <button className="carousel__arrow carousel__arrow--left" onClick={scrollLeftButton}>
                    <RiArrowDropLeftFill />
                </button>

                <div
                    className="carousel__container"
                    ref={carouselRef}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragging}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragging}
                    onTouchEnd={handleDragEnd}
                >
                    {items?.map((item) => (
                        <div className="carousel__item" key={item?.id}>
                            <div className="carousel__icon">{item?.icon}</div>
                            <div className="carousel__text">
                                <span className="carousel__title">{item?.title}</span>
                                <span className="carousel__subtitle">{item?.subTitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel__arrow carousel__arrow--right" onClick={scrollRightButton}>
                    <RiArrowDropRightFill />
                </button>
            </div>
        </div>
    )
}

export default JobCategory