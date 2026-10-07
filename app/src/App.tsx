import { useState } from 'react';
import { BootScreen } from './components/boot/BootScreen';
import { DesktopLayout } from './components/desktop/DesktopLayout';
import { LandingInfoPage } from './components/desktop/LandingInfoPage';

export default function App() {
  const [booted, setBooted] = useState(() => {
    try {
      return sessionStorage.getItem('boot-done') === 'true';
    } catch {
      return false;
    }
  });

  const [showLanding, setShowLanding] = useState(false);

  function handleFinish() {
    try {
      sessionStorage.setItem('boot-done', 'true');
    } catch {
    }
    setBooted(true);
    setShowLanding(true);
  }

  function closeLanding() {
    try {
      sessionStorage.setItem('landing-popup-seen', 'true');
    } catch {
    }
    setShowLanding(false);
  }

  return booted
    ? (
        <>
          <DesktopLayout />
          {showLanding && <LandingInfoPage onClose={closeLanding} />}
        </>
      )
    : <BootScreen onFinish={handleFinish} />;
}