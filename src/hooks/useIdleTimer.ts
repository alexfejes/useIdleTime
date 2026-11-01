// ---------------------------------------------------------------------------
// useIdleTimer: a lightweight hook that reports whether the user has stepped
// away from their desk, based on mouse movement.
//
// STARTING POINT: this hook doesn't exist yet. The header badge is hardcoded.
// ---------------------------------------------------------------------------

// FIX (step 1): uncomment the whole hook below.
//
// How it works:
//   1. Every mouse movement marks the user as active and restarts the timer.
//   2. If the timer runs out with no movement, mark the user as idle.
//   3. Calling handleActivity() once on mount starts the first timer.
//   4. Remove the listener and clear the timer on unmount (or when the timeout changes).

// import { useState, useEffect } from 'react';
//
// export function useIdleTimer(timeout = 5000) {
//   const [isIdle, setIsIdle] = useState(false);
//
//   useEffect(() => {
//     let timer: number | undefined;
//     const handleActivity = () => {
//       setIsIdle(false);
//       clearTimeout(timer);
//       timer = setTimeout(() => setIsIdle(true), timeout);
//     };
//
//     window.addEventListener('mousemove', handleActivity);
//     handleActivity();
//
//     return () => {
//       window.removeEventListener('mousemove', handleActivity);
//       clearTimeout(timer);
//     };
//   }, [timeout]);
//
//   return isIdle;
// }
