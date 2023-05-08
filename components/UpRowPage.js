import React from 'react';
import Image from 'next/image';
import topScroll from '../public/arrow-scroll.svg';
import { useEffect, useState } from 'react';

function UpRowPage() {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <>{scrollTop && <Image className="arrow-scroll" src={topScroll} onClick={scrollUp} alt="arrow"></Image>}</>;
}
export default UpRowPage;
