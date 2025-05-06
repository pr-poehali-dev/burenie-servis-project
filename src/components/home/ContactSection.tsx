
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 mb-8">
              Оставьте заявку, и наши специалисты свяжутся с вами для обсуждения сотрудничества
            </p>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                    Компания *
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Название компании"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Напишите ваше сообщение"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto">
                Отправить заявку
              </Button>
            </form>
          </div>
          
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Адрес</h4>
                      <p className="text-gray-700">
                        450095, Республика Башкортостан,<br />
                        г. Уфа, ул. Чебоксарская, 23
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Телефоны</h4>
                      <p className="text-gray-700">
                        (347) 229-43-53<br />
                        (347) 271-55-01<br />
                        (347) 271-55-02
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-blue-700">
                        burenieservis@mail.ru
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Режим работы</h4>
                      <p className="text-gray-700">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб-Вс: Выходной
                      </p>
                      <p className="text-gray-700 mt-1">
                        Сопровождение бурения: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
