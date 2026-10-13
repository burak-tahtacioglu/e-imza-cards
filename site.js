(() => {
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const issueLink = document.querySelector('[data-github-issue]');
  const issueHint = document.querySelector('[data-issue-hint]');
  if (!issueLink) return;

  const hostMatch = window.location.hostname.match(/^([^.]+)\.github\.io$/i);
  const repository = window.location.pathname.split('/').filter(Boolean)[0];
  if (!hostMatch || !repository) return;

  const owner = hostMatch[1];
  const title = encodeURIComponent('Destek: ');
  const body = encodeURIComponent([
    '### Sorun',
    '',
    '<!-- Sorunu, kişisel bilgi paylaşmadan açıklayın. -->',
    '',
    '### Ortam',
    '- Uygulama sürümü / build:',
    '- iOS sürümü:',
    '- iPhone modeli:',
    '- Kart okuyucu modeli:',
    '- Kart sağlayıcısı:',
    '- Görünen hata mesajı:',
    '',
    '> Güvenlik: PIN, parola, T.C. kimlik numarası veya sertifika dosyası eklemeyin.'
  ].join('\n'));

  issueLink.href = `https://github.com/${owner}/${repository}/issues/new?title=${title}&body=${body}`;
  issueLink.removeAttribute('aria-disabled');
  if (issueHint) issueHint.textContent = 'Talep, bu sitenin GitHub deposundaki Issues bölümünde açılır.';
})();
