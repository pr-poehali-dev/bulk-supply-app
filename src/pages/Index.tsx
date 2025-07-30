import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const materials = [
  {
    id: 1,
    name: 'Песок строительный',
    category: 'Песок',
    price: 1200,
    unit: 'тонна',
    description: 'Песок карьерный мытый, фракция 0-5 мм',
    image: '/placeholder.svg',
    inStock: true
  },
  {
    id: 2,
    name: 'Щебень гранитный',
    category: 'Щебень',
    price: 1800,
    unit: 'тонна',
    description: 'Щебень гранитный фракция 20-40 мм',
    image: '/placeholder.svg',
    inStock: true
  },
  {
    id: 3,
    name: 'Цемент М400',
    category: 'Цемент',
    price: 420,
    unit: 'мешок 50кг',
    description: 'Портландцемент марки М400',
    image: '/placeholder.svg',
    inStock: true
  },
  {
    id: 4,
    name: 'Керамзит',
    category: 'Керамзит',
    price: 2200,
    unit: 'тонна',
    description: 'Керамзит фракция 10-20 мм',
    image: '/placeholder.svg',
    inStock: false
  },
  {
    id: 5,
    name: 'Гравий',
    category: 'Гравий',
    price: 1500,
    unit: 'тонна',
    description: 'Гравий речной фракция 5-20 мм',
    image: '/placeholder.svg',
    inStock: true
  },
  {
    id: 6,
    name: 'Песок речной',
    category: 'Песок',
    price: 1400,
    unit: 'тонна',
    description: 'Песок речной мытый, фракция 0-3 мм',
    image: '/placeholder.svg',
    inStock: true
  }
];

const deliveryZones = [
  { zone: 'Центр', distance: '0-10 км', price: 800 },
  { zone: 'Ближний', distance: '10-25 км', price: 1200 },
  { zone: 'Дальний', distance: '25-50 км', price: 1800 },
  { zone: 'Пригород', distance: '50+ км', price: 'По договоренности' }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Все', ...Array.from(new Set(materials.map(m => m.category)))];
  
  const filteredMaterials = materials.filter(material => {
    const matchesCategory = selectedCategory === 'Все' || material.category === selectedCategory;
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={28} className="text-primary" />
              <span className="text-xl font-bold text-gray-900">СтройМатериалы</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors">Доставка</a>
              <a href="#price" className="text-gray-700 hover:text-primary transition-colors">Прайс-лист</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Качественные сыпучие материалы с доставкой
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональные поставки строительных материалов для ваших проектов. 
                Гарантия качества, оперативная доставка, конкурентные цены.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/img/59745ad6-8ec7-4d2a-aac4-7b52a64828b1.jpg" 
                alt="Строительные материалы" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="CheckCircle" size={40} className="text-primary mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Все материалы проходят контроль качества и имеют сертификаты соответствия ГОСТ
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Clock" size={40} className="text-primary mb-4" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставляем материалы в день заказа или на следующий день по всему региону
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <CardTitle>B2B сервис</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Специальные условия для строительных компаний, отсрочка платежа, оптовые скидки
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог материалов</h2>
            <p className="text-xl text-gray-600">Широкий ассортимент качественных строительных материалов</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Поиск материалов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button variant="outline">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map(material => (
              <Card key={material.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{material.name}</CardTitle>
                    <Badge variant={material.inStock ? "default" : "secondary"}>
                      {material.inStock ? "В наличии" : "Под заказ"}
                    </Badge>
                  </div>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {material.price.toLocaleString()} ₽
                      </span>
                      <span className="text-gray-600 ml-2">/ {material.unit}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Доставка</h2>
            <p className="text-xl text-gray-600">Оперативная доставка по всему региону</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Зоны доставки</h3>
              <div className="space-y-4">
                {deliveryZones.map((zone, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-lg">{zone.zone}</h4>
                          <p className="text-gray-600">{zone.distance}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">
                            {typeof zone.price === 'number' ? `${zone.price} ₽` : zone.price}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Условия доставки</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Время доставки</h4>
                    <p className="text-gray-600">С 8:00 до 18:00 в рабочие дни</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Truck" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Автопарк</h4>
                    <p className="text-gray-600">Самосвалы от 5 до 25 тонн</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Разгрузка</h4>
                    <p className="text-gray-600">Боковая и задняя разгрузка</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="CreditCard" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Оплата</h4>
                    <p className="text-gray-600">Наличные, безналичный расчет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section id="price" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600">Актуальные цены на все виды материалов</p>
          </div>

          <Tabs defaultValue="sand" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sand">Песок</TabsTrigger>
              <TabsTrigger value="gravel">Щебень</TabsTrigger>
              <TabsTrigger value="cement">Цемент</TabsTrigger>
              <TabsTrigger value="other">Прочее</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sand" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Песок строительный</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span>Песок карьерный мытый 0-5 мм</span>
                      <span className="font-semibold">1,200 ₽/тонна</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Песок речной мытый 0-3 мм</span>
                      <span className="font-semibold">1,400 ₽/тонна</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Песок кварцевый</span>
                      <span className="font-semibold">1,800 ₽/тонна</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gravel" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Щебень и гравий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span>Щебень гранитный 20-40 мм</span>
                      <span className="font-semibold">1,800 ₽/тонна</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Гравий речной 5-20 мм</span>
                      <span className="font-semibold">1,500 ₽/тонна</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Щебень известняковый</span>
                      <span className="font-semibold">1,300 ₽/тонна</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cement" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Цемент и вяжущие</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span>Цемент М400 (50 кг)</span>
                      <span className="font-semibold">420 ₽/мешок</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Цемент М500 (50 кг)</span>
                      <span className="font-semibold">450 ₽/мешок</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Известь гашеная (25 кг)</span>
                      <span className="font-semibold">180 ₽/мешок</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="other" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Прочие материалы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span>Керамзит 10-20 мм</span>
                      <span className="font-semibold">2,200 ₽/тонна</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Торф</span>
                      <span className="font-semibold">800 ₽/тонна</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Чернозем</span>
                      <span className="font-semibold">900 ₽/тонна</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать полный прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 15 лет мы являемся надежным поставщиком строительных материалов 
                для крупных и малых строительных проектов в регионе.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span>Сертифицированные материалы ГОСТ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" size={20} className="text-primary" />
                  <span>Собственный автопарк 20+ машин</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span>Более 500 довольных клиентов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Покрытие всего региона</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/5ab96ab5-8739-4c0b-9ff5-3a9d3b83f422.jpg" 
                alt="О компании" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"  
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для размещения заказа</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Обратная связь</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Input placeholder="Компания" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (495) 123-45-68</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@stroymaterialy.ru</p>
                    <p className="text-gray-600">sales@stroymaterialy.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Строительная, д. 15</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-gray-600">Сб: 9:00 - 15:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
                <span className="text-xl font-bold">СтройМатериалы</span>
              </div>
              <p className="text-gray-400">
                Надежный поставщик строительных материалов с доставкой по всему региону
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Песок</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Щебень</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цемент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Керамзит</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Разгрузка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оптовые продажи</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroymaterialy.ru</li>
                <li>г. Москва, ул. Строительная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройМатериалы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}