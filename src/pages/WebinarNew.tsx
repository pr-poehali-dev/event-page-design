import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function WebinarNew() {
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
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Главная
              </a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Курсы
              </a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Мероприятия
              </a>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-20 right-20 w-32 h-32 glass-card rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 glass-card-blue rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 py-20 relative">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center animate-fade-in">
            {/* Banner with cutout */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              
              <div className="mb-8">
                <div className="flex justify-center space-x-3 mb-6">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100 px-4 py-2">
                    <Icon name="Wifi" size={16} className="mr-2" />
                    Онлайн вебинар
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
                    <Icon name="Gift" size={16} className="mr-2" />
                    Бесплатно
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Лидерство в эпоху
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}цифровых{" "}
                  </span>
                  изменений
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Узнайте, как современные руководители адаптируются к цифровой трансформации 
                  и создают команды будущего. Практические инструменты от ведущих экспертов.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Зарегистрироваться бесплатно
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg">
                    <Icon name="Play" size={20} className="mr-2" />
                    Посмотреть трейлер
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: "Calendar",
              title: "Дата и время",
              primary: "25 февраля, 2024",
              secondary: "Воскресенье, 19:00 МСК",
              cutout: "top-right"
            },
            {
              icon: "Clock", 
              title: "Продолжительность",
              primary: "2 часа",
              secondary: "С перерывом на Q&A",
              cutout: "top-left"
            },
            {
              icon: "Users",
              title: "Участники",
              primary: "300+ руководителей",
              secondary: "Осталось 127 мест",
              cutout: "bottom-right"
            },
            {
              icon: "Globe",
              title: "Формат",
              primary: "Zoom Meeting",
              secondary: "Ссылка на почту",
              cutout: "bottom-left"
            }
          ].map((item, index) => (
            <Card key={index} className="glass-card border-0 hover:scale-105 transition-all duration-300 animate-fade-in relative overflow-hidden">
              {/* Decorative cutouts */}
              {item.cutout === "top-right" && (
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-500/20 rounded-full">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Icon name={item.icon as any} size={16} className="text-blue-600" />
                  </div>
                </div>
              )}
              {item.cutout === "top-left" && (
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-green-500/20 rounded-full">
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Icon name={item.icon as any} size={16} className="text-green-600" />
                  </div>
                </div>
              )}
              {item.cutout === "bottom-right" && (
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-purple-500/20 rounded-full">
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Icon name={item.icon as any} size={16} className="text-purple-600" />
                  </div>
                </div>
              )}
              {item.cutout === "bottom-left" && (
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-orange-500/20 rounded-full">
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Icon name={item.icon as any} size={16} className="text-orange-600" />
                  </div>
                </div>
              )}
              
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 glass-card-blue rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                  <Icon name={item.icon as any} size={28} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-lg font-bold text-gray-900 mb-1">{item.primary}</p>
                <p className="text-sm text-gray-600">{item.secondary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What You'll Learn */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Что вы узнаете</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Цифровое лидерство",
                  description: "Как руководить командами в условиях удаленной работы и digital-first подходов",
                  icon: "Smartphone"
                },
                {
                  title: "Агильные методы управления", 
                  description: "Внедрение гибких подходов в традиционные бизнес-процессы",
                  icon: "Zap"
                },
                {
                  title: "Управление изменениями",
                  description: "Как безболезненно проводить цифровую трансформацию в компании",
                  icon: "TrendingUp"
                },
                {
                  title: "Мотивация нового поколения",
                  description: "Особенности работы с поколением Z и миллениалами",
                  icon: "Heart"
                }
              ].map((item, index) => (
                <Card key={index} className="glass-card border-0 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Corner cutout with button */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                      <Button size="sm" className="w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700">
                        <Icon name="Plus" size={14} className="text-white" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 pr-16">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 glass-card-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Speaker and Program */}
          <div className="space-y-8">
            {/* Speaker Card */}
            <Card className="glass-card border-0 relative overflow-hidden">
              {/* Decorative corner with badge */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/20 to-orange-500/20">
                <Badge className="absolute top-2 right-2 bg-yellow-500 text-white hover:bg-yellow-500">
                  <Icon name="Award" size={12} className="mr-1" />
                  Эксперт
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">Ведущий вебинара</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 glass-card-blue rounded-2xl flex items-center justify-center">
                    <Icon name="User" size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Сергей Михайлов</h4>
                    <p className="text-blue-600 font-medium">CTO Яндекс</p>
                    <p className="text-gray-600 text-sm">20+ лет в IT-лидерстве</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Автор 3 книг по цифровому лидерству. Провел трансформацию 15+ крупных компаний. 
                    Спикер TEDx и международных конференций.
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">Цифровизация</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">Agile</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Program Preview */}
            <Card className="glass-card border-0 relative overflow-hidden">
              {/* Corner cutout */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Icon name="BookOpen" size={16} className="text-green-600" />
                </div>
              </div>
              
              <CardHeader className="pl-20">
                <CardTitle className="text-xl">Программа вебинара</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: "19:00-19:15", topic: "Добро пожаловать и знакомство" },
                  { time: "19:15-19:45", topic: "Тренды цифрового лидерства 2024" },
                  { time: "19:45-20:15", topic: "Кейс: трансформация крупной IT-команды" },
                  { time: "20:15-20:45", topic: "Практические инструменты" },
                  { time: "20:45-21:00", topic: "Q&A и завершение" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-16 text-sm font-medium text-blue-600">{item.time}</div>
                    <div className="text-gray-700">{item.topic}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="text-center">
          <Card className="glass-card border-0 max-w-2xl mx-auto relative overflow-hidden">
            {/* Multiple cutouts for buttons */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full">
              <Button size="sm" className="absolute top-2 left-2 w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700">
                <Icon name="Share" size={14} className="text-white" />
              </Button>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full">
              <Button size="sm" className="absolute top-2 right-2 w-8 h-8 p-0 bg-green-600 hover:bg-green-700">
                <Icon name="Heart" size={14} className="text-white" />
              </Button>
            </div>
            
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Готовы стать лидером будущего?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Присоединяйтесь к 300+ руководителям, которые уже зарегистрировались
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Зарегистрироваться бесплатно
                </Button>
                <div className="text-sm text-gray-500">
                  <Icon name="Users" size={16} className="inline mr-1" />
                  Осталось 127 мест
                </div>
              </div>
              
              <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-green-600" />
                  Запись вебинара
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-green-600" />
                  Материалы PDF
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="mr-2 text-green-600" />
                  Сертификат
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}