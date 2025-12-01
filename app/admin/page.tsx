'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '../context/AppContext';

export default function AdminPage() {
  const { appointments, addAppointment, deleteAppointment } = useAppContext();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    course: '',
    maxParticipants: 8,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Einfache Authentifizierung - in Produktion mit echtem Backend!
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Falsches Passwort!');
    }
  };

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    addAppointment(newAppointment);
    setNewAppointment({ date: '', time: '', course: '', maxParticipants: 8 });
    setShowAddForm(false);
  };

  const handleDeleteAppointment = (id: string) => {
    if (confirm('Möchten Sie diesen Termin wirklich löschen?')) {
      deleteAppointment(id);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pilates-light/20 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full mx-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-light text-pilates-dark mb-2">Admin-Bereich</h1>
            <p className="text-gray-600 font-light">Bitte melden Sie sich an</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary transition"
                placeholder="Passwort eingeben"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pilates-secondary text-white py-3.5 rounded-lg font-medium hover:bg-pilates-dark transition"
            >
              Anmelden
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-pilates-secondary hover:text-pilates-dark font-light">
              ← Zurück zur Startseite
            </Link>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-800 font-light">
              <strong className="font-medium">Demo-Passwort:</strong> admin123
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-pilates-secondary">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-pilates-secondary transition">
                Zur Website
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-red-600 hover:text-red-800 transition"
              >
                Abmelden
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-light text-pilates-dark">Terminverwaltung</h2>
            <p className="text-gray-600 mt-2 font-light">Verwalten Sie Ihre Pilates-Kurse und Buchungen</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-pilates-secondary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-pilates-dark transition"
          >
            + Neuer Termin
          </button>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="text-sm font-light text-gray-500 mb-2">Geplante Termine</div>
            <div className="text-3xl font-light text-pilates-dark">{appointments.length}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="text-sm font-light text-gray-500 mb-2">Gebuchte Plätze</div>
            <div className="text-3xl font-light text-pilates-dark">
              {appointments.reduce((sum, app) => sum + app.currentBookings, 0)}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="text-sm font-light text-gray-500 mb-2">Geschätzter Umsatz</div>
            <div className="text-3xl font-light text-pilates-dark">
              {appointments.reduce((sum, app) => sum + app.currentBookings, 0) * 25}€
            </div>
          </div>
        </div>

        {/* Add Appointment Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-light text-pilates-dark mb-6">Neuen Termin erstellen</h3>
            <form onSubmit={handleAddAppointment} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Datum</label>
                <input
                  type="date"
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Uhrzeit</label>
                <input
                  type="time"
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Kurs</label>
                <select
                  value={newAppointment.course}
                  onChange={(e) => setNewAppointment({ ...newAppointment, course: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Morgen Flow">Morgen Flow</option>
                  <option value="Anfänger Pilates">Anfänger Pilates</option>
                  <option value="Fortgeschrittene">Fortgeschrittene</option>
                  <option value="Rücken Pilates">Rücken Pilates</option>
                  <option value="Prenatal Pilates">Prenatal Pilates</option>
                  <option value="Privat-Stunde">Privat-Stunde</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Max. Teilnehmer</label>
                <input
                  type="number"
                  value={newAppointment.maxParticipants}
                  onChange={(e) => setNewAppointment({ ...newAppointment, maxParticipants: parseInt(e.target.value) })}
                  required
                  min="1"
                  max="20"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pilates-secondary/20 focus:border-pilates-secondary"
                />
              </div>
              <div className="md:col-span-2 flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-pilates-secondary text-white py-3 rounded-lg font-medium hover:bg-pilates-dark transition"
                >
                  Termin erstellen
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-light hover:bg-gray-200 transition"
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-600 mb-2">Noch keine Termine vorhanden</h3>
              <p className="text-gray-500 font-light">Erstellen Sie Ihren ersten Termin!</p>
            </div>
          ) : (
            appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-pilates-dark mb-1">{appointment.course}</h3>
                    <p className="text-gray-600 font-light">
                      {appointment.date} um {appointment.time} Uhr
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="text-red-400 hover:text-red-600 transition text-sm font-light"
                  >
                    Löschen
                  </button>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-pilates-secondary rounded-full h-2 transition-all"
                      style={{ width: `${(appointment.currentBookings / appointment.maxParticipants) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm font-light text-gray-700 min-w-[60px]">
                    {appointment.currentBookings} / {appointment.maxParticipants}
                  </div>
                </div>

                {appointment.bookings.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-medium text-gray-700 mb-4 text-sm">Buchungen:</h4>
                    <div className="space-y-3">
                      {appointment.bookings.map((booking) => (
                        <div key={booking.id} className="flex justify-between items-center text-sm bg-gray-50 p-4 rounded-lg">
                          <div>
                            <div className="font-normal text-gray-800 mb-1">{booking.customerName}</div>
                            <div className="text-gray-600 text-xs font-light">{booking.customerEmail}</div>
                          </div>
                          <div className="text-gray-500 text-xs font-light">
                            {booking.bookedAt}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
