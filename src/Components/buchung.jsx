import React, { useRef, useState } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore'
import { Link } from 'react-router-dom';

export default function Buchung() {
    const messageRef = useRef();
    const dateRef = useRef();
    const sportRef = useRef();
    const timeRef = useRef();
    const ref = collection(firestore, 'messages');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);
        console.log(dateRef.current.value);
        console.log(sportRef.current.value);
        console.log(timeRef.current.value);

        let data = {
            message: messageRef.current.value,
            date: dateRef.current.value,
            sport: sportRef.current.value,
            time: timeRef.current.value,
        }

        try {
            await addDoc(ref, data);
            setIsSubmitted(true);
            messageRef.current.value = "";
            dateRef.current.value = "";
            sportRef.current.value = "";
            timeRef.current.value = "";
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <form onSubmit={handleSave} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-10 space-y-4">
  <div className="flex flex-col">
    <h1 className="font-bold text-lg mb-2">Hallo, Mitglied! &#x1F60A;</h1>
    <p>Buche hier ganz einfach deine gewünschten Trainingseinheiten für November 2023.</p>
  </div>
  <div className="flex flex-col">
    <label className="text-gray-600 font-medium">Name</label>
    <input type='text' ref={messageRef} required className="rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200"/>
  </div>

  <div className="flex flex-col">
    <label className="text-gray-600 font-medium">Datum</label>
    <select ref={dateRef} required className="appearance-none relative rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200">
      <option value="" disabled selected>Wähle einen Termin</option>
      <option value="Samstag 4.11.">Samstag 4.11.</option>
      <option value="Sonntag 5.11.">Sonntag 5.11.</option>
      <option value="Samstag 11.11.">Samstag 11.11.</option>
      <option value="Sonntag 12.11.">Sonntag 12.11.</option>
      <option value="Samstag 18.11.">Samstag 18.11.</option>
      <option value="Sonntag 19.11.">Sonntag 19.11.</option>
      <option value="Samstag 25.11.">Samstag 25.11.</option>
      <option value="Sonntag 26.11.">Sonntag 26.11.</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label className="text-gray-600 font-medium">Zeitslot</label>
    <select ref={timeRef} required className="appearance-none relative rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200">
      <option value="" disabled selected>Wähle einen Zeitslot</option>
      <option value="14:00">14:00</option>
      <option value="14:30">14:30</option>
      <option value="15:00">15:00</option>
      <option value="15:30">15:30</option>
      <option value="16:00">16:00</option>
      <option value="16:30">16:30</option>
      <option value="17:00">17:00</option>
      <option value="17:30">17:30</option>
      <option value="18:00">18:00</option>
      <option value="18:30">18:30</option>
    </select>
  </div>

    <div className="flex flex-col">
  <label className="text-gray-600 font-medium">Trainingseinheit</label>
  <select ref={sportRef} required className="appearance-none relative rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 bg-gray-200">
    <option value="" disabled selected>Wähle eine Trainingseinheit</option>
    <option value="torschuss">Torschuss</option>
    <option value="pass">Pass</option>
    <option value="flanke">Flanke</option>
    <option value="ballannahme">Ballannahme</option>
    <option value="dribbeln">Dribbeln</option>
  </select>
  </div>

  <label class="inline-flex items-center">
  <input type="checkbox" name="bestaetigung" class="form-checkbox h-5 w-5 text-pastel-green-300 rounded-lg" required/>
  <span class="ml-2 text-gray-600">Ich habe die <Link to="/">Datenschutzerklärung</Link> gelesen</span>
</label>
  

  <div className="flex flex-col">    
  <button type='submit' className="bg-pastel-green-300 hover:bg-pastel-green-200 focus:outline-none focus:ring-2 focus:ring-pastel-green-300 focus:ring-opacity-50 rounded-full px-4 py-2 text-white mt-4">Absenden</button>
  
  </div>
  <div className="flex flex-col"><button type='reset'>Zurücksetzen</button></div>

    
  {isSubmitted && <p className="text-pastel-green-300" >&#x2713; Deine Buchung wurde erfolgreich abgeschickt.</p>}
  
</form>

        </div>
    )
}


