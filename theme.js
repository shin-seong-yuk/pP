(() => {
  const button = document.querySelector('#theme-toggle');
  if (!button) return;
  const apply = theme => {
    const light = theme === 'light';
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    button.setAttribute('aria-pressed', String(light));
    button.setAttribute('aria-label', light ? '다크 모드로 전환' : '라이트 모드로 전환');
    button.querySelector('[aria-hidden]').textContent = light ? '☾' : '☀';
    button.querySelector('.theme-toggle-text').textContent = light ? '다크 모드' : '라이트 모드';
  };
  apply(document.documentElement.dataset.theme);
  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    apply(next);
    try { localStorage.setItem('portfolio-theme', next); } catch {}
  });
})();
