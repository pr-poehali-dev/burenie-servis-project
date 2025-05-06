
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Инженерно-технологическое сопровождение скважин",
    description: "Профессиональное сопровождение проводки скважин с использованием телеметрических систем",
    image: "https://images.unsplash.com/photo-1586767003402-8ade266deb64?q=80&w=1200&auto=format&fit=crop",
    cta: "Подробнее об услуге"
  },
  {
    id: 2,
    title: "Производство нефтегазового оборудования",
    description: "Собственное производство и ремонт инструмента и оборудования для бурения с 2012 года",
    image: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?q=80&w=1200&auto=format&fit=crop",
    cta: "Наше оборудование"
  },
  {
    id: 3,
    title: "Телеметрические системы с электромагнитным каналом связи",
    description: "Телеметрическая система БТС для оперативного управления траекторией ствола скважин",
    image: "https://images.unsplash.com/photo-1574270981993-3206fea470eb?q=80&w=1200&auto=format&fit=crop",
    cta: "О телеметрических системах"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Переключение слайдов вручную
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Затемнение изображения */}
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          
          {/* Фоновое изображение */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-10000 scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          {/* Контент слайда */}
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slide.description}
              </p>
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-lg">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
