import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
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

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Развивайте лидерские
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}навыки{" "}
              </span>
              с экспертами
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-normal">
              Образовательная платформа для современных руководителей. 
              Практические курсы, мастер-классы и нетворкинг мероприятия от ведущих экспертов индустрии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Посмотреть мероприятия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные курсы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучайте актуальные навыки управления с практическими заданиями и обратной связью от экспертов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Эффективное лидерство",
              description: "Основы управления командой и развития лидерских качеств",
              duration: "8 недель",
              level: "Базовый",
              students: "1,200+",
              rating: "4.9",
              icon: "Crown"
            },
            {
              title: "Стратегическое мышление",
              description: "Развитие навыков стратегического планирования и принятия решений",
              duration: "6 недель", 
              level: "Продвинутый",
              students: "850+",
              rating: "4.8",
              icon: "Target"
            },
            {
              title: "Управление изменениями",
              description: "Методы эффективного внедрения изменений в организации",
              duration: "10 недель",
              level: "Экспертный", 
              students: "650+",
              rating: "4.9",
              icon: "TrendingUp"
            }
          ].map((course, index) => (
            <Card key={index} className="glass-card-blue hover:scale-105 transition-all duration-300 animate-fade-in border-0">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center animate-float">
                    <Icon name={course.icon as any} size={28} className="text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Star" size={16} className="mr-1 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Записаться на курс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Предстоящие мероприятия</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Участвуйте в мастер-классах, воркшопах и нетворкинг событиях с ведущими экспертами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Мастер-класс: Построение высокоэффективных команд",
              speaker: "Анна Петрова",
              speakerRole: "CEO TechCorp",
              date: "15 февраля, 2024",
              time: "19:00 - 21:00",
              format: "Онлайн",
              participants: "120",
              price: "Бесплатно",
              tags: ["Лидерство", "Команда"]
            },
            {
              title: "Воркшоп: Цифровая трансформация бизнеса",
              speaker: "Михаил Иванов",
              speakerRole: "Digital Transformation Expert",
              date: "22 февраля, 2024", 
              time: "18:00 - 20:30",
              format: "Офлайн",
              participants: "45",
              price: "2,500 ₽",
              tags: ["Цифровизация", "Стратегия"]
            },
            {
              title: "Нетворкинг: Встреча руководителей IT-компаний",
              speaker: "Елена Смирнова",
              speakerRole: "Основатель IT Leaders Club",
              date: "1 марта, 2024",
              time: "19:30 - 22:00", 
              format: "Офлайн",
              participants: "80",
              price: "1,200 ₽",
              tags: ["Нетворкинг", "IT"]
            },
            {
              title: "Семинар: Управление конфликтами в коллективе",
              speaker: "Дмитрий Козлов",
              speakerRole: "Бизнес-психолог",
              date: "8 марта, 2024",
              time: "10:00 - 13:00",
              format: "Гибрид",
              participants: "200",
              price: "3,000 ₽", 
              tags: ["Психология", "HR"]
            }
          ].map((event, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in border-0 relative overflow-hidden">
              {/* Decorative element with cutout */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent">
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Icon name="Calendar" size={16} className="text-blue-600" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 pr-20">
                  {event.title}
                </CardTitle>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 glass-card-blue rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{event.speaker}</p>
                    <p className="text-sm text-gray-600">{event.speakerRole}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Icon name="Calendar" size={16} className="mr-2 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icon name="Clock" size={16} className="mr-2 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icon name="MapPin" size={16} className="mr-2 text-blue-600" />
                    {event.format}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icon name="Users" size={16} className="mr-2 text-blue-600" />
                    {event.participants} участников
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">
                    {event.price}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Записаться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-0 rounded-none mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">LeaderEdu</span>
              </div>
              <p className="text-gray-600 mb-4">
                Образовательная платформа для развития лидерских навыков современных руководителей.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Обучение</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Курсы</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Мероприятия</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Мастер-классы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">О нас</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Преподаватели</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Поддержка</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Помощь</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Сообщество</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 LeaderEdu. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}