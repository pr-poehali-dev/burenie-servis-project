
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

// Заглушки для сертификатов
const certificates = [
  {
    id: 1,
    title: "ISO 9001:2008",
    description: "Система менеджмента качества",
    image: "https://images.unsplash.com/photo-1616160996112-a1f435782fil?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ISO 14001:2004",
    description: "Система экологического менеджмента",
    image: "https://images.unsplash.com/photo-1616169791014-2b9f6faf98a5?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "OHSAS 18001:2007",
    description: "Система менеджмента охраны здоровья",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=300&auto=format&fit=crop"
  }
];

const CertificatesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Сертификаты и лицензии</h2>
            <p className="text-xl text-gray-600">
              Соответствие высоким стандартам качества
            </p>
          </div>
          <Button variant="outline" className="flex items-center gap-2 mt-4 sm:mt-0">
            Все сертификаты 
            <Icon name="ArrowRight" size={18} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Если изображение не загрузилось, показываем заглушку
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1584621770892-4979d8d1fa32?q=80&w=300&auto=format&fit=crop";
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-700">{cert.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 text-blue-700">
                  Просмотреть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
