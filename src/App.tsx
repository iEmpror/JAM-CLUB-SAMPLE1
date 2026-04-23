import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, ChevronRight, Star, Instagram, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const MENU_HIGHLIGHTS = [
  {
    category: 'Signature Tapas',
    items: [
      { name: 'Tapa Jam', price: '€27.50', description: '3 types of cheese, 2 types of chorizo, 1 type of ham, pumpkin jam, and olives', reviews: 9 },
      { name: 'Tapa Mexico', price: '€16.50', description: 'Chilli, Guacamole and Nachos', reviews: 170 },
      { name: 'Tapa Octopus', price: '€12.50', description: 'Seasoned with vinegar and spices, pickles and olives', reviews: 19 },
    ]
  },
  {
    category: 'Classics',
    items: [
      { name: 'Jam Burger', price: '€12.50', description: '2 burgers of 120 grams, with cheese, bacon, tomato and lettuce. French fries', reviews: 21 },
      { name: 'Jam Hot Dog', price: '€9.50', description: '1 fresh sausage, cheese and chorizo. Accompanied by french fries', reviews: 5 },
      { name: 'Francesinha', price: '€16.50', description: 'Sandwich with traditional Portuguese tomato-based sauce', reviews: 4 },
    ]
  },
  {
    category: 'Signature Cocktails',
    items: [
      { name: 'Jam Cocktail', price: '€14.00', description: 'Grey Goose, condensed milk, strawberries, lime juice', reviews: 3 },
      { name: 'Lisboa by Carina', price: '€14.00', description: 'Batch Melon, lime juice, egg white, angostura, dried ham', reviews: 0 },
      { name: 'Expresso Martini', price: '€12.50', description: 'Vodka Absolut, coffee and coffee liqueur', reviews: 1 },
    ]
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-orange-500 selection:text-white font-sans">
      
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight">
            JAM<span className="text-brand-orange-500">.</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-brand-orange-500 transition-colors">About</a>
            <a href="#menu" className="hover:text-brand-orange-500 transition-colors">Menu</a>
            <a href="#location" className="hover:text-brand-orange-500 transition-colors">Location</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:927337827" className="text-sm font-bold uppercase tracking-[1px] hover:text-brand-orange-500 transition-colors">927 337 827</a>
            <a href="#location" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 text-sm font-bold uppercase tracking-[1px] transition-all">
              Book Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black pt-24 px-6 flex flex-col gap-6 md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">About</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Menu</a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Location</a>
          <hr className="border-white/10" />
          <a href="tel:927337827" className="flex items-center gap-3 text-lg">
            <Phone size={20} className="text-brand-orange-500" />
            927 337 827
          </a>
          <a href="https://wa.me/351927337827" className="flex items-center gap-3 text-lg">
            <MessageCircle size={20} className="text-brand-orange-500" />
            WhatsApp Us
          </a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="bg-brand-orange-500 text-center text-white px-6 py-4 text-sm font-bold uppercase tracking-[1px] mt-4">
            Book Now
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-brand-black/40 z-10" />
          <img 
            src="images/hero.jpg" 
            alt="Interior of JAM Club bar"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="editorial-h2 mb-6 text-brand-orange-500">
              Lisbon's Premium Tapas Bar
            </div>
            <h1 className="editorial-h1 text-[60px] md:text-[92px] text-white mb-8">
              A Taste of <br /><span className="text-brand-orange-500">JAM Club.</span>
            </h1>
            <p className="text-lg md:text-xl text-white opacity-80 font-normal max-w-lg mb-10 leading-relaxed">
              Elevated tapas, legendary burgers, and signature cocktails. Experience Lisbon's finest late-night dining until 2 AM every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#location" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-[1px] transition-all inline-flex justify-center items-center gap-2">
                Book a Table <ChevronRight size={16} />
              </a>
              <a href="#menu" className="px-8 py-4 text-sm font-bold uppercase tracking-[1px] border border-light hover:bg-white/5 transition-all inline-flex justify-center items-center">
                View Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-gray-900 border-t border-light relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="editorial-h1 text-[40px] md:text-[60px] mb-6">
                More than just a meal.<br /><span className="italic text-brand-orange-500 font-serif lowercase">An experience.</span>
              </h2>
              <div className="w-20 h-1 bg-brand-orange-500 mb-8" />
              <p className="text-white opacity-80 text-lg leading-relaxed mb-6">
                Located in the heart of Lisbon at Tv. dos Pescadores, JAM Club brings together the warmth of traditional Portuguese hospitality with the vibrant energy of a modern cocktail lounge.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Whether you're sharing our signature artisanal tapas, enjoying our top-rated burgers, or sipping on a masterfully crafted Mezcalita, every detail is designed to make your night unforgettable.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-light">
                <div>
                  <div className="text-3xl font-serif text-white mb-2">9+</div>
                  <div className="editorial-h2">Tapas Varieties</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-brand-orange-500 mb-2">5PM - 2AM</div>
                  <div className="editorial-h2">Open Every Day</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden border-light">
                <img 
                  src="images/tapas.jpg" 
                  alt="Quality seafood and tapas at JAM Club"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-black border border-light p-6 shadow-2xl">
                <div className="flex gap-1 text-brand-orange-500 mb-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-sm font-medium">"The Tapa Mexico is incredible."</p>
                <p className="text-xs text-zinc-500 mt-1">— 170+ Happy Reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Menu Section */}
      <section id="menu" className="py-32 bg-brand-black w-full border-t border-light relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="editorial-h2 text-brand-orange-500 mb-4">Curated Offerings</h2>
            <h3 className="editorial-h1 text-[40px] md:text-[72px]">Menu Highlights</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
            {MENU_HIGHLIGHTS.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <h4 className="text-2xl font-serif italic mb-8 pb-4 border-b border-light text-brand-orange-500">{section.category}</h4>
                <div className="flex flex-col">
                  {section.items.map((item) => (
                    <div key={item.name} className="group py-4 menu-item-border flex flex-col">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-lg">{item.name}</span>
                        <span className="font-serif text-brand-orange-500 text-lg">{item.price}</span>
                      </div>
                      <p className="text-sm opacity-60 leading-relaxed font-normal">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-zinc-500 text-sm mb-6 max-w-2xl mx-auto">
              Our full menu features an extensive selection of craft beers, wines, premium spirits, mocktails, and decadent desserts.
            </p>
            <a href="#location" className="inline-flex items-center gap-2 text-brand-orange-500 hover:text-white transition-colors font-semibold uppercase tracking-widest text-sm border-b border-brand-orange-500 hover:border-white pb-1">
              Visit us to explore the full menu <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex flex-col md:flex-row w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <div className="w-full md:w-1/2 h-full overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
          <img 
            src="images/drinks.jpg" 
            alt="Signature Hot Drinks" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105" 
          />
        </div>
        <div className="w-full md:w-1/2 h-full overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
          <img 
            src="images/ambience.jpg" 
            alt="JAM Club Ambience" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105" 
          />
        </div>
      </section>

      {/* Choose Us Section */}
      <section className="py-24 bg-brand-gray-900 border-y border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="md:px-8 pb-8 md:pb-0">
              <div className="w-16 h-16 border-light flex items-center justify-center mx-auto mb-6 text-brand-orange-500">
                <Star size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif italic mb-3">Premium Ingredients</h4>
              <p className="text-white opacity-60 text-sm leading-relaxed">From artisanal cheeses to top-shelf liquors like Komos Premium and Macallan, quality is our foundation.</p>
            </div>
            <div className="md:px-8 py-8 md:py-0">
              <div className="w-16 h-16 border-light flex items-center justify-center mx-auto mb-6 text-brand-orange-500">
                <Clock size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif italic mb-3">Late Night Dining</h4>
              <p className="text-white opacity-60 text-sm leading-relaxed">We keep the kitchen and bar open from 5 PM to 2 AM every single day. The night is yours.</p>
            </div>
            <div className="md:px-8 pt-8 md:pt-0">
              <div className="w-16 h-16 border-light flex items-center justify-center mx-auto mb-6 text-brand-orange-500">
                <MapPin size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif italic mb-3">Heart of Lisbon</h4>
              <p className="text-white opacity-60 text-sm leading-relaxed">Ideally located at Tv. dos Pescadores space designed for intimate dinners or energetic nights out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-brand-gray-900 border-light p-8 md:p-16 relative overflow-hidden">
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="editorial-h2 text-brand-orange-500 mb-4">Join The Club</h2>
                <h3 className="editorial-h1 text-[40px] md:text-[60px] mb-8">Ready to experience JAM?</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex gap-4">
                    <MapPin className="text-brand-orange-500 shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 uppercase tracking-wider text-sm">Location</h4>
                      <p className="text-white opacity-60">Tv. dos Pescadores 27<br />1200-328 Lisboa, Portugal</p>
                      <a href="https://www.google.pt/maps/place/Jam+Club/@38.7126972,-9.1487973,17z" 
                         target="_blank" rel="noopener noreferrer"
                         className="text-brand-orange-500 text-sm font-bold tracking-widest uppercase hover:text-white transition-colors mt-2 inline-block">
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Clock className="text-brand-orange-500 shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 uppercase tracking-wider text-sm">Hours</h4>
                      <p className="text-white opacity-60">Every Day<br />5:00 PM – 2:00 AM</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:927337827" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-[1px] transition-all text-center flex items-center justify-center gap-2">
                    <Phone size={18} /> Call to Book
                  </a>
                  <a href="https://wa.me/351927337827" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-sm font-bold uppercase tracking-[1px] border-light hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2">
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="w-full h-[400px] lg:h-auto overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100 border-light border">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4354224424364!2d-9.14879732342416!3d38.71269717176465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19348002b7e7cd%3A0x77a77cebd3cc4e65!2sJam%20Club!5e0!3m2!1sen!2spt!4v1714000000000!5m2!1sen!2spt" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="JAM Club Location"
  />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-800 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold tracking-tight">
            JAM<span className="text-brand-orange-500">.</span>
          </div>
          
          <div className="flex gap-6 text-zinc-400">
            <a href="https://wa.me/351927337827" className="hover:text-brand-orange-500 transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="tel:927337827" className="hover:text-brand-orange-500 transition-colors">
              <Phone size={20} />
            </a>
            <div className="hover:text-brand-orange-500 transition-colors cursor-pointer">
              <Instagram size={20} />
            </div>
          </div>
          
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} JAM Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
