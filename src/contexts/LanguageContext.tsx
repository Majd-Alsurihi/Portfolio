
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.certifications': 'Certifications',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.name': 'Majd Alsurihi',
      'hero.title': 'IoT Engineer',
      'hero.subtitle': 'Systems Administration & Automation | Mentorship',
      'hero.description': 'Transforming repetitive processes into intelligent, automated solutions. From hardware to user experience, I engineer smoother paths forward.',
      
      // About Section
      'about.badge': 'About Me',
      'about.title': 'Driven by Automation',
      'about.subtitle': 'I believe in the power of technology to eliminate friction and create seamless experiences.',
      'about.intro': "I'm driven by a simple principle: if a process is repetitive or taking time from me, it should be automated. For me, technology isn't just about code or circuits; it's about finding a point of friction—in a workflow, an OS, or a data pipeline—and engineering a smoother, more intelligent path forward.",
      'about.expanded1': 'This principle has led me to dive deep into system automation, from PowerShell scripts that manage core security to Python applications that connect cloud APIs. My foundation in IT and my passion for IoT give me a full-stack perspective, allowing me to build solutions from the hardware layer right up to the user experience.',
      'about.expanded2': "I believe knowledge is the most powerful tool we can share. As a Teaching Assistant, I've had the privilege of supervising two major IoT & Embedded Systems exhibitions, guiding students from theory to tangible projects. Empowering others to build is, for me, the ultimate expression of technical leadership.",
      'about.expanded3': 'I am always looking for the next challenge to solve and am currently seeking opportunities to apply my passion for automation and problem-solving to build robust, user-focused products. If you believe in making technology work smarter, I'd love to talk.',
      'about.readMore': 'Read My Full Story',
      'about.readLess': 'Read Less',
      
      // Certifications Section
      'certifications.badge': 'Certifications',
      'certifications.title': 'Continuous Learning',
      'certifications.subtitle': 'Formal recognition of my commitment to staying current with emerging technologies and best practices.',
      
      // Contact Section
      'contact.badge': 'Let\'s Connect',
      'contact.title': 'Ready to Build Something Amazing?',
      'contact.subtitle': 'I\'m always excited to discuss new opportunities, collaborate on automation projects, or share knowledge about IoT and system administration. Let\'s connect!',
      'contact.github': 'GitHub Profile',
      'contact.linkedin': 'LinkedIn Profile',
      'contact.email': 'Email Me',
      
      // Projects Section
      'projects.badge': 'Featured Projects',
      'projects.title': 'Building Solutions That Matter',
      'projects.subtitle': 'From IoT systems to automation tools, each project represents a problem solved and a process improved.',
    },
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.skills': 'المهارات',
      'nav.projects': 'المشاريع',
      'nav.certifications': 'الشهادات',
      'nav.contact': 'التواصل',
      
      // Hero Section
      'hero.name': 'مجد السريحي',
      'hero.title': 'مهندس إنترنت الأشياء',
      'hero.subtitle': 'إدارة الأنظمة والأتمتة | الإرشاد',
      'hero.description': 'تحويل العمليات المتكررة إلى حلول ذكية ومؤتمتة. من الأجهزة إلى تجربة المستخدم، أقوم بهندسة مسارات أكثر سلاسة نحو الأمام.',
      
      // About Section
      'about.badge': 'نبذة عني',
      'about.title': 'مدفوع بالأتمتة',
      'about.subtitle': 'أؤمن بقوة التكنولوجيا في إزالة الاحتكاك وخلق تجارب سلسة.',
      'about.intro': 'أنا مدفوع بمبدأ بسيط: إذا كانت العملية متكررة أو تستغرق وقتًا مني، فيجب أتمتتها. بالنسبة لي، التكنولوجيا ليست مجرد أكواد أو دوائر؛ إنها تتعلق بإيجاد نقطة احتكاك - في سير عمل، أو نظام تشغيل، أو خط بيانات - وهندسة مسار أكثر سلاسة وذكاءً نحو الأمام.',
      'about.expanded1': 'هذا المبدأ قادني للغوص عميقًا في أتمتة الأنظمة، من سكريبت PowerShell التي تدير الأمان الأساسي إلى تطبيقات Python التي تربط واجهات برمجة التطبيقات السحابية. أساسي في تكنولوجيا المعلومات وشغفي بإنترنت الأشياء يمنحني منظورًا شاملاً، مما يسمح لي ببناء حلول من طبقة الأجهزة وصولاً إلى تجربة المستخدم.',
      'about.expanded2': 'أؤمن أن المعرفة هي أقوى أداة يمكننا مشاركتها. كمساعد تدريس، حظيت بامتياز الإشراف على معرضين رئيسيين لإنترنت الأشياء والأنظمة المدمجة، وتوجيه الطلاب من النظرية إلى المشاريع الملموسة. تمكين الآخرين من البناء هو، بالنسبة لي، أسمى تعبير عن القيادة التقنية.',
      'about.expanded3': 'أبحث دائمًا عن التحدي التالي للحل وأسعى حاليًا للحصول على فرص لتطبيق شغفي بالأتمتة وحل المشكلات لبناء منتجات قوية تركز على المستخدم. إذا كنت تؤمن بجعل التكنولوجيا تعمل بذكاء أكبر، فأنا أحب أن أتحدث.',
      'about.readMore': 'اقرأ قصتي الكاملة',
      'about.readLess': 'اقرأ أقل',
      
      // Certifications Section
      'certifications.badge': 'الشهادات',
      'certifications.title': 'التعلم المستمر',
      'certifications.subtitle': 'اعتراف رسمي بالتزامي بالبقاء على اطلاع بالتقنيات الناشئة وأفضل الممارسات.',
      
      // Contact Section
      'contact.badge': 'لنتواصل',
      'contact.title': 'مستعد لبناء شيء مذهل؟',
      'contact.subtitle': 'أنا متحمس دائمًا لمناقشة الفرص الجديدة، أو التعاون في مشاريع الأتمتة، أو مشاركة المعرفة حول إنترنت الأشياء وإدارة الأنظمة. لنتواصل!',
      'contact.github': 'ملف GitHub',
      'contact.linkedin': 'ملف LinkedIn',
      'contact.email': 'راسلني',
      
      // Projects Section
      'projects.badge': 'المشاريع المميزة',
      'projects.title': 'بناء حلول مهمة',
      'projects.subtitle': 'من أنظمة إنترنت الأشياء إلى أدوات الأتمتة، كل مشروع يمثل مشكلة محلولة وعملية محسّنة.',
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
