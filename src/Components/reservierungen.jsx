import React, { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { firestore } from '../firebase';

export default function Reservierungen() {
  const [reservierungen, setReservierungen] = useState([]);

  useEffect(() => {
    async function fetchReservierungen() {
      const querySnapshot = await getDocs(collection(firestore, 'messages'));
      const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setReservierungen(docs);
    }

    fetchReservierungen();
  }, []);

  return (
    <div className="rounded-lg p-5 bg-white shadow-lg">
    <h1 className="font-bold text-lg mb-2">Gebuchte Trainingseinheiten</h1>
    <p>Hier hast du eine Übersicht über die Trainings der Mitglieder.</p>
    <table className="max-w-lg mx-auto bg-white space-y-4 mt-2">
      <thead>
        <tr className="bg-gray-200 text-gray-600 font-medium">
          <th className="w-1/4 px-4 py-2 border-r border-white">Name</th>
          <th className="w-1/4 px-4 py-2 border-r border-white">Datum</th>
          <th className="w-1/4 px-4 py-2 border-r border-white">Zeit</th>
          <th className="w-1/4 px-4 py-2">Trainingseinheit</th>
        </tr>
      </thead>
      <tbody>
        {reservierungen.map((reservierung) => (
          <tr key={reservierung.id} className="bg-white">
            <td className="border-r border-pastel-green-3001 px-4 py-2">{reservierung.message}</td>
            <td className="border-r border-pastel-green-3001 px-4 py-2">{reservierung.date}</td>
            <td className="border-r border-pastel-green-3001 px-4 py-2">{reservierung.time}</td>
            <td className="px-4 py-2">{reservierung.sport}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}