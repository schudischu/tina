'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
  course: string;
}

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Sample time slots - in production würde dies aus einer Datenbank kommen
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '08:00', date: selectedDate, available: true, course: 'Morgen Flow' },
    { id: '2', time: '09:30', date: selectedDate, available: true, course: 'Anfänger Pilates' },
    { id: '3', time: '11:00', date: selectedDate, available: false, course: 'Fortgeschrittene' },
    { id: '4', time: '14:00', date: selectedDate, available: true, course: 'Rücken Pilates' },
    { id: '5', time: '16:00', date: selectedDate, available: true, course: 'Anfänger Pilates' },
    { id: '6', time: '18:00', date: selectedDate, available: true, course: 'Fortgeschrittene' },
    { id: '7', time: '19:30', date: selectedDate, available: false, course: 'Prenatal Pilates' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlot && customerName && customerEmail) {
      // Hier würde die Buchung in der Datenbank gespeichert
      console.log('Buchung:', { selectedSlot, customerName, customerEmail });
      setShowConfirmation(true);
      
      // Reset nach 3 Sekunden
      setTimeout(() => {
        setShowConfirmation(false);
        setSelectedSlot(null);
        setCustomerName('');
        setCustomerEmail('');
      }, 3000);
    }
  };

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDate = (date: Date) => {
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
      fullDate: date.toISOString().split('T')[0]
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-pilates-secondary">
              MissionYou
            </Link>
            <Link href="/" className="text-gray-600 hover:text-pilates-secondary transition">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      {/* Booking Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-pilates-dark mb-4">Buchen Sie Ihre Pilates-Stunde</h1>
          <p className="text-lg text-gray-600 font-light">Wählen Sie Ihren Wunschtermin</p>
        </div>

        {/* Date Selection */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-light text-pilates-dark mb-8">Datum auswählen</h2>
          <div className="grid grid-cols-7 gap-4">
            {getNextWeekDates().map((date) => {
              const formatted = formatDate(date);
              const isSelected = formatted.fullDate === selectedDate;
              return (
                <button
                  key={formatted.fullDate}
                  onClick={() => setSelectedDate(formatted.fullDate)}
                  className={`p-4 rounded-lg text-center transition ${
                    isSelected
                      ? 'bg-pilates-secondary text-white shadow-md'
                      : 'bg-gray-50 hover:bg-pilates-light border border-gray-100'
                  }`}
                >
                  <div className="text-xs font-light text-gray-500 mb-1">{formatted.day}</div>
                  <div className="text-2xl font-light">{formatted.date}</div>
                  <div className="text-xs font-light text-gray-500 mt-1">{formatted.month}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-light text-pilates-dark mb-8">Verfügbare Zeiten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.available && setSelectedSlot(slot)}
                disabled={!slot.available}
                className={`p-5 rounded-lg border transition ${
                  selectedSlot?.id === slot.id
                    ? 'border-pilates-secondary bg-pilates-light shadow-md'
                    : slot.available
                    ? 'border-gray-200 hover:border-pilates-secondary hover:shadow-sm bg-white'
                    : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="text-xl font-light text-pilates-dark mb-1">{slot.time}</div>
                <div className="text-sm text-gray-600 font-light">{slot.course}</div>
                {!slot.available && <div className="text-xs text-red-400 mt-2 font-light">Ausgebucht</div>}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        {selectedSlot && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-light text-pilates-dark mb-8">Ihre Daten</h2>
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary transition"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary transition"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
              
              <div className="bg-pilates-light/50 p-6 rounded-lg border border-pilates-primary/20">
                <h3 className="font-medium text-pilates-dark mb-3 text-sm">Buchungsübersicht</h3>
                <div className="space-y-1 text-sm font-light text-gray-700">
                  <p>Kurs: <span className="font-normal">{selectedSlot.course}</span></p>
                  <p>Datum: <span className="font-normal">{selectedDate}</span></p>
                  <p>Zeit: <span className="font-normal">{selectedSlot.time}</span></p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-pilates-secondary text-white py-4 rounded-lg font-medium hover:bg-pilates-dark transition"
              >
                Jetzt verbindlich buchen
              </button>
            </form>
          </div>
        )}

        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-10 max-w-md mx-4 text-center shadow-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light text-pilates-dark mb-3">Buchung erfolgreich!</h3>
              <p className="text-gray-600 font-light">
                Sie erhalten in Kürze eine Bestätigungsemail an<br/>
                <span className="font-normal">{customerEmail}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
