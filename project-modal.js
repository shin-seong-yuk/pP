(() => {
  document.documentElement.classList.add('has-project-dialogs');
  const projects = {
    mefense: {
      number: '01', title: 'MeFense', type: '개인 프로젝트 · 3개월',
      line: '수학 자체가 전략이 되는 3D FPS 타워 디펜스',
      summary: '플레이어가 직접 싸우고 포탑을 건설합니다. 포탑의 수학적 항과 연산 카드를 조합해 시간에 따라 달라지는 성능을 설계합니다.',
      sections: [
        ['01 / 기획 의도', '학생들이 수학을 어렵게만 느끼지 않도록, 함수를 게임 속 선택과 결과로 접하게 하고 싶었습니다. 단순한 수치 업그레이드 대신 수식 구성·배치·전력망을 전략에 연결하고, 여러 함수를 경험할 수 있는 게임을 기획했습니다.'],
        ['02 / 시스템 기획 · 연결해야 작동하는 포탑', '설치한 포탑에는 무작위로 항이 부여됩니다. 같은 종류의 포탑에 부여된 항들을 연산자로 연결해 식을 구성해야 해당 종류의 포탑들이 작동하도록 했습니다. 분수 함수를 불리하다는 이유로 무조건 배제하기보다, 주어진 항을 어떻게 연결할지 고민하게 하려는 규칙입니다. 전체 기획과 구현을 혼자 담당했습니다.'],
        ['03 / 발견한 문제 · 초반 x³의 과도한 우위', '처음에는 증가 함수만 있었고, 초반에 x³을 얻으면 포탑 하나로 40스테이지 이후까지 방어할 수 있었습니다. 강력한 함수 하나를 얻는 행운이 이후의 배치와 성장 판단을 대체하는 문제로 보았습니다.'],
        ['04 / 조정 · 함수 종류와 등장 확률', '분수 함수를 추가하고, x³·1/x³과 일부 연산자의 등장 확률을 낮췄습니다. 강력한 조합을 쉽게 얻는 상황을 줄이면서 다양한 함수를 접하게 하려는 조정입니다. 조정 후 직접 플레이에서 변화를 체감했으며, 외부 플레이어에게도 밸런스가 잡힌 느낌이라는 정성 피드백을 받았습니다.'],
        ['05 / 직접 전투와 성장의 순환', '포탑을 설치하고 지켜보기만 하면 3D 공간을 직접 뛰어다니는 재미가 약해진다고 보았습니다. 플레이어가 직접 마무리한 적에게만 경험치를 주고, 포탑만으로 처치하면 플레이어 경험치가 오르지 않도록 했습니다. 직접 처치 → 경험치·레벨업 → 연산자와 포탑 카드 획득 → 포탑 강화로 이어지는 순환을 통해 높은 점수를 위해 직접 전투에도 참여하게 설계했습니다.'],
        ['06 / 플레이 경험의 문제', '웹 배포에서 한글과 수학 기호가 누락되고 UI와 이펙트가 다르게 표시됐습니다. 수식과 상태 정보를 읽을 수 없으면 플레이어가 전략을 판단하기 어렵기 때문에, 기획한 경험을 전달하기 위한 문제로 보았습니다.'],
        ['07 / 전달 방식의 개선', '로그로 원인을 분리한 뒤 한글·기호 폰트와 필요한 셰이더를 빌드에 포함했습니다. 플랫폼마다 달라지는 이모지는 AI로 제작한 텍스처 아이콘으로 통일하고, 16:9 화면과 임베드 영역을 맞춰 UI가 잘리지 않게 했습니다.'],
        ['08 / 배포 화면 검증', '실제 itch.io에서 10회 넘게 재배포하며 에디터와 웹 화면이 일치하는지 확인했습니다. 반복되는 WebGL 설정은 전용 빌드 메뉴로 자동화해 재발 가능성을 줄였습니다.']
      ],
      links: [['PLAY', 'https://shinseonguk.itch.io/mefense'], ['GITHUB', 'https://github.com/shin-seong-yuk/MeFense'], ['VIDEO', 'assets/video/mefense-intro-ko.mp4']]
    },
    'exit-from': {
      number: '02', title: 'EXIT_FROM', type: '개인 프로젝트 · 6개월',
      line: '자신의 행동을 재현하는 고스트와 탈출하는 퍼즐 액션',
      summary: '실험실을 배경으로 압력판, 레이저, 움직이는 발판과 고스트 전용 문을 조합해 탈출합니다. 퍼즐 시스템은 점차 타인을 도구로 바라보는 시선에 대한 질문으로 이어집니다.',
      sections: [
        ['01 / 핵심 규칙', '플레이어의 행동을 기록하고 재생하는 고스트를 퍼즐의 핵심으로 삼았습니다. 고스트에게 장치 작동을 맡기고 플레이어는 다른 경로를 이동하도록 해, 행동의 순서와 두 존재의 역할을 계획하게 했습니다. 기획·레벨 디자인·구현·UI·연출을 혼자 맡았습니다.'],
        ['02 / 레벨 디자인 · 장치의 용도 바꾸기', '문을 공중에 배치하면 통과를 막는 장치가 아니라 밟고 건너는 발판으로 사용할 수 있다고 생각했습니다. 고스트도 장치를 작동시키는 역할에서 서로를 밟고 올라가는 사다리 역할로 확장했습니다. 하나의 장치가 하나의 용도로만 쓰이지 않는다는 것을 플레이로 발견하게 하려는 퍼즐입니다.'],
        ['퍼즐 사례 / 1 · 행동을 역할별로 저장', '빨간 스위치를 켜는 행동을 1번 슬롯에, 장애물을 올리는 발판을 누르는 행동을 3번 슬롯에 기록합니다. 전진하는 행동은 2번 슬롯에 저장한 뒤, 사망으로 시작 위치에 돌아와 2번 고스트를 소환합니다. 고스트가 레이저 너머로 이동하면 위치를 교환해 건너갑니다.'],
        ['퍼즐 사례 / 2 · 기록을 갱신하고 경로 구성', '건너간 뒤에는 2번 슬롯을 파란 스위치를 켜는 행동으로 갱신합니다. 1·2번 고스트로 빨간색과 파란색 발판을 번갈아 전환하며 올라간 다음, 3번 고스트로 장애물을 올려 건너편으로 이동할 발판으로 활용합니다.'],
        ['퍼즐 사례 / 3 · 고스트를 사다리로 활용', '마지막에는 세 고스트가 서로를 밟고 올라가는 행동을 기록합니다. 플레이어가 그 위에 올라가 높은 위치에서 점프해 골인 지점으로 이동합니다. 스위치와 경로에 쓰던 기록을 새로운 역할로 바꾸는 것이 해결의 핵심입니다.'],
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
        ['02 / 직업 설계 · 꾹꾹이 고양이', '삵 진영의 직업으로, 같은 대상에게 0.5m 이내에서 꾹꾹이를 9번 해 9스택을 쌓으면 원하는 때 원거리에서 대상을 처치하도록 설계했습니다. 고양이의 귀여운 행동을 위험한 능력으로 바꿔, 귀여운 외형과 무서운 행동의 대비를 살리고자 했습니다. 현재 설계 단계이며 아직 구현하지 않았습니다.'],
        ['직업 규칙 / 접근·시간·회의의 제약', '꾹꾹이의 재사용 대기는 10초입니다. 첫 사용을 즉시 한다면 9회 사이 8번의 대기로 이론상 최소 준비 시간은 80초이며, 같은 대상에게 반복 접근해야 합니다. 회의가 열리면 누적 스택을 초기화하도록 설계했습니다. 강력한 원거리 처치에 준비와 중단 조건을 두고 사회 추리의 흐름과 연결하려는 의도입니다.'],
        ['직업 검증 계획 / 프로토타입과 내부 QA', '프로토타입을 제작해 팀 내부 QA를 진행할 예정입니다. 최소 준비 시간은 설계상 계산이며, 접근 난이도와 회의 빈도에 따른 실제 성공 가능성·밸런스는 플레이로 검증할 부분입니다.'],
        ['미션 원칙 / 쉬운 이해와 장르의 중심', '미션이 너무 재미있고 복잡하면 미션만 하러 다니며 사회 추리의 중심이 약해질 수 있다고 보았습니다. 빠르게 이해할 수 있는 간단한 조작을 기본으로 삼되, 고양이 콘셉트와 3D 공간의 강점을 담는 방향으로 기획했습니다.'],
        ['구현한 미션 / 캣잎 포장', '스크롤 7번으로 완료하도록 구현해 조작과 이해 부담을 낮추면서 고양이 콘셉트를 드러냈습니다. 구현 후 직접 동작을 확인했습니다.'],
        ['구현한 미션 / 음식 세팅의 흐름', '부엌의 음식에 하이라이트를 표시합니다. 가까이 가서 커서를 올리고 F키로 집은 뒤 식당으로 운반합니다. 긴 식탁의 세 배치 지점 중 한 곳에 가까이 가서 커서를 올리고 F키로 놓으면 음식이 배치되고 미션이 완료됩니다. 구현 후 직접 확인했습니다.'],
        ['미션 안내 / 상태에 맞는 정보와 같은 조작', '식탁의 배치 지점 하이라이트는 음식을 든 사람에게만 보이도록 했습니다. 집기와 놓기에는 같은 F키를 사용합니다. 현재 행동에 필요한 위치 정보를 보여주고, 운반과 배치의 시각적 변화로 마피아 저택의 연회 분위기를 표현했습니다.'],
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
        ['03 / 무기 우위를 흔드는 이벤트', '무기가 없는 사람이 버티기만 하는 상황과 전투의 반복을 줄이고자 공룡 습격과 거대한 볼링공 이벤트를 구현했습니다. 공룡 꼬리나 볼링공에 맞으면 무기를 놓칠 수 있어, 무기를 확보한 뒤에도 우위를 계속 유지할 수 없도록 변수를 더했습니다.'],
        ['04 / 공간도 바뀌는 전투', '일정 충격량 이상을 받으면 엘리베이터에 구멍이 생기고, 구멍으로 떨어지면 실제로 탈락합니다. 같은 위치와 행동에 머무는 전투를 흔들고, 환경 변화가 생존 판단에 영향을 주도록 설계했습니다.'],
        ['05 / 예측 불가능성과 대응의 구분', '문이 열리기 전에는 어떤 이벤트가 나올지 알 수 없게 했습니다. 대신 발생 후에는 대응할 시간을 줬습니다. 공룡은 입구에서 위협 동작 후 공격하고, 볼링공은 멀리서 굴러옵니다. 바람에는 벽을 잡고 버틸 시간을 주며, 볼링공을 보고 다른 사람 뒤에 숨거나 벽을 잡는 선택도 가능하게 했습니다. 예상 밖의 혼란은 주되, 결과가 운에만 좌우되지 않도록 대응의 여지를 두었습니다.'],
        ['06 / 의도한 플레이 감정', '상대를 경계하는 긴장과 예상 밖의 이벤트에서 오는 웃음이 함께 생기길 바랐습니다. 익숙한 엘리베이터와 어울리지 않는 상황의 대비를 활용해 “아니, 여기서 이런 게 왜 나와!”라는 반응을 만드는 것이 목표입니다.'],
        ['07 / 잡기에서 발견한 문제', '상대를 잡고 끌 수 있으면 재미있겠다고 생각했지만, 서로 반대 방향으로 입력을 유지하면 움직임이 정체되고 불쾌한 상황이 지속된다고 느꼈습니다. 단순히 잡기 기능을 추가하는 것보다, 힘겨루기 중 움직임과 반응을 어떻게 체감하게 할지가 중요했습니다.'],
        ['08 / 0.5초에서 0.2초로 조정', '모든 플레이어에게 이동 입력 제한 구간을 적용했습니다. 처음의 0.5초 제한은 직접 플레이했을 때 원하는 대로 움직이지 않는 느낌이 강해 조금씩 줄였습니다. 최종적으로 3초 중 2.8초는 입력을 반영하고 0.2초는 반영하지 않는 설정으로 조정했습니다. 카메라 움직임과 동작 시간도 함께 다듬었습니다.'],
        ['09 / 본인 테스트 결과와 다음 검증', '직접 플레이한 결과, 왕복 움직임을 통해 각자가 진행하고 있다는 느낌을 주면서 입력 제한의 답답함은 줄었다고 판단했습니다. 현재 외부 플레이 테스트는 진행하지 않았습니다. 두 사람이 실제로 느끼는 재미와 조작감은 추가로 확인할 부분입니다.'],
        ['10 / 기획을 구체화하는 도구', 'Unity와 C#으로 규칙을 실제 플레이로 만들고, Steamworks.NET과 Netcode for GameObjects로 방 생성·참가·준비·시작 흐름을 구현했습니다. 직접 모델을 제작하는 과정에서는 AI를 보조 도구로 사용했습니다.']
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
