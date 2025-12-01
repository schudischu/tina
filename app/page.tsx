import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-pilates-secondary">MissionYou</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-600 hover:text-pilates-secondary transition font-light">Home</a>
                <a href="#about" className="text-gray-600 hover:text-pilates-secondary transition font-light">Über uns</a>
                <a href="#services" className="text-gray-600 hover:text-pilates-secondary transition font-light">Kurse</a>
                <Link href="/booking" className="bg-pilates-secondary text-white px-6 py-2.5 rounded-lg hover:bg-pilates-dark transition font-medium">
                  Jetzt buchen
                </Link>
                <Link href="/admin" className="text-sm text-gray-400 hover:text-pilates-secondary transition font-light">
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-pilates-light via-white to-pilates-light/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-light text-pilates-dark mb-6 leading-tight">
                Entdecke die Kraft<br/>von <span className="font-normal">Pilates</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                Stärke deinen Körper, beruhige deinen Geist und finde deine innere Balance 
                in unserem professionellen Pilates Studio.
              </p>
              <div className="flex space-x-4">
                <Link href="/booking" className="bg-pilates-secondary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-pilates-dark transition">
                  Probestunde buchen
                </Link>
                <a href="#services" className="border border-pilates-secondary text-pilates-secondary px-8 py-3.5 rounded-lg font-light hover:bg-pilates-light transition">
                  Mehr erfahren
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pilates-primary/30 via-pilates-light to-pilates-secondary/20"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-pilates-dark">
                  <div className="text-7xl font-thin mb-4">∞</div>
                  <p className="text-lg font-light tracking-wide">Balance • Kraft • Harmonie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-pilates-dark mb-6">Über MissionYou</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Mit über 10 Jahren Erfahrung bieten wir professionelles Pilates Training 
              für alle Fitnesslevel in einer entspannten und motivierenden Atmosphäre.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto mb-6 bg-pilates-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pilates-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pilates-dark mb-3">Kraft aufbauen</h3>
              <p className="text-gray-600 leading-relaxed">
                Stärken Sie Ihre Tiefenmuskulatur und verbessern Sie Ihre Körperhaltung
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto mb-6 bg-pilates-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pilates-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pilates-dark mb-3">Flexibilität</h3>
              <p className="text-gray-600 leading-relaxed">
                Erhöhen Sie Ihre Beweglichkeit und fühlen Sie sich geschmeidiger
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto mb-6 bg-pilates-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pilates-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pilates-dark mb-3">Balance</h3>
              <p className="text-gray-600 leading-relaxed">
                Finden Sie innere Ruhe und mentale Klarheit durch bewusste Bewegung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-pilates-dark mb-6">Unsere Kurse</h2>
            <p className="text-lg text-gray-600 font-light">
              Finden Sie das perfekte Training für Ihre Bedürfnisse
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Anfänger Pilates',
                duration: '60 Min',
                description: 'Perfekt für Einsteiger. Lernen Sie die Grundlagen und Techniken.',
                price: '€25'
              },
              {
                title: 'Fortgeschrittene',
                duration: '75 Min',
                description: 'Intensives Training für erfahrene Pilates-Praktizierende.',
                price: '€30'
              },
              {
                title: 'Privat-Stunde',
                duration: '60 Min',
                description: 'Individuelles Training, angepasst an Ihre persönlichen Ziele.',
                price: '€60'
              },
              {
                title: 'Morgen Flow',
                duration: '45 Min',
                description: 'Starten Sie energiegeladen in den Tag mit sanften Übungen.',
                price: '€20'
              },
              {
                title: 'Rücken Pilates',
                duration: '60 Min',
                description: 'Speziell für einen gesunden und starken Rücken.',
                price: '€25'
              },
              {
                title: 'Prenatal Pilates',
                duration: '60 Min',
                description: 'Sanftes Training für werdende Mütter.',
                price: '€28'
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all border border-gray-100 hover:border-pilates-primary/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-pilates-dark">{course.title}</h3>
                  <span className="text-sm text-gray-500 font-light">{course.duration}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{course.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-2xl font-light text-pilates-secondary">{course.price}</span>
                  <Link href="/booking" className="bg-pilates-secondary text-white px-6 py-2.5 rounded-lg hover:bg-pilates-dark transition text-sm font-medium">
                    Buchen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pilates-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-light mb-6">Bereit für Ihre erste Stunde?</h2>
          <p className="text-lg mb-10 opacity-90 font-light leading-relaxed">
            Buchen Sie jetzt online Ihren Wunschtermin und starten Sie Ihre Pilates-Reise!
          </p>
          <Link href="/booking" className="inline-block bg-white text-pilates-secondary px-10 py-4 rounded-lg font-medium hover:bg-pilates-light transition">
            Zum Buchungskalender
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pilates Studio MissionYou</h3>
              <p className="text-gray-400">
                Ihr Weg zu einem stärkeren, flexibleren und ausgeglicheneren Körper.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-400">
                <p>info@missionyou.de</p>
                <p>+49 123 456 789</p>
                <p>Musterstraße 123<br/>12345 Stadt</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Öffnungszeiten</h3>
              <div className="space-y-2 text-gray-400">
                <p>Montag - Freitag: 8:00 - 20:00</p>
                <p>Samstag: 9:00 - 16:00</p>
                <p>Sonntag: Geschlossen</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pilates Studio MissionYou. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
