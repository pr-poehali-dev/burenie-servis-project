
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";

const Geography = () => {
  return (
    <Layout>
      {/* Заголовок страницы */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">География деятельности</h1>
          <p className="text-xl text-gray-600">
            ООО «Бурение Сервис» успешно работает в основных нефтегазодобывающих регионах России
          </p>
        </div>
      </div>

      {/* Карта */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-12 border rounded-lg overflow-hidden shadow-md">
          {/* Здесь будет интерактивная карта, пока используем изображение */}
          <img 
            src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2000&auto=format&fit=crop" 
            alt="Карта России с регионами присутствия" 
            className="w-full h-[600px] object-cover"
          />
          
          {/* Заглушки точек присутствия */}
          <div className="absolute left-[55%] top-[40%] group">
            <div className="relative">
              <div className="w-5 h-5 bg-blue-700 rounded-full border-2 border-white animate-pulse"></div>
              <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-md shadow-md p-2 min-w-40 pointer-events-none transition-opacity">
                <div className="text-sm font-medium">ХМАО</div>
                <div className="text-xs text-gray-600">29 телеметрических партий</div>
              </div>
            </div>
          </div>
          
          <div className="absolute left-[60%] top-[30%] group">
            <div className="relative">
              <div className="w-5 h-5 bg-blue-700 rounded-full border-2 border-white animate-pulse"></div>
              <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-md shadow-md p-2 min-w-40 pointer-events-none transition-opacity">
                <div className="text-sm font-medium">ЯНАО</div>
                <div className="text-xs text-gray-600">15 телеметрических партий</div>
              </div>
            </div>
          </div>
          
          <div className="absolute left-[45%] top-[35%] group">
            <div className="relative">
              <div className="w-5 h-5 bg-blue-700 rounded-full border-2 border-white animate-pulse"></div>
              <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-md shadow-md p-2 min-w-40 pointer-events-none transition-opacity">
                <div className="text-sm font-medium">Республика Коми</div>
                <div className="text-xs text-gray-600">8 телеметрических партий</div>
              </div>
            </div>
          </div>
          
          <div className="absolute left-[48%] top-[48%] group">
            <div className="relative">
              <div className="w-5 h-5 bg-blue-700 rounded-full border-2 border-white animate-pulse"></div>
              <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-md shadow-md p-2 min-w-40 pointer-events-none transition-opacity">
                <div className="text-sm font-medium">Башкортостан</div>
                <div className="text-xs text-gray-600">Головной офис</div>
              </div>
            </div>
          </div>
          
          <div className="absolute left-[46%] top-[52%] group">
            <div className="relative">
              <div className="w-5 h-5 bg-blue-700 rounded-full border-2 border-white animate-pulse"></div>
              <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-md shadow-md p-2 min-w-40 pointer-events-none transition-opacity">
                <div className="text-sm font-medium">Самарская область</div>
                <div className="text-xs text-gray-600">6 телеметрических партий</div>
              </div>
            </div>
          </div>
          
          {/* Подсказка */}
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-3 text-sm">
            <p className="font-medium text-gray-900">Наведите курсор на точку, чтобы увидеть подробности</p>
          </div>
        </div>
        
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-3">
                <Icon name="Map" className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-700 mb-2">5+</div>
              <div className="text-center text-gray-700">регионов присутствия</div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-3">
                <Icon name="Building" className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-700 mb-2">4</div>
              <div className="text-center text-gray-700">региональных офиса</div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-3">
                <Icon name="Radio" className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-700 mb-2">20+</div>
              <div className="text-center text-gray-700">телеметрических партий</div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-3">
                <Icon name="PenTool" className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-blue-700 mb-2">2000+</div>
              <div className="text-center text-gray-700">пробуренных скважин</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Региональные представительства */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Региональные представительства</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ХМАО-Югра
                  </h3>
                  <p className="text-gray-700 mb-4">
                    628600, Ханты-Мансийский АО - Югра,<br />
                    г. Нижневартовск, ул. Индустриальная, 12
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="text-blue-700" size={16} />
                      <span className="text-gray-700">(3466) 63-41-32</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" className="text-blue-700" size={16} />
                      <span className="text-blue-700">hmao@burenieservis.ru</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Users" className="text-blue-700 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 mb-1">29 телеметрических партий</p>
                      <p className="text-gray-700">Обслуживание месторождений Самотлорское, Приобское, Федоровское</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ЯНАО
                  </h3>
                  <p className="text-gray-700 mb-4">
                    629300, Ямало-Ненецкий АО,<br />
                    г. Новый Уренгой, ул. Промышленная, 8
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="text-blue-700" size={16} />
                      <span className="text-gray-700">(3494) 92-61-45</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" className="text-blue-700" size={16} />
                      <span className="text-blue-700">yanao@burenieservis.ru</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Users" className="text-blue-700 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 mb-1">15 телеметрических партий</p>
                      <p className="text-gray-700">Обслуживание месторождений Уренгойское, Ямбургское, Бованенковское</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Республика Коми
                  </h3>
                  <p className="text-gray-700 mb-4">
                    169710, Республика Коми,<br />
                    г. Усинск, ул. Нефтяников, 15
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="text-blue-700" size={16} />
                      <span className="text-gray-700">(82144) 2-78-91</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" className="text-blue-700" size={16} />
                      <span className="text-blue-700">komi@burenieservis.ru</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Users" className="text-blue-700 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 mb-1">8 телеметрических партий</p>
                      <p className="text-gray-700">Обслуживание месторождений Усинское, Возейское, Ярегское</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Самарская область
                  </h3>
                  <p className="text-gray-700 mb-4">
                    443022, Самарская область,<br />
                    г. Самара, ул. Промышленности, 25
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="text-blue-700" size={16} />
                      <span className="text-gray-700">(846) 279-21-56</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" className="text-blue-700" size={16} />
                      <span className="text-blue-700">samara@burenieservis.ru</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Users" className="text-blue-700 mt-1" size={16} />
                    <div>
                      <p className="text-gray-700 mb-1">6 телеметрических партий</p>
                      <p className="text-gray-700">Обслуживание месторождений Мухановское, Кулешовское, Дмитриевское</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Реализованные проекты */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Реализованные проекты</h2>
        
        <div className="mb-8">
          <div className="rounded-lg overflow-hidden border">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">Регион</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Заказчик</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Тип скважин</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Количество</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Период</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">ХМАО-Югра</td>
                  <td className="px-4 py-3 text-gray-900">ООО "РН-Бурение"</td>
                  <td className="px-4 py-3 text-gray-900">Горизонтальные</td>
                  <td className="px-4 py-3 text-gray-900">345</td>
                  <td className="px-4 py-3 text-gray-900">2020-2023</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">ЯНАО</td>
                  <td className="px-4 py-3 text-gray-900">ООО "Газпром бурение"</td>
                  <td className="px-4 py-3 text-gray-900">Наклонно-направленные</td>
                  <td className="px-4 py-3 text-gray-900">278</td>
                  <td className="px-4 py-3 text-gray-900">2019-2023</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">Республика Коми</td>
                  <td className="px-4 py-3 text-gray-900">АО "ЛУКОЙЛ-Коми"</td>
                  <td className="px-4 py-3 text-gray-900">Многозабойные</td>
                  <td className="px-4 py-3 text-gray-900">126</td>
                  <td className="px-4 py-3 text-gray-900">2020-2023</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">Самарская область</td>
                  <td className="px-4 py-3 text-gray-900">АО "Самаранефтегаз"</td>
                  <td className="px-4 py-3 text-gray-900">Боковые стволы</td>
                  <td className="px-4 py-3 text-gray-900">198</td>
                  <td className="px-4 py-3 text-gray-900">2021-2023</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">Башкортостан</td>
                  <td className="px-4 py-3 text-gray-900">ООО "Башнефть-Добыча"</td>
                  <td className="px-4 py-3 text-gray-900">Наклонно-направленные</td>
                  <td className="px-4 py-3 text-gray-900">156</td>
                  <td className="px-4 py-3 text-gray-900">2019-2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Перспективы развития */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Перспективы развития</h2>
          <p className="text-gray-700 mb-4">
            ООО «Бурение Сервис» планирует дальнейшее расширение географии деятельности, 
            включая выход на новые перспективные нефтегазоносные регионы и развитие международного сотрудничества.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="Download" size={18} />
              Презентация о перспективах развития
            </Button>
            <Button className="flex items-center gap-2">
              <Icon name="Mail" size={18} />
              Предложить сотрудничество
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Geography;
