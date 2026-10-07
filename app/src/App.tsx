import { useState } from 'react';

import { BootScreen } from './components/boot/BootScreen';
import { DesktopLayout } from './components/desktop/DesktopLayout';

export default function App() {
    const [booted, setBooted] = useState(() => {
        try {
            return sessionStorage.getItem('boot-done') === 'true';
        } catch {
            return false;
        }
    });

    function handleFinish() {
        try {
            sessionStorage.setItem('boot-done', 'true');
        } catch {
        }

        setBooted(true);
    }

    return booted
        ? <DesktopLayout />
        : <BootScreen onFinish={handleFinish} />;
}