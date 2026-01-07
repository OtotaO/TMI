import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Phone, 
  Users, 
  MapPin, 
  ArrowRight, 
  Heart, 
  ChevronDown, 
  Sun, 
  Droplets,
  Bird,
  BookOpen,
  Smartphone
} from 'lucide-react';

const MusaProject = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <Sprout size={24} />
            </div>
            <span className={`text-xl font-bold ${scrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
              The Musa Initiative
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Story', 'Business Plan', 'Needs', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-medium hover:text-green-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection('needs')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition-colors shadow-lg"
          >
            Support Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=2000&auto=format&fit=crop" 
            alt="Landscape of The Gambia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            A Sustainable Future in The Gambia
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            From Survival to <span className="text-green-400">Sustainability</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-stone-200">
            Helping a young entrepreneur in The Gambia transition from hardship to running a sustainable agricultural business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('business-plan')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View The Plan <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Read Musa's Story
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
                <img 
                  src="/assets/images/musa-walking-path.jpg" 
                  alt="Musa walking down a path in The Gambia" 
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500 max-w-xs hidden md:block">
                  <p className="text-stone-600 italic">"I stopped at grade 9 to support my family. I am ready to work."</p>
                  <p className="text-stone-400 text-sm mt-2">- Musa</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Who is Musa?</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Musa is a 22-year-old living in The Gambia. After the passing of his brother and father, the responsibility of caring for his family—including his ailing mother—fell onto his shoulders.
              </p>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Despite showing promise in school and possessing strong English skills, Musa was forced to leave education at Grade 9 due to financial constraints. He currently faces severe economic hardship, often struggling to secure basic food and care for his mother.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                But Musa isn't asking for a handout forever. He is asking for a <strong>hand-up</strong>. He has the energy and the drive to start a business. He just lacks the capital to begin.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <MapPin className="text-green-600" />
                  <span className="font-medium text-stone-700">The Gambia</span>
                </div>
                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <BookOpen className="text-green-600" />
                  <span className="font-medium text-stone-700">Grade 9 Education</span>
                </div>
                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <Users className="text-green-600" />
                  <span className="font-medium text-stone-700">Sole Provider</span>
                </div>
                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <Sun className="text-green-600" />
                  <span className="font-medium text-stone-700">Aspiring Entrepreneur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Real photos from The Gambia */}
      <section className="py-10 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">Life in The Gambia</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64 rounded-xl overflow-hidden relative group">
              <img 
                src="/assets/images/gambia-life-1.jpg" 
                alt="Life in The Gambia - Image 1" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="h-64 rounded-xl overflow-hidden relative group">
              <img 
                src="/assets/images/gambia-life-2.jpg" 
                alt="Life in The Gambia - Image 2" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="h-64 rounded-xl overflow-hidden relative group">
              <img 
                src="/assets/images/gambia-life-3.jpg" 
                alt="Life in The Gambia - Image 3" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
          </div>
          <p className="text-center text-stone-500 mt-4 text-sm">
            Visuals representing the environment and agricultural potential.
          </p>
        </div>
      </section>

      {/* Business Plan Section */}
      <section id="business-plan" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">The Proposal: Agro-Entrepreneurship</h2>
            <p className="text-stone-600">
              Leveraging the "Gambia Native Plant & Natural-Resource Opportunities" research, we have identified two viable paths for Musa to achieve self-sufficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1: Poultry */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-orange-400">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Bird size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan A: Small-Scale Poultry</h3>
              <p className="text-stone-600 mb-6">
                Poultry farming is a high-demand industry in The Gambia. It provides a quick turnaround for profit compared to crops.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <div className="mt-1 w-2 h-2 rounded-full bg-orange-400"></div>
                  <span><strong>Low barrier to entry:</strong> Requires small land area and basic structures.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <div className="mt-1 w-2 h-2 rounded-full bg-orange-400"></div>
                  <span><strong>Nutrition:</strong> Provides eggs/meat for the family and for sale.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <div className="mt-1 w-2 h-2 rounded-full bg-orange-400"></div>
                  <span><strong>Scalability:</strong> Can start with 50 chicks and grow.</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg">
                <span className="text-orange-800 font-bold block mb-1">Estimated Startup Cost</span>
                <span className="text-3xl font-bold text-stone-800">$450 USD</span>
                <span className="text-sm text-stone-500 block">Includes feed, chicks, and coop materials.</span>
              </div>
            </div>

            {/* Option 2: Cashew & Native Plants */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-500">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Sprout size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan B: Cashew & Native Plants</h3>
              <p className="text-stone-600 mb-6">
                Utilizing local knowledge of native resources. Cashew farming is a robust export crop, though it requires a longer maturation time.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                  <span><strong>Sustainability:</strong> Resistant to climate variations in the region.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                  <span><strong>High Value:</strong> Cashews command strong market prices.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                  <span><strong>Intercropping:</strong> Can grow vegetables between trees for immediate cash flow.</span>
                </li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <span className="text-green-800 font-bold block mb-1">Estimated Startup Cost</span>
                <span className="text-3xl font-bold text-stone-800">$300 USD</span>
                <span className="text-sm text-stone-500 block">Includes seeds, tools, and irrigation basics.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Needs Section */}
      <section id="needs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Immediate Obstacles</h2>
              <p className="text-stone-600 mb-6">
                Before the business can launch, Musa faces critical infrastructure barriers. Communication and basic sustenance are currently unreliable.
              </p>
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-red-800 font-bold mb-2 flex items-center gap-2">
                  <Heart size={18} className="fill-current" /> Critical Situation
                </h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  Musa is currently at risk of eviction by his landlord. His primary income source—collecting firewood—has become unsustainable as he struggles to balance this low-income work with the demands of being the sole breadwinner for his mother and younger siblings.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="space-y-6">
                {/* Need Item 1 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 hover:border-green-400 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Smartphone size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-lg">Reliable Smartphone</h4>
                      <span className="text-sm font-bold bg-stone-100 px-2 py-1 rounded text-stone-600">$150 goal</span>
                    </div>
                    <p className="text-stone-500 text-sm">
                      Essential for managing the business, researching agricultural techniques, and maintaining contact with mentors/investors.
                    </p>
                    <div className="w-full bg-stone-200 rounded-full h-2 mt-3">
                      <div className="bg-blue-500 h-2 rounded-full w-[20%]"></div>
                    </div>
                  </div>
                </div>

                {/* Need Item 2 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 hover:border-green-400 transition-colors">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600">
                    <Droplets size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-lg">Emergency Food & Medical Fund</h4>
                      <span className="text-sm font-bold bg-stone-100 px-2 py-1 rounded text-stone-600">$200 goal</span>
                    </div>
                    <p className="text-stone-500 text-sm">
                      Stabilizing the home situation (mother's general medical needs and food) so Musa can focus on building the business without panic.
                    </p>
                    <div className="w-full bg-stone-200 rounded-full h-2 mt-3">
                      <div className="bg-green-500 h-2 rounded-full w-[5%]"></div>
                    </div>
                  </div>
                </div>

                {/* Need Item 3 */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-200 hover:border-green-400 transition-colors">
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                    <Sprout size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-lg">Business Seed Capital</h4>
                      <span className="text-sm font-bold bg-stone-100 px-2 py-1 rounded text-stone-600">$500 goal</span>
                    </div>
                    <p className="text-stone-500 text-sm">
                      Funds to purchase the initial batch of poultry chicks or cashew saplings and necessary tools.
                    </p>
                    <div className="w-full bg-stone-200 rounded-full h-2 mt-3">
                      <div className="bg-orange-500 h-2 rounded-full w-[0%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Support Team</h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-10">
            This initiative is coordinated by ototao. We ensure 100% of contributions go directly to purchasing equipment and resources for Musa, not cash handouts, to ensure sustainable growth.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-stone-800 p-6 rounded-xl flex items-center gap-4 text-left hover:bg-stone-700 transition-colors cursor-pointer">
              <div className="bg-green-600 p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold">Contact Coordinator</h4>
                <p className="text-stone-400 text-sm">WhatsApp / Direct Message</p>
              </div>
            </div>
            
            <div className="bg-stone-800 p-6 rounded-xl flex items-center gap-4 text-left hover:bg-stone-700 transition-colors cursor-pointer">
              <div className="bg-blue-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold">Offer Mentorship</h4>
                <p className="text-stone-400 text-sm">Advice on Poultry/Cashews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-8 border-t border-stone-800">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2026 The Musa Initiative. Built with hope and determination.</p>
        </div>
      </footer>
    </div>
  );
};

export default MusaProject;
