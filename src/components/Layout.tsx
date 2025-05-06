
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Шапка сайта */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                БС
              </div>
              <div className="text-xl font-bold text-blue-900">
                ООО «Бурение Сервис»
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <div className="font-medium text-gray-800">(347) 229-43-53</div>
              <div className="text-sm text-gray-600">271-55-01, 271-55-02</div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-blue-700 border-blue-700">
                RU
              </Button>
              <Button variant="outline" size="sm" className="text-gray-500 border-gray-300">
                EN
              </Button>
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800">
              Связаться с нами
            </Button>
          </div>
          
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      {/* Навигационное меню */}
      <nav className="bg-gray-100 shadow-sm hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between">
            {[
              { title: "О компании", path: "/about" },
              { title: "Услуги", path: "/services" },
              { title: "Оборудование", path: "/equipment" },
              { title: "Производство", path: "/production" },
              { title: "География", path: "/geography" },
              { title: "Партнеры", path: "/partners" },
              { title: "Карьера", path: "/career" },
              { title: "Контакты", path: "/contacts" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block py-4 px-2 hover:text-blue-700 transition-colors font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Подвал сайта */}
      <footer className="bg-gray-900 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ООО «Бурение Сервис»</h3>
              <address className="not-italic">
                <p className="mb-2">
                  <Icon name="MapPin" className="inline-block mr-2" size={18} />
                  450095, Республика Башкортостан,<br />
                  г. Уфа, ул. Чебоксарская, 23
                </p>
                <p className="mb-2">
                  <Icon name="Phone" className="inline-block mr-2" size={18} />
                  (347) 229-43-53, 271-55-01, 271-55-02
                </p>
                <p className="mb-2">
                  <Icon name="Mail" className="inline-block mr-2" size={18} />
                  burenieservis@mail.ru
                </p>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Навигация</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">О компании</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Услуги</Link></li>
                <li><Link to="/equipment" className="hover:text-blue-400 transition-colors">Оборудование</Link></li>
                <li><Link to="/production" className="hover:text-blue-400 transition-colors">Производство</Link></li>
                <li><Link to="/geography" className="hover:text-blue-400 transition-colors">География</Link></li>
                <li><Link to="/partners" className="hover:text-blue-400 transition-colors">Партнеры</Link></li>
                <li><Link to="/career" className="hover:text-blue-400 transition-colors">Карьера</Link></li>
                <li><Link to="/contacts" className="hover:text-blue-400 transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p className="mb-1">&copy; 2007-2025 ООО «Бурение Сервис»</p>
                <p><Link to="/privacy" className="text-blue-400 hover:underline">Политика конфиденциальности</Link></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
