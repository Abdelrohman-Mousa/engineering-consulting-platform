let audio: HTMLAudioElement | null = null;

export const initNotificationSound = () => {
    audio = new Audio("/assets/sounds/notification.wav");
    audio.volume = 0.5;
};

export const playNotificationSound = () => {
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(() => {
    });
};