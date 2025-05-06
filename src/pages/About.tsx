
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/Icon";

const About = () => {
  return (
    <Layout>
      {/* Заголовок страницы */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О компании</h1>
          <p className="text-xl text-gray-600">
            ООО «Бурение Сервис» — надежный партнер в нефтегазовом сервисе с 2007 года
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Левая колонка с навигацией */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-4">Разделы</h3>
                <ul className="space-y-2">
                  {[
                    { title: "История компании", href: "#history" },
                    { title: "Миссия и ценности", href: "#mission" },
                    { title: "Производственная база", href: "#production" },
                    { title: "Сертификаты и лицензии", href: "#certificates" },
                    { title: "Руководство", href: "#management" },
                    { title: "Организационная структура", href: "#structure" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a 
                        href={item.href}
                        className="block py-2 px-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка с контентом */}
          <div className="lg:col-span-2">
            {/* История компании */}
            <section id="history" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">История компании</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <div className="md:col-span-3">
                  <p className="text-gray-700 mb-4">
                    ООО «Бурение Сервис» было основано в 2007 году группой профессионалов с многолетним опытом в нефтегазовой отрасли. 
                    Компания начала свою деятельность с предоставления услуг по инженерно-технологическому сопровождению строительства скважин.
                  </p>
                  <p className="text-gray-700 mb-4">
                    С 2010 года компания активно расширяла спектр предоставляемых услуг и географию присутствия. 
                    Были открыты представительства в ключевых нефтегазоносных регионах России.
                  </p>
                  <p className="text-gray-700">
                    В 2012 году компания запустила собственное производство нефтегазового оборудования и инструмента, 
                    что позволило обеспечить полный цикл сервисных услуг и повысить качество предоставляемых услуг.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1579847188804-2e3c13cc211e?q=80&w=600&auto=format&fit=crop" 
                    alt="История компании Бурение Сервис" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-blue-700">2007</div>
                  <div className="text-gray-700">Основание компании</div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-blue-700">2010</div>
                  <div className="text-gray-700">Расширение географии работ</div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-blue-700">2012</div>
                  <div className="text-gray-700">Запуск собственного производства</div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-blue-700">2015</div>
                  <div className="text-gray-700">Разработка телеметрической системы</div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-blue-700">2020</div>
                  <div className="text-gray-700">Открытие новой производственной базы</div>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Миссия и ценности */}
            <section id="mission" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Миссия и ценности</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Наша миссия</h3>
                <p className="text-gray-700 italic">
                  "Обеспечивать нефтегазодобывающую отрасль инновационными технологическими решениями, 
                  способствующими эффективной и экологически безопасной разработке месторождений, 
                  создавая ценность для наших клиентов, сотрудников и общества в целом."
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Наши ценности</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Shield" className="text-blue-700" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Безопасность</h4>
                    <p className="text-gray-700">
                      Безопасность наших сотрудников и окружающей среды является нашим приоритетом 
                      при выполнении любых работ.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="BadgeCheck" className="text-blue-700" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Качество</h4>
                    <p className="text-gray-700">
                      Мы стремимся к постоянному совершенствованию и обеспечению высокого качества 
                      на всех этапах работы.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Users" className="text-blue-700" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Командная работа</h4>
                    <p className="text-gray-700">
                      Мы ценим вклад каждого сотрудника и верим, что вместе мы достигаем 
                      лучших результатов.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Lightbulb" className="text-blue-700" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Инновации</h4>
                    <p className="text-gray-700">
                      Мы постоянно ищем новые технологические решения для повышения эффективности нашей работы.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Award" className="text-blue-700" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Профессионализм</h4>
                    <p className="text-gray-700">
                      Наши специалисты обладают высокой квалификацией и постоянно совершенствуют свои навыки.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Clock" className="text-blue-700" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Ответственность</h4>
                    <p className="text-gray-700">
                      Мы выполняем свои обязательства перед клиентами, партнерами и обществом.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <Separator className="my-10" />
            
            {/* Производственная база */}
            <section id="production" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Производственная база</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Производственная база ООО «Бурение Сервис» расположена в городе Уфа и занимает площадь более 5000 кв.м. 
                    Она включает в себя современные цеха по производству и ремонту нефтегазового оборудования, 
                    лабораторию неразрушающего контроля, а также складские и офисные помещения.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Производство оснащено современным оборудованием ведущих производителей, 
                    что позволяет обеспечивать высокое качество выпускаемой продукции и предоставляемых услуг.
                  </p>
                  <p className="text-gray-700">
                    На производственной базе компании работают высококвалифицированные специалисты, 
                    имеющие большой опыт работы в нефтегазовой отрасли.
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1541746951851-4751c14dc4c2?q=80&w=600&auto=format&fit=crop" 
                  alt="Производственная база ООО Бурение Сервис" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Оснащение производственной базы</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Tools" className="text-blue-700" size={20} />
                    <h4 className="font-bold text-gray-900">Металлообрабатывающие станки</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Токарные, фрезерные, сверлильные станки с ЧПУ
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Microscope" className="text-blue-700" size={20} />
                    <h4 className="font-bold text-gray-900">Лаборатория контроля</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Оборудование для неразрушающего контроля и испытаний
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Radio" className="text-blue-700" size={20} />
                    <h4 className="font-bold text-gray-900">Электронная лаборатория</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Оборудование для тестирования и настройки телеметрических систем
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Wrench" className="text-blue-700" size={20} />
                    <h4 className="font-bold text-gray-900">Ремонтный цех</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Оборудование для ремонта и обслуживания бурового оборудования
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Truck" className="text-blue-700" size={20} />
                    <h4 className="font-bold text-gray-900">Логистический центр</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Складские помещения и транспортный парк
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Factory" className="text-blue-700" size={20} />
                    <h4 className="font-bold text-gray-900">Производственные цеха</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Современные цеха для производства нефтегазового оборудования
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-10" />
            
            {/* Сертификаты и лицензии */}
            <section id="certificates" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Сертификаты и лицензии</h2>
              
              <p className="text-gray-700 mb-6">
                ООО «Бурение Сервис» имеет все необходимые сертификаты и лицензии для осуществления деятельности 
                в нефтегазовой отрасли. Наша компания сертифицирована по международным стандартам качества, 
                что подтверждает высокий уровень нашей работы.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1584621770892-4979d8d1fa32?q=80&w=300&auto=format&fit=crop" 
                      alt="ISO 9001:2015" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
                    <p className="text-gray-700">Система менеджмента качества</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292003-0bb40aa20bbf?q=80&w=300&auto=format&fit=crop" 
                      alt="ISO 14001:2015" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 14001:2015</h3>
                    <p className="text-gray-700">Система экологического менеджмента</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=300&auto=format&fit=crop" 
                      alt="ISO 45001:2018" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 45001:2018</h3>
                    <p className="text-gray-700">Система менеджмента охраны здоровья и безопасности труда</p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <Separator className="my-10" />
            
            {/* Руководство компании */}
            <section id="management" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Руководство компании</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-64 bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" 
                      alt="Генеральный директор" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Иванов Иван Иванович</h3>
                    <p className="text-blue-700 font-medium mb-4">Генеральный директор</p>
                    <p className="text-gray-700 text-sm">
                      Более 25 лет опыта в нефтегазовой отрасли. Руководит компанией с момента основания.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-64 bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                      alt="Технический директор" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Петров Петр Петрович</h3>
                    <p className="text-blue-700 font-medium mb-4">Технический директор</p>
                    <p className="text-gray-700 text-sm">
                      Кандидат технических наук, эксперт в области телеметрических систем и бурения.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-64 bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop" 
                      alt="Финансовый директор" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Сидорова Анна Владимировна</h3>
                    <p className="text-blue-700 font-medium mb-4">Финансовый директор</p>
                    <p className="text-gray-700 text-sm">
                      Опыт работы в финансовом секторе более 15 лет, отвечает за финансовую стратегию компании.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <Separator className="my-10" />
            
            {/* Организационная структура */}
            <section id="structure" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Организационная структура</h2>
              
              <p className="text-gray-700 mb-6">
                ООО «Бурение Сервис» имеет четкую организационную структуру, 
                обеспечивающую эффективное управление всеми бизнес-процессами компании.
              </p>
              
              <div className="bg-white rounded-lg border p-6 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                  alt="Организационная структура ООО Бурение Сервис" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Основные подразделения</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Департамент телеметрического сопровождения</span>
                          <p className="text-sm text-gray-700">Инженерно-технологическое сопровождение строительства скважин</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Производственный департамент</span>
                          <p className="text-sm text-gray-700">Производство и ремонт нефтегазового оборудования</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Департамент разработки</span>
                          <p className="text-sm text-gray-700">Разработка и совершенствование телеметрических систем</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Административный департамент</span>
                          <p className="text-sm text-gray-700">Управление персоналом, финансами и общими вопросами</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Региональные представительства</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Ханты-Мансийский автономный округ</span>
                          <p className="text-sm text-gray-700">г. Нижневартовск, ул. Индустриальная, 12</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Ямало-Ненецкий автономный округ</span>
                          <p className="text-sm text-gray-700">г. Новый Уренгой, ул. Промышленная, 8</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Республика Коми</span>
                          <p className="text-sm text-gray-700">г. Усинск, ул. Нефтяников, 15</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-blue-700 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-medium text-gray-900">Самарская область</span>
                          <p className="text-sm text-gray-700">г. Самара, ул. Промышленности, 25</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
