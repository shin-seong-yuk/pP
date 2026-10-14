(() => {
  document.documentElement.classList.add('has-project-dialogs');
  const projects = {
    mefense: {
      number: '01', title: 'MeFense', type: '개인 프로젝트 · 3개월',
      line: '수학 자체가 전략이 되는 3D FPS 타워 디펜스',
      summary: '플레이어가 직접 싸우고 포탑을 건설합니다. 포탑의 수학적 항과 연산 카드를 조합해 시간에 따라 달라지는 성능을 설계합니다.',
      sections: [
        ['01 / 기획 의도', '단순한 수치 업그레이드 대신 수식 구성, 배치, 전력망이 서로 다른 전략으로 이어지는 게임을 만들었습니다.'],
        ['02 / 시스템 기획', '포탑에 부여된 수학적 항과 연산 카드를 연결해 시간에 따라 성능이 변하는 규칙을 설계했습니다. 수식 구성뿐 아니라 지형·사거리·전력망·배치를 함께 고려하게 해, 같은 자원으로도 서로 다른 전략을 만들도록 했습니다. 전체 기획과 구현을 혼자 담당했습니다.'],
        ['03 / 설계의 균형', '수학은 쉽게 이해되면서도 전략적이어야 했습니다. 특정 함수만으로 전투가 무너지지 않게 조정하고, 직접 전투와 포탑 방어가 각각 필요하도록 역할을 나눴습니다.'],
        ['04 / 플레이 경험의 문제', '웹 배포에서 한글과 수학 기호가 누락되고 UI와 이펙트가 다르게 표시됐습니다. 수식과 상태 정보를 읽을 수 없으면 플레이어가 전략을 판단하기 어렵기 때문에, 기획한 경험을 전달하기 위한 문제로 보았습니다.'],
        ['05 / 전달 방식의 개선', '로그로 원인을 분리한 뒤 한글·기호 폰트와 필요한 셰이더를 빌드에 포함했습니다. 플랫폼마다 달라지는 이모지는 AI로 제작한 텍스처 아이콘으로 통일하고, 16:9 화면과 임베드 영역을 맞춰 UI가 잘리지 않게 했습니다.'],
        ['06 / 검증 결과', '실제 itch.io에서 10회 넘게 재배포하며 에디터와 웹 화면이 일치하는지 확인했습니다. 반복되는 WebGL 설정은 전용 빌드 메뉴로 자동화해 재발 가능성을 줄였습니다.']
      ],
      links: [['PLAY', 'https://shinseonguk.itch.io/mefense'], ['GITHUB', 'https://github.com/shin-seong-yuk/MeFense'], ['VIDEO', 'assets/video/mefense-intro-ko.mp4']]
    },
    'exit-from': {
      number: '02', title: 'EXIT_FROM', type: '개인 프로젝트 · 6개월',
      line: '자신의 행동을 재현하는 고스트와 탈출하는 퍼즐 액션',
      summary: '실험실을 배경으로 압력판, 레이저, 움직이는 발판과 고스트 전용 문을 조합해 탈출합니다. 퍼즐 시스템은 점차 타인을 도구로 바라보는 시선에 대한 질문으로 이어집니다.',
      sections: [
        ['01 / 핵심 규칙', '플레이어의 행동을 기록하고 재생하는 고스트를 퍼즐의 핵심으로 삼았습니다. 고스트에게 장치 작동을 맡기고 플레이어는 다른 경로를 이동하도록 해, 행동의 순서와 두 존재의 역할을 계획하게 했습니다. 기획·레벨 디자인·구현·UI·연출을 혼자 맡았습니다.'],
        ['02 / 레벨 디자인', '장애물을 계속 추가하기보다 기존 장치와 맵 구조를 새롭게 조합했습니다. 구현과 테스트를 거치며 난이도와 공간의 흐름을 다듬었습니다.'],
        ['03 / 어려웠던 점', '처음에는 모든 기믹을 미리 만든 뒤 스테이지만 조합하려 했습니다. 하지만 구현해 보니 예상보다 재미없는 기믹도 있었고, 테스트에 따라 좋은 조합이 달라져 초기 계획을 고정하기 어려웠습니다.'],
        ['04 / 해결과 결과', '새 기능을 무조건 늘리기보다 수정·확장이 쉬운 구조로 기존 장치를 정리했습니다. 압력판·레이저·움직이는 발판·고스트 전용 문과 맵의 동선을 새롭게 조합해 퍼즐의 난도를 높였습니다.'],
        ['05 / 규칙과 서사의 연결', '디자인의 제약에서 선택한 캡슐 캐릭터를 실험체 설정에 연결했습니다. 고스트의 태도를 친근함에서 의심과 비난으로 바꾸고, 마지막 시점 전환을 통해 익숙한 퍼즐 규칙을 ‘타인을 도구로 보는 시선’이라는 질문으로 확장했습니다.'],
        ['06 / 사용자에게서 배운 점', '첫 배포에서는 튜토리얼이 없어 플레이어가 시작을 어려워하는 모습을 관찰했습니다. 제가 아는 규칙이 곧 사용자가 이해한 규칙은 아니라는 것을 배웠습니다. 이후에는 기능 자체뿐 아니라 발견과 이해의 과정도 기획의 일부로 봅니다.']
      ],
      links: [['PLAY', 'https://shinseonguk.itch.io/exit-from']]
    },
    'not-a-cat': {
      number: '03', title: 'Not A Cat', type: '6인 팀 프로젝트 · 2026.07~',
      line: '고양이 조직에 숨은 첩자 ‘삵’을 찾는 직업 기반 추리 게임',
      summary: '직업 능력, 미션, 대화에서 얻은 단서를 엮어 서로의 정체를 추리하는 팀 프로젝트입니다.',
      sections: [
        ['01 / 나의 역할', '기획과 개발을 담당했습니다. 맵·직업 구성, 게임 규칙과 흐름 설정, 맵 구현, 미션 구성과 구현, 텍스트·보이스 채팅 구현이 제 작업입니다.'],
        ['02 / 기획과 구현의 연결', '맵 동선, 직업 능력과 미션이 실제 한 판의 플레이 흐름에서 맞물리도록 게임 로직을 구성하고 구현했습니다.'],
        ['03 / 정보와 소통의 설계', '직업 능력과 미션이 플레이어의 행동을 만들고, 그 행동이 다른 사람의 추리 근거가 되도록 구성했습니다. 텍스트·보이스 채팅을 직접 구현해 관찰한 정보를 교환하고 판단하는 경험을 연결했습니다.'],
        ['04 / 어려웠던 점', '팀 안에서 차별화 요소를 정하는 시점에 대한 생각이 달랐습니다. 저는 검증된 게임의 기본 구조를 먼저 만들어 개발 속도를 확보하고 싶었지만, 동료는 고유한 아이디어를 먼저 정해야 기능이 게임 전체에 자연스럽게 녹아든다고 보았습니다.'],
        ['05 / 조율과 결과', '동료가 걱정한 게임의 완성도와 제가 우려한 일정 지연을 함께 고려했습니다. 기본 구조 개발은 이어가되 아이디어 논의도 꾸준히 병행하는 방안을 제안했고, 팀이 이에 합의했습니다. 현재 두 작업을 함께 진행하며 출시를 향해 개발하고 있습니다.']
      ],
      links: [['GITHUB', 'https://github.com/Apptive-Game-Team/mafia'], ['VIDEO', 'assets/video/not-a-cat-intro-ko.mp4']]
    },
    elevator: {
      number: '04', title: 'Elevator', type: '개인 프로젝트',
      line: '매 층의 방해를 버티며 최후의 1인을 가리는 물리 파티 게임',
      summary: '좁은 공간에서 피할 수 없는 경쟁을 만들되, 문이 열릴 때마다 모두를 위협하는 예상 밖의 이벤트로 전투의 흐름을 흔드는 물리 파티 게임입니다. 긴장 속에서도 “엘리베이터에서 왜 이런 게 나와?”라며 웃는 경험을 의도했습니다.',
      sections: [
        ['01 / 기획의 출발점', '일상적인 공간에 어울리지 않는 것이 등장할 때 느꼈던 웃음에서 시작했습니다. “엘리베이터에 이런 게 왜 있지?”라는 의외성을 전투 게임의 변수로 가져와, 예상 밖의 상황 자체가 재미가 되도록 기획했습니다. 전체 기획과 개발을 혼자 담당했습니다.'],
        ['02 / 공간과 승리 규칙', '엘리베이터 한 칸에 최후의 1인이라는 목표를 두어 상대와 필연적으로 마주치고 경쟁하게 했습니다. 제한된 공간과 무기 획득이 가까운 거리에서의 판단과 상호작용으로 이어지도록 구성했습니다.'],
        ['03 / 문제를 콘텐츠로 풀기', '무기가 없는 사람이 맞으며 버티기만 하는 상황은 불합리하고, 싸움만 반복하면 지루해질 수 있다고 보았습니다. 문이 열릴 때마다 모두에게 위협적인 이벤트를 등장시켜 무기 소유의 중요성을 낮추고, 전투 중 환경에도 대응하게 하려 했습니다.'],
        ['04 / 의도한 플레이 감정', '상대를 경계하는 긴장과 예상 밖의 이벤트에서 오는 웃음이 함께 생기길 바랐습니다. 익숙한 엘리베이터와 어울리지 않는 상황의 대비를 활용해 “아니, 여기서 이런 게 왜 나와!”라는 반응을 만드는 것이 목표입니다.'],
        ['05 / 상호작용에서 발견한 문제', '상대를 붙잡아 끌고 가는 동작에서 상대가 반대 방향으로 입력하면 끌기가 성립하지 않았습니다. 핵심 행동이 플레이어의 기대와 어긋나는 문제로 보고, 카메라 움직임과 캐릭터 동작 시간을 조정했습니다.'],
        ['06 / 조정과 직접 검증', '3초의 동작 구간 중 2.8초는 입력을 반영하고 0.2초는 입력을 받지 않도록 해 끌기 동작이 성립하게 했습니다. 수정 후에는 직접 플레이하며 조작 반응과 캐릭터 사이의 상호작용을 확인했습니다.'],
        ['07 / 기획을 구체화하는 도구', 'Unity와 C#으로 규칙을 실제 플레이로 만들고, Steamworks.NET과 Netcode for GameObjects로 방 생성·참가·준비·시작 흐름을 구현했습니다. 직접 모델을 제작하는 과정에서는 AI를 보조 도구로 사용했습니다.'],
        ['08 / 회고', '재미있는 발상도 플레이어가 의도한 행동을 실행할 수 있어야 경험으로 이어집니다. 공간, 규칙, 이벤트와 조작 반응을 함께 설계하고 직접 확인하는 것이 중요하다는 관점을 얻었습니다.']
      ],
      links: [['GITHUB', 'https://github.com/shin-seong-yuk/Elevator']]
    }
  };

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const dialogs = new Map();
  for (const [key, project] of Object.entries(projects)) {
    const dialog = document.createElement('dialog');
    dialog.className = 'project-dialog';
    dialog.id = key + '-detail';
    dialog.setAttribute('aria-labelledby', key + '-dialog-title');
    dialog.innerHTML = `<div class="dialog-shell">
      <div class="dialog-top"><span>PROJECT ${project.number} / CASE STUDY</span><button type="button" class="dialog-close" aria-label="${escapeHTML(project.title)} 상세 닫기">닫기 <span aria-hidden="true">×</span></button></div>
      <div class="dialog-content">
        <p class="eyebrow">${escapeHTML(project.type)}</p>
        <h2 id="${key}-dialog-title">${escapeHTML(project.title)}</h2>
        <p class="dialog-line">${escapeHTML(project.line)}</p>
        <p class="dialog-summary">${escapeHTML(project.summary)}</p>
        <nav class="dialog-project-switcher" aria-label="다른 프로젝트 선택"><span>SELECT PROJECT</span>${Object.entries(projects).map(([projectKey, item]) => `<button type="button" data-project="${projectKey}"${projectKey === key ? ' aria-current="true"' : ''}>${escapeHTML(item.number)} ${escapeHTML(item.title)}</button>`).join('')}</nav>
        <div class="dialog-sections">${project.sections.map(([title, body]) => `<section><h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p></section>`).join('')}</div>
        <nav class="dialog-links" aria-label="${escapeHTML(project.title)} 관련 링크">${project.links.map(([label, url]) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`).join('')}</nav>
      </div>
      <div class="dialog-bottom"><span>SHIN SEONG UK / GAME DESIGN</span><button type="button" class="dialog-close">프로젝트로 돌아가기 ↑</button></div>
    </div>`;
    document.body.append(dialog);
    dialog.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.querySelectorAll('.dialog-project-switcher button').forEach(button => button.addEventListener('click', () => { if (button.dataset.project !== key) openProject(button.dataset.project); }));
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { dialog.querySelectorAll('video').forEach(video => video.pause()); document.body.classList.remove('modal-open'); });
    dialogs.set(key, dialog);
  }

  function openProject(key) {
    const dialog = dialogs.get(key);
    if (!dialog) return false;
    document.querySelectorAll('video').forEach(video => video.pause());
    document.querySelectorAll('.project-dialog[open]').forEach(open => open.close());
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    return true;
  }
  window.openPortfolioProject = openProject;
  document.querySelectorAll('.project-title-link').forEach(link => {
    const key = link.closest('.project')?.id;
    if (!dialogs.has(key)) return;
    link.setAttribute('href', '#' + key + '-detail');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-label', projects[key].title + ' 상세 팝업 열기');
    link.addEventListener('click', event => { event.preventDefault(); openProject(key); });
  });
  document.querySelectorAll('.hero-featured a').forEach(link => {
    const key = link.getAttribute('href')?.slice(1);
    if (!dialogs.has(key)) return;
    link.setAttribute('href', '#' + key + '-detail');
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => { event.preventDefault(); openProject(key); });
  });
})();
