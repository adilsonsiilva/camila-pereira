import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from './data/portfolioData';
import type { Project, Experience, Education, Language, PortfolioData } from './types';


import { Section } from './components/Section';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { BehanceIcon } from './components/icons/BehanceIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';
import { MenuIcon } from './components/icons/MenuIcon';
import { CloseIcon } from './components/icons/CloseIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { FolderIcon } from './components/icons/FolderIcon';
import { LightbulbIcon } from './components/icons/LightbulbIcon';
import GlobeIcon from "./components/icons/GlobeIcon";
import { GraduationCapIcon } from './components/icons/GraduationCapIcon';
import { EnvelopeIcon } from './components/icons/EnvelopeIcon';
import { VideoModal } from './components/VideoModal';
import { PdfModal } from './components/PdfModal';
import { RadioPlayerModal } from './components/RadioPlayerModal';
import { DownloadIcon } from './components/icons/DownloadIcon';
import { HeartIcon } from './components/icons/HeartIcon';
import EasterEggPopup from './components/EasterEggPopup';


const socialIcons: { [key: string]: React.FC<{ className?: string }> } = {
  LinkedIn: LinkedInIcon,
  Behance: BehanceIcon,
  Instagram: InstagramIcon,
};

// --- HELPER ICONS ---
const BrushStrokeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 523 530" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M304.992 529.5C465.492 529.5 540.992 429 521.492 287C501.992 145 423.492 0.5 262.992 0.5C102.492 0.5 12.9925 106.5 1.49253 252C-10.0075 397.5 144.492 529.5 304.992 529.5Z" fill="#0D9488" />
    </svg>
);

const CertificationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="#1E293B" strokeWidth="4"/>
        <path d="M50 20V36M50 64V80M20 50H36M64 50H80M35.2 35.2L44.8 44.8M55.2 55.2L64.8 64.8M35.2 64.8L44.8 55.2M55.2 44.8L64.8 35.2" stroke="#1E293B" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);


// --- CORE COMPONENTS ---

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = ['Experiência', 'Projetos', 'Formação', 'Contato'];

    const handleScrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            const headerOffset = 80; // Adjust this value based on your header's height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);


    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-off-white/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
                <nav className="container mx-auto px-6 md:px-10 max-w-5xl h-20 flex justify-between items-center">
                    <span className="md:hidden w-10"></span>
                    <ul className="hidden md:flex items-center space-x-10">
                        {navItems.map(item => (
                            <li key={item}>
                                <a 
                                    onClick={() => handleScrollToSection(item)}
                                    className="relative text-base font-medium text-gray-700 hover:text-brand-dark transition-colors duration-300 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-brand-teal after:rounded-full after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="md:hidden text-brand-dark z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                    </button>
                </nav>
            </header>

            <div className={`fixed inset-0 z-40 bg-off-white transition-opacity duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full">
                     <ul className="flex flex-col items-center space-y-10 text-center">
                        {navItems.map((item, index) => (
                            <li 
                                key={item}
                                className={`transform-gpu transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${100 + index * 75}ms` : '0ms' }}
                            >
                                <a
                                    onClick={() => handleScrollToSection(item)}
                                    className="text-3xl font-bold text-brand-dark hover:text-brand-teal transition-colors duration-300 cursor-pointer"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const HeroSection: React.FC<{ profile: PortfolioData['profile'] }> = ({ profile }) => (
  <section id="hero" className="min-h-screen flex items-center bg-off-white">
    <div className="container mx-auto px-6 md:px-10 max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 pt-20">
      <div className="relative w-3/4 md:w-full mx-auto animate-fade-in-up" style={{ animationDelay: '200ms'}}>
          <BrushStrokeIcon className="absolute -top-10 -left-10 w-full h-full transform -rotate-12 opacity-80" />
          <img src={profile.avatarUrl} alt={profile.name} className="relative w-full aspect-square object-cover rounded-full shadow-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-off-white rounded-full p-2 shadow-lg animate-spin" style={{ animation: 'spin 20s linear infinite' }}>
              <CertificationIcon />
          </div>
      </div>
      <div className="text-center md:text-left animate-fade-in-up" style={{ animationDelay: '400ms'}}>
        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-4">
          {profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-brand-teal mb-8">
          {profile.title}
        </h2>
        <p className="text-base text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed mb-10">
          {profile.summary}
        </p>
        <div className="flex justify-center md:justify-start space-x-12">
            {profile.stats.map(stat => (
                <div key={stat.label}>
                    <p className="text-4xl font-bold text-brand-dark">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void; }> = ({ project, index, onClick }) => {
    const isYoutubeLink = project.link.includes('youtube.com') || project.link.includes('youtu.be');
    const isPdfLink = project.link.endsWith('.pdf');
    const isAudioLink = project.link.endsWith('.mp3');

    const renderIcon = () => {
        if (isYoutubeLink) {
            return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          );
        } else if (isPdfLink) {
            return <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
        } else if (isAudioLink) {
            return (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
            );
          } else {
            return <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>;

        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full cursor-pointer" onClick={onClick}>
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute w-full h-full object-cover"
                />
                 {isYoutubeLink && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                             <svg className="w-8 h-8 text-brand-dark ml-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">{tag}</span>
                    ))}
                </div>
                <button onClick={onClick} className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-xl text-white bg-brand-teal hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors duration-200">
                    <span className="text-sm">Ver Projeto</span>
                    {renderIcon()}
                </button>
            </div>
        </div>
    );
};

const Footer: React.FC<{ name: string }> = ({ name }) => (
    <footer className="bg-off-white border-t border-gray-200/60 mt-20">
        <div className="container mx-auto px-6 md:px-10 py-8 text-center flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
            <p className="text-sm text-gray-500 flex items-center gap-1.5">
                Desenvolvido com <HeartIcon className="w-4 h-4 text-red-500" /> e muita criatividade.
            </p>
        </div>
    </footer>
);

const App: React.FC = () => {
  const [showEasterEggPopup, setShowEasterEggPopup] = useState(false);
  const [videoModalState, setVideoModalState] = useState<{isOpen: boolean; videoId: string | null}>({ isOpen: false, videoId: null });
  const [pdfModalState, setPdfModalState] = useState<{ isOpen: boolean; pdfUrl: string | null }>({ isOpen: false, pdfUrl: null });
  const [radioModalState, setRadioModalState] = useState<{ isOpen: boolean; project: Project | null }>({ isOpen: false, project: null });
  const experienceColors = ['bg-brand-teal', 'bg-brand-teal', 'bg-brand-teal'];
  const displaySocials = portfolioData.contact.socials.filter(s => s.name === 'LinkedIn' || s.name === 'Instagram');

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === '/planeta-verde') {
        setShowEasterEggPopup(true);
      } else {
        setShowEasterEggPopup(false);
      }
    };

    // Initial check
    handleLocationChange();

    // Listen for changes in the URL hash (for single-page applications)
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);
  
  const handleCloseEasterEgg = () => {
    setShowEasterEggPopup(false);
  };

  const getYouTubeId = (url: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*$/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleProjectClick = useCallback((project: Project) => {
      const videoId = getYouTubeId(project.link);
      const isPdfLink = project.link.endsWith('.pdf');
      const isAudioLink = project.link.endsWith('.mp3');

      if (videoId) {
          setVideoModalState({ isOpen: true, videoId });
      } else if (isPdfLink) {
          setPdfModalState({ isOpen: true, pdfUrl: project.link });
      } else if (isAudioLink) {
          setRadioModalState({ isOpen: true, project });
      } else {
          window.open(project.link, '_blank', 'noopener,noreferrer');
      }
  }, []);

  return (
    <div className="bg-off-white">
      <Header />
      <main>
        <HeroSection profile={portfolioData.profile} />
        
        <Section id="experiência" title="Minha Experiência" icon={<BriefcaseIcon className="w-10 h-10 text-brand-teal" />}>
            <div className="grid grid-cols-1 gap-12">
                {portfolioData.experience.map((exp, index) => (
                    <div key={index} className="relative grid grid-cols-[1fr_auto_1fr] gap-4">
                        {/* Left Column (employer, period) */}
                        <div className="text-right pr-4">
                             <h4 className="font-bold text-brand-dark text-lg">{exp.employer}</h4>
                             <p className="text-gray-500 text-sm">{exp.period}</p>
                        </div>
                        
                        {/* Timeline Column */}
                        <div className="relative flex flex-col items-center">
                            {/* Timeline Dot */}
                            <div className="h-5 w-5 rounded-full border-5 border-off-white z-10">
                               <div className={`h-full w-full rounded-full ${experienceColors[index % experienceColors.length]}`}></div>
                            </div>

                            {/* Dashed Line */}
                            {index < portfolioData.experience.length - 1 && (
                                <div className="absolute top-[18px] bottom-[-24px] w-2 border-l border-dashed border-gray-300"></div>
                            )}
                        </div>

                        {/* Right Column (role, description) */}
                        <div className="text-left pl-4">
                            <h3 className="text-xl font-bold text-brand-dark">{exp.role}</h3>
                            <div className="text-gray-500 text-sm leading-relaxed space-y-2 mt-2">
                                {exp.description.map((item, i) => <p key={i}>{item}</p>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
        
        <Section id="projetos" title="Meus Projetos" icon={<FolderIcon className="w-10 h-10 text-brand-teal" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map((project, index) => <ProjectCard key={index} project={project} index={index} onClick={() => handleProjectClick(project)} />)}
            </div>
        </Section>

        <Section id="formação" title="Formação" icon={<GraduationCapIcon className="w-10 h-10 text-brand-teal" />}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">Acadêmica</h3>
                    <ul className="space-y-4">
                        {portfolioData.academic.map((edu, index) => (
                            <li key={index} className="pb-3">
                                <h4 className="font-bold text-brand-dark">{edu.degree}</h4>
                                <p className="text-gray-600 text-sm mt-1">{edu.institution}</p>
                                <p className="text-gray-500 text-xs mt-1">{edu.period}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-6">Idiomas</h3>
                    <ul className="space-y-4">
                        {portfolioData.languages.map((lang, index) => (
                            <li key={index} className="pb-3">
                                <h4 className="font-bold text-brand-dark">{lang.name}</h4>
                                <p className="text-gray-600 text-sm mt-1">{lang.level}</p>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-2xl font-bold text-brand-dark mb-6 mt-12">Certificações</h3>
                    <ul className="space-y-4">
                        {portfolioData.certifications.map((cert, index) => (
                            <li key={index} className="pb-3">
                                <h4 className="font-bold text-brand-dark">{cert.degree}</h4>
                                <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
                                <p className="text-gray-500 text-xs mt-1">{cert.period}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>

        <Section id="contato" title="Vamos criar algo incrível juntos?" icon={<EnvelopeIcon className="w-10 h-10 text-brand-teal" />}>
            <div className="text-center max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 mb-12">
                    Estou sempre em busca de novos desafios e colaborações. Se você tem um projeto em mente, entre em contato.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Email Card */}
                    <a href={`mailto:${portfolioData.contact.email}`} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
                        <EnvelopeIcon className="w-8 h-8 mb-3 text-brand-teal" />
                        <h4 className="font-semibold text-gray-500 text-sm">Email</h4>
                        <p className="text-brand-dark font-medium break-words text-xs">{portfolioData.contact.email}</p>
                    </a>
                    {/* Social Cards */}
                    {displaySocials.map(social => {
                        const Icon = socialIcons[social.name];
                        const displayValue = social.name === 'LinkedIn' 
                            ? '/in/camilapereiramidia' 
                            : '@cmlspace';
                        return (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
                                {Icon && <Icon className="w-8 h-8 mb-3 text-brand-teal" />}
                                <h4 className="font-semibold text-gray-500 text-sm">{social.name}</h4>
                                <p className="text-brand-dark font-medium text-xs">{displayValue}</p>
                            </a>
                        )
                    })}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href={`mailto:${portfolioData.contact.email}`} className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-brand-teal hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-md">
                        <EnvelopeIcon className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                    </a>
                    <a href="/camila-pereira-cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-brand-dark bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark/50 transition-all duration-300 w-full sm:w-auto">
                        <DownloadIcon className="w-5 h-5 mr-2" />
                        Download CV
                    </a>
                </div>
            </div>
        </Section>
      </main>
      <Footer name={portfolioData.profile.name} />

      <VideoModal 
        isOpen={videoModalState.isOpen} 
        onClose={() => setVideoModalState({ isOpen: false, videoId: null })} 
        videoId={videoModalState.videoId}
      />
      <PdfModal
        isOpen={pdfModalState.isOpen}
        onClose={() => setPdfModalState({ isOpen: false, pdfUrl: null })}
        pdfUrl={pdfModalState.pdfUrl}
      />
      <RadioPlayerModal
        isOpen={radioModalState.isOpen}
        onClose={() => setRadioModalState({ isOpen: false, project: null })}
        project={radioModalState.project}
      />
      <EasterEggPopup isOpen={showEasterEggPopup} onClose={handleCloseEasterEgg} />
    </div>
  );
};

export default App;