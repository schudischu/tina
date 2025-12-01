'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  bookedAt: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  course: string;
  maxParticipants: number;
  currentBookings: number;
  bookings: Booking[];
}

interface AppContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'currentBookings' | 'bookings'>) => void;
  deleteAppointment: (id: string) => void;
  addBooking: (appointmentId: string, booking: Omit<Booking, 'id' | 'bookedAt'>) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'tina-pilates-data';

// Beispieldaten für den Start
const initialAppointments: Appointment[] = [
  {
    id: '1',
    date: '2025-12-02',
    time: '08:00',
    course: 'Morgen Flow',
    maxParticipants: 8,
    currentBookings: 5,
    bookings: [
      { id: '1', customerName: 'Anna Müller', customerEmail: 'anna@example.com', bookedAt: '2025-12-01' },
      { id: '2', customerName: 'Sarah Schmidt', customerEmail: 'sarah@example.com', bookedAt: '2025-12-01' },
      { id: '3', customerName: 'Lisa Wagner', customerEmail: 'lisa@example.com', bookedAt: '2025-12-01' },
      { id: '4', customerName: 'Maria Fischer', customerEmail: 'maria@example.com', bookedAt: '2025-12-01' },
      { id: '5', customerName: 'Julia Weber', customerEmail: 'julia@example.com', bookedAt: '2025-12-01' },
    ]
  },
  {
    id: '2',
    date: '2025-12-02',
    time: '09:30',
    course: 'Anfänger Pilates',
    maxParticipants: 10,
    currentBookings: 0,
    bookings: []
  },
  {
    id: '3',
    date: '2025-12-02',
    time: '18:00',
    course: 'Fortgeschrittene',
    maxParticipants: 8,
    currentBookings: 0,
    bookings: []
  },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Daten aus localStorage laden
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setAppointments(JSON.parse(stored));
      } catch (e) {
        console.error('Fehler beim Laden der Daten:', e);
        setAppointments(initialAppointments);
      }
    } else {
      setAppointments(initialAppointments);
    }
    setIsLoaded(true);
  }, []);

  // Daten in localStorage speichern
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    }
  }, [appointments, isLoaded]);

  const addAppointment = (newApp: Omit<Appointment, 'id' | 'currentBookings' | 'bookings'>) => {
    const appointment: Appointment = {
      ...newApp,
      id: Date.now().toString(),
      currentBookings: 0,
      bookings: []
    };
    setAppointments((prev: Appointment[]) => [...prev, appointment]);
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev: Appointment[]) => prev.filter((app: Appointment) => app.id !== id));
  };

  const addBooking = (appointmentId: string, bookingData: Omit<Booking, 'id' | 'bookedAt'>): boolean => {
    const appointment = appointments.find((app: Appointment) => app.id === appointmentId);
    
    if (!appointment) {
      console.error('Termin nicht gefunden');
      return false;
    }

    if (appointment.currentBookings >= appointment.maxParticipants) {
      console.error('Termin ist ausgebucht');
      return false;
    }

    const booking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      bookedAt: new Date().toISOString().split('T')[0]
    };

    setAppointments((prev: Appointment[]) => prev.map((app: Appointment) => {
      if (app.id === appointmentId) {
        return {
          ...app,
          currentBookings: app.currentBookings + 1,
          bookings: [...app.bookings, booking]
        };
      }
      return app;
    }));

    return true;
  };

  return (
    <AppContext.Provider value={{ appointments, addAppointment, deleteAppointment, addBooking }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext muss innerhalb von AppProvider verwendet werden');
  }
  return context;
}
