import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <header className="glass-card border-0 rounded-none backdrop-blur-md bg-white/90 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LeaderEdu</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад к мероприятиям
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Войти
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="glass-card p-8 animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                  <Icon name="Wifi" size={14} className="mr-1" />
                  Онлайн
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Лидерство
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Бесплатно
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Мастер-класс: Построение высокоэффективных команд
              </h1>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Icon name="Calendar" size={20} className="mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">15 февраля, 2024</p>
                      <p className="text-sm">Четверг</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Icon name="Clock" size={20} className="mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">19:00 - 21:00</p>
                      <p className="text-sm">2 часа (МСК)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Icon name="Users" size={20} className="mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">120 участников</p>
                      <p className="text-sm">Осталось 45 мест</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Icon name="Globe" size={20} className="mr-3 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Zoom</p>
                      <p className="text-sm">Ссылка придёт на email</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Icon name="Lightbulb" size={20} className="mr-2 text-blue-600" />
                  Что вы получите
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Практические инструменты для формирования команды мечты
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Методы мотивации и удержания талантливых сотрудников
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Готовые шаблоны для проведения эффективных 1-on-1
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-green-600 mt-1 flex-shrink-0" />
                    Сертификат участника от LeaderEdu
                  </li>
                </ul>
              </div>
            </div>

            {/* Program */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="BookOpen" size={24} className="mr-3 text-blue-600" />
                  Программа мастер-класса
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    time: "19:00-19:15",
                    title: "Добро пожаловать",
                    description: "Знакомство, цели и план мастер-класса"
                  },
                  {
                    time: "19:15-19:45",
                    title: "Основы командообразования",
                    description: "5 столпов высокоэффективной команды. Роли и ответственность."
                  },
                  {
                    time: "19:45-20:15",
                    title: "Практический кейс",
                    description: "Разбор реальной ситуации: как превратить группу в команду за 90 дней"
                  },
                  {
                    time: "20:15-20:45",
                    title: "Инструменты лидера",
                    description: "Конкретные методики для мотивации и развития команды"
                  },
                  {
                    time: "20:45-21:00",
                    title: "Q&A сессия",
                    description: "Ответы на вопросы участников и дополнительные рекомендации"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-white/50 rounded-lg border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon name="Clock" size={20} className="text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <span className="text-sm text-blue-600 font-medium">{item.time}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Speaker Info */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 glass-card-blue rounded-2xl flex items-center justify-center">
                      <Icon name="User" size={48} className="text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Анна Петрова</h3>
                    <p className="text-lg text-blue-600 mb-4">CEO TechCorp, бизнес-коуч</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Icon name="Award" size={16} className="mr-2 text-blue-600" />
                        15+ лет опыта в управлении командами
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Building" size={16} className="mr-2 text-blue-600" />
                        Построила 5 успешных IT-команд с нуля
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Users" size={16} className="mr-2 text-blue-600" />
                        Обучила более 2000 руководителей
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Анна — эксперт в области лидерства и командообразования. Автор книги 
                      "Команда мечты: от найма до результата". Регулярный спикер международных 
                      конференций по менеджменту.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Registration */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="glass-card border-0">
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Бесплатно</div>
                  <p className="text-gray-600">Ограниченное количество мест</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Имя и фамилия
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Телефон
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (___) ___-__-__"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                        Должность
                      </Label>
                      <Input 
                        id="position" 
                        placeholder="Ваша текущая должность"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="questions" className="text-sm font-medium text-gray-700">
                        Вопросы к спикеру (опционально)
                      </Label>
                      <Textarea 
                        id="questions" 
                        placeholder="Какие вопросы вы хотели бы обсудить?"
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                  
                  <div className="text-center space-y-3 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Поделиться с коллегами:</p>
                    <div className="flex justify-center space-x-3">
                      <Button variant="outline" size="sm" className="border-gray-300">
                        <Icon name="Send" size={16} />
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-300">
                        <Icon name="Share" size={16} />
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-300">
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Additional Info */}
              <Card className="glass-card border-0 mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Info" size={20} className="mr-2 text-blue-600" />
                    Дополнительная информация
                  </h4>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <Icon name="Download" size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <p>Запись вебинара будет доступна 7 дней</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="FileText" size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <p>Материалы и презентация в PDF</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="MessageCircle" size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <p>Доступ к чату участников</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="Award" size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <p>Сертификат об участии</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}