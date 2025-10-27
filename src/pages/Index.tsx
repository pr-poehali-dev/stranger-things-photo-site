import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const characters = [
    { 
      name: 'Одиннадцать', 
      role: 'Девочка с телекинезом',
      image: 'https://placehold.co/300x400/0a0a0a/ff0040?text=11'
    },
    { 
      name: 'Майк Уилер', 
      role: 'Лидер группы',
      image: 'https://placehold.co/300x400/0a0a0a/00d9ff?text=Mike'
    },
    { 
      name: 'Дастин Хендерсон', 
      role: 'Умник команды',
      image: 'https://placehold.co/300x400/0a0a0a/ffd700?text=Dustin'
    },
    { 
      name: 'Лукас Синклер', 
      role: 'Скептик группы',
      image: 'https://placehold.co/300x400/0a0a0a/ff0040?text=Lucas'
    },
    { 
      name: 'Уилл Байерс', 
      role: 'Пропавший мальчик',
      image: 'https://placehold.co/300x400/0a0a0a/00d9ff?text=Will'
    },
    { 
      name: 'Джойс Байерс', 
      role: 'Мать Уилла',
      image: 'https://placehold.co/300x400/0a0a0a/ffd700?text=Joyce'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/2acd2ac2-2247-43d3-abe2-9def9c609d44/files/367c93f6-9555-449a-9e35-fd2c687d60d5.jpg',
    'https://cdn.poehali.dev/projects/2acd2ac2-2247-43d3-abe2-9def9c609d44/files/b2e82d47-5cda-4964-af2a-6dd281876999.jpg',
    'https://cdn.poehali.dev/projects/2acd2ac2-2247-43d3-abe2-9def9c609d44/files/39ed3979-75f1-422d-82c7-33d4be1d7c1c.jpg',
    'https://cdn.poehali.dev/projects/2acd2ac2-2247-43d3-abe2-9def9c609d44/files/367c93f6-9555-449a-9e35-fd2c687d60d5.jpg',
    'https://cdn.poehali.dev/projects/2acd2ac2-2247-43d3-abe2-9def9c609d44/files/b2e82d47-5cda-4964-af2a-6dd281876999.jpg',
    'https://cdn.poehali.dev/projects/2acd2ac2-2247-43d3-abe2-9def9c609d44/files/39ed3979-75f1-422d-82c7-33d4be1d7c1c.jpg',
    'https://placehold.co/400x300/0a0a0a/ff0040?text=Scene+7',
    'https://placehold.co/400x300/0a0a0a/00d9ff?text=Scene+8'
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-primary/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-primary neon-text animate-neon-flicker">
              STRANGER THINGS
            </h1>
            <div className="flex gap-2 md:gap-4">
              {['home', 'about', 'characters', 'gallery'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section)}
                  className={activeSection === section ? 'neon-border' : ''}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О сериале'}
                  {section === 'characters' && 'Персонажи'}
                  {section === 'gallery' && 'Галерея'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <section className="animate-fade-in">
            <div className="retro-grid rounded-lg p-12 md:p-20 text-center mb-12 border border-primary/30">
              <h2 className="text-5xl md:text-7xl font-bold text-primary neon-text mb-6">
                ОЧЕНЬ СТРАННЫЕ ДЕЛА
              </h2>
              <p className="text-xl md:text-2xl text-secondary neon-text max-w-3xl mx-auto">
                Добро пожаловать в мир тайн и приключений 80-х
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-primary/30 hover:border-primary transition-all duration-300 neon-border">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Персонажи</h3>
                  <p className="text-muted-foreground">Познакомьтесь с героями истории</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-secondary/30 hover:border-secondary transition-all duration-300 neon-border">
                <CardContent className="p-6 text-center">
                  <Icon name="Film" size={48} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-2 text-secondary">О сериале</h3>
                  <p className="text-muted-foreground">История создания шедевра</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-accent/30 hover:border-accent transition-all duration-300 neon-border">
                <CardContent className="p-6 text-center">
                  <Icon name="Images" size={48} className="mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2 text-accent">Галерея</h3>
                  <p className="text-muted-foreground">Лучшие кадры сериала</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary neon-text mb-8">
              О СЕРИАЛЕ
            </h2>
            
            <Card className="bg-card border-primary/30 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">История</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  "Очень странные дела" — американский научно-фантастический сериал ужасов, 
                  созданный братьями Даффер. Действие происходит в вымышленном городке Хокинс, 
                  штат Индиана, в 1980-х годах.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  Сериал начинается с таинственного исчезновения мальчика по имени Уилл Байерс. 
                  Его друзья, семья и местный шериф начинают поиски, которые приводят их к 
                  секретным правительственным экспериментам, сверхъестественным силам и одной 
                  очень странной девочке.
                </p>

                <h3 className="text-2xl font-bold text-accent mb-4">Атмосфера 80-х</h3>
                <p className="text-foreground leading-relaxed">
                  Сериал идеально воссоздаёт атмосферу 80-х годов: от музыки и моды до 
                  технологий той эпохи. Многочисленные отсылки к культовым фильмам того 
                  времени делают просмотр особенно увлекательным для ценителей ретро-культуры.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-secondary/30">
                <CardContent className="p-6">
                  <Icon name="Award" size={32} className="mb-3 text-secondary" />
                  <h4 className="text-xl font-bold mb-2">Награды</h4>
                  <p className="text-muted-foreground">
                    Номинации на премии "Эмми", "Золотой глобус" и множество других наград
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-accent/30">
                <CardContent className="p-6">
                  <Icon name="Star" size={32} className="mb-3 text-accent" />
                  <h4 className="text-xl font-bold mb-2">Рейтинг</h4>
                  <p className="text-muted-foreground">
                    Один из самых популярных сериалов Netflix с миллионами фанатов по всему миру
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'characters' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary neon-text mb-8">
              ПЕРСОНАЖИ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-primary/30 hover:border-primary transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{character.name}</h3>
                    <p className="text-muted-foreground">{character.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'gallery' && (
          <section className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary neon-text mb-8">
              ГАЛЕРЕЯ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] overflow-hidden rounded-lg border border-primary/30 hover:border-primary transition-all duration-300 group"
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-card border-t border-primary/30 mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Фан-сайт сериала "Очень странные дела" • 2025
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Сделано с ❤️ в стиле 80-х
          </p>
        </div>
      </footer>
    </div>
  );
}