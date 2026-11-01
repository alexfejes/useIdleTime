// ---------------------------------------------------------------------------
// useIdleTimer: a lightweight hook that reports whether the user has stepped
// away from their desk, based on mouse movement.
//
// STARTING POINT: this hook doesn't exist yet. The header badge is hardcoded.
// ---------------------------------------------------------------------------
//
// What the hook does:
//   It returns true when the mouse hasn't moved for `timeout` ms (default 5s),
//   and false as soon as it moves again. The component re-renders when it flips.
//
// What each part does:
//   timeout        How long (in ms) the mouse must stay still before "idle".
//   isIdle         The value we hand back. Starts as false (user is at their desk).
//   useEffect      Runs after the first render. Connects to the browser
//                  (event listener + timer).
//   timer          The ID of the pending countdown, so we can cancel it.
//   handleActivity Runs on every mouse move: sets isIdle to false (green),
//                  cancels the old countdown, and starts a new one that sets
//                  isIdle to true (yellow) if the mouse stays still.
//   handleActivity() Called once on mount to start the first countdown, so the
//                  user goes idle even if they never touch the mouse.
//   return () =>   Cleanup: removes the listener and cancels the countdown when
//                  the component unmounts, so nothing runs in the background.
//   [timeout]      Only re-run the effect if a different timeout is passed in.
// ---------------------------------------------------------------------------

// FIX (step 1): uncomment the hook below (select it and press Ctrl+/).

// import { useState, useEffect } from 'react';
//
// export function useIdleTimer(timeout = 5000) {
//   const [isIdle, setIsIdle] = useState(false);
//
//   useEffect(() => {
//     let timer = 0;
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
