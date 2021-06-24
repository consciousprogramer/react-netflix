export const handleLeftSlide = (rowImages) => {
    var x = -130;
    rowImages.current.scrollBy({
      top: 0,
      left: x,
      behavior: "smooth",
    });
  };

export const handleRightSlide = (rowImages) => {
    var x = 160;
    rowImages.current.scrollBy({
      top: 0,
      left: x,
      behavior: "smooth",
    });
  };