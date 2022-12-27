import React from "react";
import { CardProvider } from "./CardContext/CardContext";
import CarouselGrid from "./CarouselGrid";

// Context here?

const TidalCarouselWrapper = () => {
  return (
    <CardProvider>
      <CarouselGrid />
    </CardProvider>
  );
};

export default TidalCarouselWrapper;
