import React, { useState } from 'react';
import { Users, BookOpen, FlaskConical, Newspaper, Mail, ChevronDown, ChevronUp, Menu, X, Target, Award, GraduationCap } from 'lucide-react';

// Helper component for consistent section styling
const Section = ({ id, title, icon, children, className = '' }) => (
  <section id={id} className={`py-12 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ml-4">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#vision', label: 'Our Vision' },
    { href: '#research', label: 'Research' },
    { href: '#join', label: 'Join Us' },
    { href: '#news', label: 'News' },
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-700">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-bold text-blue-900">
                NV-NMR Research Group
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:bg-blue-100 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1600x900/a0aec0/ffffff?text=Diamond+NV+Center')" }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Pioneering NV-NMR at Charles University</h1>
                <p className="text-lg md:text-2xl max-w-3xl">
                    Join us in establishing the first NV-NMR laboratory in the Czech Republic, exploring diamond nanostructuring for next-generation quantum sensing.
                </p>
            </div>
        </section>

        {/* About the PI / Vision Section */}
        <Section id="vision" title="Our Vision" icon={<Target className="w-8 h-8 text-blue-600" />} className="bg-white">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/3 text-center">
                    <img src="https://placehold.co/400x400/e2e8f0/333333?text=PI+Photo" alt="Principal Investigator" className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-lg" />
                    <h3 className="text-2xl font-bold mt-6 text-gray-800">Dr. [Your Name]</h3>
                    <p className="text-gray-500">Group Leader</p>
                </div>
                <div className="md:w-2/3">
                    <p className="text-lg mb-4">
                        Welcome! We are launching a new research group at Charles University with the ambitious goal of becoming a leading center for NV-NMR research. Our vision is to build a highly interdisciplinary team that pushes the frontiers of quantum sensing by harnessing the unique properties of Nitrogen-Vacancy (NV) centers in diamond.
                    </p>
                    <p className="text-lg">
                        This is a unique opportunity to be a founding member of a new lab. As part of our initial team, you will play a critical role in shaping our research direction, building our experimental setup from the ground up, and establishing a vibrant, collaborative, and innovative scientific culture. We are looking for passionate and creative minds to join us on this exciting journey.
                    </p>
                </div>
            </div>
        </Section>

        {/* Research Section */}
        <Section id="research" title="Foundational Research Projects" icon={<FlaskConical className="w-8 h-8 text-blue-600" />}>
          <div className="text-center mb-12">
            <p className="max-w-3xl mx-auto text-lg">As a new group, our initial projects are designed to build a strong foundation for long-term success. Students joining now will have the chance to lead these key efforts.</p>
          </div>
          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project 1: Build a State-of-the-Art NV-NMR Setup</h3>
                    <p>A primary objective is to construct our core experimental platform. This involves integrating optical, microwave, and radiofrequency components for the coherent control and readout of NV centers. This project offers hands-on experience in experimental design, hardware integration, and control software development.</p>
                </div>
                <img src="https://placehold.co/600x400/dbeafe/3b82f6?text=Experimental+Setup" alt="Experimental Setup" className="rounded-lg shadow-md" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <img src="https://placehold.co/600x400/dbeafe/3b82f6?text=Diamond+Nanostructuring" alt="Diamond Nanostructuring" className="rounded-lg shadow-md md:order-last" />
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project 2: Master Diamond Surface Chemistry</h3>
                    <p>A key to unlocking NV-NMR's potential lies in controlling the diamond's surface. This project focuses on developing protocols for surface termination and characterization using techniques like XPS. You will investigate how surface properties affect spin coherence (T₂), a critical parameter for sensor performance.</p>
                </div>
            </div>
             <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project 3: Optimize Advanced Polarization Schemes</h3>
                    <p>To maximize sensitivity, we will implement and refine advanced polarization techniques like double-channel (DCh) polarization. This project involves systematically studying how material properties influence polarization efficiency, defining the ideal diamond characteristics for high-performance NV-NMR.</p>
                </div>
                <img src="https://placehold.co/600x400/dbeafe/3b82f6?text=Polarization+Schemes" alt="Polarization Schemes" className="rounded-lg shadow-md" />
            </div>
          </div>
        </Section>

        {/* Join Us Section */}
        <Section id="join" title="Join Our Team" icon={<Users className="w-8 h-8 text-blue-600" />} className="bg-white">
            <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">We Are Hiring!</h3>
                <p className="text-xl text-gray-600 mb-12">
                    We are actively seeking motivated and talented students to be the founding pillars of our research group. This is your chance to make a significant impact on a new and exciting field of research.
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                        <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
                        <h4 className="text-2xl font-bold mb-3">PhD Positions</h4>
                        <p className="mb-4">We have several fully-funded PhD positions available for students with a background in physics, chemistry, materials science, or a related field. Ideal candidates are curious, driven, and excited by hands-on experimental work. You will have the opportunity to lead one of our foundational projects.</p>
                        <a href="#contact-info" className="font-semibold text-blue-600 hover:underline">Apply Now &rarr;</a>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                        <Award className="w-12 h-12 text-blue-600 mb-4" />
                        <h4 className="text-2xl font-bold mb-3">Master's & Bachelor's Theses</h4>
                        <p className="mb-4">Are you looking for a cutting-edge topic for your thesis project? We offer projects that can be tailored to fit the scope of a Master's or Bachelor's degree. Get valuable research experience and contribute to the development of our new lab.</p>
                        <a href="#contact-info" className="font-semibold text-blue-600 hover:underline">Inquire About Projects &rarr;</a>
                    </div>
                </div>
            </div>
        </Section>

        {/* News Section */}
        <Section id="news" title="Latest News" icon={<Newspaper className="w-8 h-8 text-blue-600" />}>
            <div className="space-y-6 max-w-3xl mx-auto">
                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                    <p className="font-semibold text-gray-800">July 15, 2025</p>
                    <p className="text-gray-700 mt-1">The NV-NMR Research Group is officially established at Charles University! We have secured funding and are excited to begin building our lab and our team. We are now actively recruiting our first students.</p>
                </div>
            </div>
        </Section>

        {/* Contact Section */}
        <section id="contact-info" className="py-12 md:py-20 bg-gray-800 text-white">
          <div className="max-w-3xl mx-auto text-center px-4">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg text-gray-300 mb-6">If you are interested in joining our group, please send your CV, a cover letter detailing your research interests, and academic transcripts to Dr. [Your Name].</p>
              <div className="bg-gray-700 p-8 rounded-lg inline-block">
                  <h4 className="text-xl font-semibold text-white">Dr. [Your Name]</h4>
                  <p className="text-gray-300 mt-2">Department of [Your Department]<br/>
                  Faculty of [Your Faculty], Charles University</p>
                  <p className="mt-4">
                      <a href="mailto:your.email@example.com" className="text-blue-400 font-bold text-lg hover:underline">your.email@example.com</a>
                  </p>
              </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NV-NMR Research Group | Charles University. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
