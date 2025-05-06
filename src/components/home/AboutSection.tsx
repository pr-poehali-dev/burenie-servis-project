
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">О компании</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ООО «Бурение Сервис» с 2007 года предоставляет качественные услуги в области 
            нефтегазового сервиса на территории России
          </p>
        </div>
        
        {/* Краткая информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Высокотехнологичные решения для нефтегазовой отрасли
            </h3>
            <p className="text-gray-700 mb-4">
              ООО «Бурение Сервис» осуществляет деятельность с 2007 года. 
              Численность персонала более 150 человек. Производственная база – РФ, 
              Республика Башкортостан, город Уфа.
            </p>
            <p className="text-gray-700 mb-6">
              Собственные региональные представители в крупнейших нефтегазоносных 
              регионах России (ХМАО, ЯНАО, Республика Коми, Самарская область). 
              На текущий момент одновременно действует более 20 укомплектованных 
              телеметрических партий.
            </p>
            <Button asChild>
              <Link to="/about">Подробнее о компании</Link>
            </Button>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1563402982564-abd1c13fb20c?q=80&w=800&auto=format&fit=crop" 
              alt="Производственная база ООО Бурение Сервис" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Ключевые направления деятельности */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Основные направления деятельности
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="AreaChart" className="text-blue-700" size={30} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Сервисные услуги
              </h4>
              <p className="text-gray-700">
                Инженерно-технологическое и телеметрическое сопровождение строительства 
                наклонно-направленных, горизонтальных скважин и боковых стволов
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Radio" className="text-blue-700" size={30} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Телеметрические системы
              </h4>
              <p className="text-gray-700">
                Применение модуля резистивиметра, модуля двойного нейтрон-нейтронного 
                каротажа (2ННКт) и модуля радиактивного коротажа (МРК)
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Factory" className="text-blue-700" size={30} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Производство
              </h4>
              <p className="text-gray-700">
                Производство, ремонт и контроль качества нефтегазового инструмента и 
                оборудования для бурения в собственном оснащенном цехе
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 rounded-lg p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">16+</div>
            <div className="text-gray-700">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">150+</div>
            <div className="text-gray-700">сотрудников</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">20+</div>
            <div className="text-gray-700">телеметрических партий</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700">2000+</div>
            <div className="text-gray-700">пробуренных скважин</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
