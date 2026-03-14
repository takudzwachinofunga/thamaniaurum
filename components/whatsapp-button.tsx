'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '256747613173'; // +256 prefix removed for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:bottom-8 md:right-8"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
