import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const useA2HS = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const install = () => {
    deferredPrompt?.prompt();
    deferredPrompt?.userChoice.then((choiceResult) => {
      clearPrompt();
    });
  };

  const clearPrompt = () => {
    setDeferredPrompt(null);
  };

  return { deferredPrompt, install, clearPrompt };
};

export default useA2HS;
