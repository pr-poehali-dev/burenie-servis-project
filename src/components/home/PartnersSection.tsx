
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Логотипы партнеров (используем заглушки с Unsplash)
const partners = [
  { 
    id: 1, 
    name: "РН-Бурение", 
    logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 2, 
    name: "Газпром бурение", 
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 3, 
    name: "Техносервис", 
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c8ce?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 4, 
    name: "Башнефть-Бурение", 
    logo: "https://images.unsplash.com/photo-1581077968166-9d12f0811d73?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 5, 
    name: "БУРИНТЕХ", 
    logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 6, 
    name: "Р.С.-Бурение", 
    logo: "https://images.unsplash.com/photo-1568034097100-8032c9ca8009?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 7, 
    name: "Смит Сайбириан Сервисиз", 
    logo: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
  { 
    id: 8, 
    name: "Буровая компания «Евразия»", 
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=200&h=100&auto=format&fit=crop&crop=entropy"
  },
];

const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'contractors'>('clients');

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Партнеры и клиенты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ООО «Бурение Сервис» успешно сотрудничает с крупнейшими российскими 
            нефтегазодобывающими предприятиями и зарубежными компаниями
          </p>
          
          <div className="flex justify-center mt-6 mb-8">
            <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
              <button 
                className={`px-6 py-3 font-medium ${
                  activeTab === 'clients' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('clients')}
              >
                Наши клиенты
              </button>
              <button 
                className={`px-6 py-3 font-medium ${
                  activeTab === 'contractors' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('contractors')}
              >
                Наши подрядчики
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Отображаем логотипы партнеров */}
          {partners.map((partner) => (
            <Card key={partner.id} className="flex items-center justify-center p-4 bg-white border hover:shadow-md transition-shadow">
              <CardContent className="p-0 text-center">
                <img 
                  src={partner.logo} 
                  alt={`Логотип ${partner.name}`} 
                  className="h-20 w-auto object-contain mx-auto mb-3"
                />
                <div className="text-gray-700 text-sm">{partner.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
