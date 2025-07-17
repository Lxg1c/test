'use client';

import { useState } from 'react';
import Image from 'next/image';

const navItems = [
    { id: 'favorites', icon: 'heart.svg', iconActive: 'heart-fill.svg', alt: 'Избранное', width: 37, height: 37 },
    { id: 'messages', icon: 'message.svg', iconActive: 'message-fill.svg', alt: 'Сообщения', width: 41, height: 35 },
    { id: 'network', icon: 'network.svg', iconActive: 'network-fill.svg', alt: 'Нетворк', width: 35, height: 36 },
    { id: 'notifications', icon: 'notification.svg', iconActive: 'notification-fill.svg', alt: 'Уведомления', width: 29, height: 39 },
    { id: 'profile', icon: 'man.svg', iconActive: 'man-fill.svg', alt: 'Профиль', width: 31, height: 30 },
];

const Footer = () => {
    const [activeItem, setActiveItem] = useState<string>('profile');

    return (
        <footer id="footer" className="mt-6 pb-2">
            <div className="footer__container container">
                <nav>
                    <ul className="flex justify-around items-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    className="cursor-pointer"
                                    onClick={() => setActiveItem(item.id)}
                                >
                                    <Image
                                        src={activeItem === item.id ? `/${item.iconActive}` : `/${item.icon}`}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
