'use client';
import { useState, useEffect } from 'react';
import './home-page.scss';
import { setTimeout } from 'timers';
type stopLightState = 'stop' | 'slow' | 'go';

export default function Home() {
   const [state, setState] = useState<stopLightState>('stop');

   useEffect(() => {
      if (state === 'stop') {
         setTimeout(() => {
            setState('slow');
         }, 4000);
      } else if (state === 'slow') {
         setTimeout(() => {
            setState('go');
         }, 3000);
      } else if (state === 'go') {
         setTimeout(() => {
            setState('stop');
         }, 5000);
      }
   }, [state]);

   return (
      <main className='main-container'>
         <div className={`stop ligth ${state === 'stop' ? 'on' : ''}`}></div>
         <div className={`slow ligth ${state === 'slow' ? 'on' : ''}`}></div>
         <div className={`go ligth ${state === 'go' ? 'on' : ''}`}></div>
      </main>
   );
}
