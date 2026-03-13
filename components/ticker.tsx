'use client';

import { useEffect } from 'react';

export function Ticker() {
  useEffect(() => {
    // Load TradingView ticker script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.type = 'text/javascript';
    script.textContent = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:XAUUSD', title: 'Gold / USD' },
      ],
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    });

    const container = document.getElementById('tradingview-ticker');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup
      if (container && script.parentElement === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="ticker-wrap">
      <div id="tradingview-ticker">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
}
