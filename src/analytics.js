// Cloudflare Web Analytics configuration.
// Create a token at Cloudflare Web Analytics and paste it here to enable tracking.
const cloudflareAnalyticsToken = '75f772e750dd472e868a42acae569874';

export function initAnalytics() {
  if (!cloudflareAnalyticsToken || ['localhost', '127.0.0.1'].includes(location.hostname)) return;
  if (document.querySelector('script[data-cf-beacon]')) return;

  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.dataset.cfBeacon = JSON.stringify({ token: cloudflareAnalyticsToken });
  document.head.appendChild(script);
}
