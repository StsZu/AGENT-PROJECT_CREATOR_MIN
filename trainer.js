/* Harness Engineering Course — MIN Project Creator */

const THEORY = [
  {
    id: "m0", title: "0. Простими словами",
    html: `<h2>Ідея проєкту без жаргону</h2>
      <p>Якщо harness, ingest і wiki звучать незрозуміло — почни тут. Повний текст: <a href="SIMPLE_WORDS.md" target="_blank" rel="noopener" style="color:var(--blue)">SIMPLE_WORDS.md</a>.</p>
      <h3>Одне речення</h3>
      <p><strong>MIN</strong> — спосіб тримати будь-який проєкт у порядку: одна папка, список задач, щоденник, блокнот знань. Щоб і ти, і AI не губили контекст.</p>
      <h3>Аналогія</h3>
      <p>Новий проєкт = квартира після переїзду. <code>template/</code> — готова розстановка меблів. <code>TASKS.md</code> — список справ. <code>SESSION.md</code> — щоденник. <code>docs/</code> — блокнот «як тут все влаштовано». Kit — інструкція на складі, не сама квартира.</p>
      <h3>Три шари пам'яті</h3>
      <table style="width:100%;font-size:0.85rem;border-collapse:collapse;margin:12px 0">
        <tr style="border-bottom:1px solid var(--border)"><th style="padding:6px 8px;text-align:left">Файл</th><th style="padding:6px 8px;text-align:left">Простими словами</th></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px"><code>TASKS.md</code></td><td style="padding:6px 8px">Що робити далі</td></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px"><code>SESSION.md</code></td><td style="padding:6px 8px">Що зробив сьогодні</td></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px"><code>docs/</code></td><td style="padding:6px 8px">Блокнот знань (wiki)</td></tr>
        <tr><td style="padding:6px 8px"><code>artifacts/</code></td><td style="padding:6px 8px">Сирі докази</td></tr>
      </table>
      <h3>Після роботи</h3>
      <ul>
        <li><strong>Ingest</strong> — факти → <code>docs/</code></li>
        <li><strong>Lint</strong> — перевірка дірок і суперечностей</li>
        <li><strong>SESSION</strong> — запис у щоденник</li>
      </ul>
      <div class="callout">Далі: модуль 1 (технічніше). Урок 0: <a href="course.html?lesson=lessons%2F00-simple-words.md" style="color:var(--blue)">course.html</a></div>`
  },
  {
    id: "m1", title: "1. Harness mindset",
    html: `<h2>Що таке Harness Engineering</h2>
      <p>Harness — це <strong>операційна рамка</strong> навколо будь-якої задачі: структура папки, ритуали сесії, режими безпеки, backlog і закриття циклу. Не «ще один README», а система, яка тримає проєкт керованим разом з AI-агентом.</p>
      <h3>Ключові принципи MIN</h3>
      <ul>
        <li><strong>Один проєкт = одна папка</strong> — універсально для API, сайту, інфра, курсу, hardware.</li>
        <li><strong>Root = control room</strong> — entrypoints і org-документи, не сміття й не raw exports.</li>
        <li><strong>Файли &gt; пам'ять агента</strong> — локальні markdown = source of truth.</li>
        <li><strong>Default READ-ONLY</strong> — write лише на конкретну задачу з approval.</li>
        <li><strong>Одна задача за раз</strong> — атомарний цикл сесії.</li>
      </ul>
      <div class="callout"><strong>Мета курсу:</strong> навчити створювати універсальний AI-ready проєкт для будь-якої задачі — зі структурою папок і operational harness, а не з хаотичною папкою «де все лежить».</div>
      <h3>Рівні harness</h3>
      <p><span class="badge">Level 1</span> docs-only — README, TASKS, SESSION, DEMO.</p>
      <p><span class="badge">Level 2</span> ops — + DECISIONS, RISKS, docs/, WORK_MODES.</p>
      <p><span class="badge">Level 3</span> automation — + scripts/, tests/, pipeline (за потреби домену).</p>`
  },
  {
    id: "m2", title: "2. Структура папки",
    html: `<h2>Канонічна структура MIN-проєкту</h2>
<pre>my-project/
├── README.md          # TL;DR + Done when
├── CLAUDE.md          # правила для агента (schema)
├── TASKS.md           # canonical backlog
├── SESSION.md         # mode + журнал (append-only)
├── DECISIONS.md       # ADR
├── RISKS.md           # реєстр ризиків
├── DEMO.md            # приймальний сценарій
├── WORK_MODES.md      # ChatGPT / CLI / Terminal
├── simple_words.md    # без жаргону для замовника
├── docs/              # доменна wiki
├── artifacts/         # evidence, outputs (опц.)
├── tasks/             # матеріали задач (опц.)
└── _attic/            # карантин legacy (Mode B)</pre>
      <h3>Що куди</h3>
      <ul>
        <li><code>TASKS.md</code> — єдиний backlog. <code>tasks/</code> — evidence, prompts, не список задач.</li>
        <li><code>SESSION.md</code> — <code>Current Execution Mode</code> живе <strong>тільки тут</strong>.</li>
        <li><code>docs/</code> — operational memory (wiki). <code>artifacts/</code> — raw evidence.</li>
        <li><code>template/</code> у kit — шаблон; у новому проєкті його немає.</li>
      </ul>
      <div class="callout">Kit <code>AGENT-PROJECT_CREATOR_MIN</code> містить методику + <code>template/</code>. Новий проєкт = <code>cp -r template/. &lt;target&gt;/</code>.</div>`
  },
  {
    id: "m3", title: "3. 12 золотих правил",
    html: `<h2>STANDART.md — концентрат</h2>
      <ol>
        <li>Один проєкт — одна папка.</li>
        <li>Bootstrap за 10 хв (<code>cp template</code> + PROMPT Mode A).</li>
        <li>Done when — спостережуване («натискаю X, бачу Y»), не «працює».</li>
        <li>Один факт — один власник (не дублювати mode між файлами).</li>
        <li>READ-ONLY за замовчуванням.</li>
        <li>Одна задача за раз.</li>
        <li>Карантин <code>_attic/</code> замість <code>rm -rf</code>.</li>
        <li>Файли &gt; пам'ять агента.</li>
        <li>UNKNOWN / NOT VERIFIED / VERIFIED — не вигадувати.</li>
        <li>Кожна сесія — атомарний цикл.</li>
        <li><code>DEMO.md</code> — фінальний тест sign-off.</li>
        <li>Шаблон kit лишається шаблоном.</li>
      </ol>
      <div class="callout"><span class="badge risk">STOP</span> Перезапис папки, deploy, mass rename — завжди explicit approval.</div>`
  },
  {
    id: "m4", title: "4. Bootstrap Mode A",
    html: `<h2>Новий проєкт за 10 хвилин</h2>
      <h3>Послідовність</h3>
      <ol>
        <li>Визначити <code>&lt;KIT_PATH&gt;</code> — шлях до AGENT-PROJECT_CREATOR_MIN.</li>
        <li><code>cp -r &lt;KIT_PATH&gt;/template/. &lt;target&gt;/</code></li>
        <li>Запустити <code>PROMPT.md</code> Mode A в CLI-агенті (A1–A10).</li>
        <li>Агент заповнює: README, CLAUDE, simple_words, DEMO, TASKS.</li>
        <li>Перший запис SESSION: <code>Current Execution Mode: READ-ONLY</code>.</li>
      </ol>
      <h3>Інтерв'ю A1–A10 (коротко)</h3>
      <p>Назва, шлях, опис, проблема, Done when (3–7), default mode, мова, заборонені дії, перші задачі P0, наявний матеріал.</p>
      <pre>claude
Прочитай &lt;KIT_PATH&gt;/PROMPT.md і виконай Mode A.
Цільова папка: &lt;PROJECTS_ROOT&gt;/my-api-project</pre>`
  },
  {
    id: "m5", title: "5. Session harness",
    html: `<h2>Атомарний цикл сесії</h2>
      <p><strong>Одна сесія = одна задача</strong> з TASKS.md. Не «потім запишу» — або зафіксовано в SESSION, або не зроблено.</p>
      <h3>Session start</h3>
      <ol>
        <li>Відкрити <code>SESSION.md</code> → Current Execution Mode + де зупинились.</li>
        <li>Відкрити <code>TASKS.md</code> → одна READY (+ Safety відповідає mode).</li>
        <li>Перевірити <code>Done when</code> задачі — порожнє = не починати.</li>
        <li>Виконати → зафіксувати в SESSION + оновити TASKS.</li>
      </ol>
      <h3>Wiki-операції harness</h3>
      <ul>
        <li><strong>Query</strong> — старт: читати README, TASKS, SESSION, релевантні docs/.</li>
        <li><strong>Ingest</strong> — після роботи: оновити docs/ з evidence (людина в loop).</li>
        <li><strong>Lint</strong> — close-out: UNKNOWN без evidence, дублі, orphan docs.</li>
      </ul>
      <div class="callout">Префікс логу: <code>## [YYYY-MM-DD] ingest | P0-001</code> — parseable хронологія.</div>`
  },
  {
    id: "m6", title: "6. TASKS.md протокол",
    html: `<h2>Backlog як протокол, не wishlist</h2>
      <h3>Обов'язкові поля задачі</h3>
<pre>### [ ] P0-001: Назва
- Status: READY
- Safety: READ-ONLY | WRITE | RISKY
- Output: &lt;артефакт&gt;
- Steps: 1. 2. 3.
- Do not: &lt;межі&gt;
- Done when: &lt;спостережуваний критерій&gt;</pre>
      <h3>Legend</h3>
      <p>Status: <code>[ ]</code> READY · <code>[~]</code> IN PROGRESS · <code>[x]</code> DONE · <code>[!]</code> BLOCKED · <code>[A]</code> APPROVAL</p>
      <p>Safety: READ-ONLY безпечно · WRITE локальні файли · RISKY — deploy/delete, тільки approval.</p>
      <div class="callout">Задача без <code>Done when</code> — не задача. «Все працює» — не критерій.</div>`
  },
  {
    id: "m7", title: "7. WORK_MODES & safety",
    html: `<h2>Хто що робить</h2>
      <p><em>Model decides. CLI executes. Results guide the next step.</em></p>
      <table style="width:100%;font-size:0.85rem;border-collapse:collapse;margin:12px 0">
        <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px">Режим</th><th style="text-align:left;padding:6px">Для чого</th></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px">ChatGPT Project</td><td style="padding:6px">план, review diff, prompt для CLI</td></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px">Claude / Codex CLI</td><td style="padding:6px">repo worker, read-only audit</td></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px">Terminal</td><td style="padding:6px">реальні команди з verification</td></tr>
        <tr><td style="padding:6px">Live systems</td><td style="padding:6px">production — тільки RISKY + approval</td></tr>
      </table>
      <h3>Global prohibitions</h3>
      <ul>
        <li>Не <code>--force</code>, <code>rm -rf</code>, <code>--no-verify</code> без approval.</li>
        <li>Не комітити ACCESS.md, .env, *.key.</li>
        <li>AI не auto-execute небезпечних змін.</li>
      </ul>`
  },
  {
    id: "m8", title: "8. Migration Mode B",
    html: `<h2>Legacy → MIN за 3 проходи</h2>
      <p>Контракт: <strong>жодних видалень</strong> без approval. Карантин <code>_attic/YYYY-MM-DD/</code>.</p>
      <h3>Прохід 1 — аудит (READ-ONLY)</h3>
      <p>Три таблиці: MIN-роль → один кандидат · кілька кандидатів (дублі) · не вписується (сміття). STOP до approval.</p>
      <h3>Прохід 2 — START_HERE + гепи</h3>
      <p>Створити START_HERE.md (карта MIN-роль → файл), відсутні MIN-файли, TASKS.md якщо немає.</p>
      <h3>Прохід 3 — карантин</h3>
      <p><code>mv</code> кандидатів у <code>_attic/</code> одним списком Y/N. Не merge дублів автоматично.</p>
      <pre>claude
Прочитай &lt;KIT_PATH&gt;/PROMPT.md і виконай Mode B на поточній папці.</pre>`
  },
  {
    id: "m9", title: "9. Agent memory",
    html: `<h2>Пам'ять агента в MIN-проєкті</h2>
      <table style="width:100%;font-size:0.85rem;border-collapse:collapse;margin:12px 0">
        <tr style="border-bottom:1px solid var(--border)"><th style="padding:6px 8px">Підхід</th><th style="padding:6px 8px">У MIN</th></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px">LLM Wiki</td><td style="padding:6px 8px"><code>docs/</code> + README</td></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px">Agent memory</td><td style="padding:6px 8px">SESSION, TASKS, DECISIONS</td></tr>
        <tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px">Raw sources</td><td style="padding:6px 8px"><code>artifacts/</code></td></tr>
        <tr><td style="padding:6px 8px">Schema</td><td style="padding:6px 8px"><code>CLAUDE.md</code>, <code>AGENTS.md</code></td></tr>
      </table>
      <h3>Safe agent prompt</h3>
<pre>Mode: READ-ONLY
Read: README.md, TASKS.md, SESSION.md, CLAUDE.md
Task: work only on P0-001
Forbidden: unrelated edits, secrets, auto-commit, rm -rf</pre>`
  },
  {
    id: "m10", title: "10. Sign-off & DEMO",
    html: `<h2>Завершення проєкту або фази</h2>
      <ol>
        <li>Пройти <code>DEMO.md</code> крок за кроком без помилок.</li>
        <li>Перевірити README → Done when: усі чекбокси.</li>
        <li>Закрити P0 у TASKS або Won't do з причиною.</li>
        <li>Фінальний запис SESSION: DONE / FROZEN.</li>
      </ol>
      <h3>DEMO ≠ «показати слайди»</h3>
      <p>Кожен крок Done when → один спостережуваний крок DEMO. Відмічені чекбокси без живого проходження — недостатньо.</p>
      <div class="callout">Після курсу: bootstrap реального проєкту Mode A + одна повна сесія P0-001 + lint docs.</div>`
  }
];

const MODULES = {
  bootstrap: {
    id: "bootstrap", title: "1. Bootstrap Mode A",
    shell: "zsh", prompt: "szubar@Mac AGENT-PROJECT_CREATOR_MIN %",
    intro: "Створити новий MIN-проєкт: переглянути kit, скопіювати template, перевірити структуру.",
    commands: [
      "ls -1",
      "ls -1 template/",
      "cp -r template/. /tmp/min-practice/",
      "ls -1 /tmp/min-practice/",
      "head -8 /tmp/min-practice/README.md",
      "grep -c \"Done when\" /tmp/min-practice/README.md"
    ]
  },
  session: {
    id: "session", title: "2. Session start",
    shell: "zsh", prompt: "szubar@Mac min-practice %",
    intro: "Початок сесії в bootstrapped проєкті: mode, backlog, контекст.",
    commands: [
      "cat SESSION.md | head -12",
      "grep \"Current Execution Mode\" SESSION.md",
      "cat TASKS.md | head -18",
      "grep -E \"\\[ \\].*READY\" TASKS.md",
      "grep \"Done when\" TASKS.md | head -3"
    ]
  },
  task: {
    id: "task", title: "3. Виконання задачі",
    shell: "zsh", prompt: "szubar@Mac min-practice %",
    intro: "Взяти P0-001: перевірити поля, змінити статус, зафіксувати output.",
    commands: [
      "grep -A 12 \"P0-001\" TASKS.md",
      "grep \"Safety:\" TASKS.md | head -3",
      "sed -n '1,5p' DEMO.md",
      "grep \"READ-ONLY\" CLAUDE.md",
      "grep \"UNKNOWN\" docs/00-README.md || echo \"no UNKNOWN in docs map\""
    ]
  },
  ingest: {
    id: "ingest", title: "4. Wiki ingest & lint",
    shell: "zsh", prompt: "szubar@Mac min-practice %",
    intro: "Після роботи: lint docs, ingest фактів, запис у SESSION.",
    commands: [
      "grep -r \"UNKNOWN\" docs/ 2>/dev/null || echo \"(no UNKNOWN)\"",
      "cat docs/01-domain-template.md | head -10",
      "echo '## [2026-07-03] ingest | P0-001' >> SESSION.md",
      "echo '- Updated docs/01 from verification' >> SESSION.md",
      "tail -5 SESSION.md"
    ]
  },
  migration: {
    id: "migration", title: "5. Mode B audit",
    shell: "zsh", prompt: "szubar@Mac legacy-messy-project %",
    intro: "READ-ONLY аудит legacy: знайти сміття й дублі перед карантином.",
    commands: [
      "ls -1",
      "find . -maxdepth 2 -name 'Untitled*' -type f",
      "find . -name '.DS_Store' | wc -l",
      "wc -l *.md 2>/dev/null | tail -5",
      "test -f START_HERE.md && echo OK || echo MISSING: START_HERE.md"
    ]
  },
  attic: {
    id: "attic", title: "6. Карантин _attic",
    shell: "zsh", prompt: "szubar@Mac legacy-messy-project %",
    intro: "Після approval: перемістити сміття в _attic/ (не rm -rf).",
    commands: [
      "mkdir -p _attic/2026-07-03",
      "mv Untitled.md _attic/2026-07-03/ 2>/dev/null; echo moved: Untitled.md",
      "ls -1 _attic/2026-07-03/",
      "test ! -f Untitled.md && echo OK: root clean",
      "echo 'D-001: quarantine legacy noise' >> DECISIONS.md"
    ]
  },
  git: {
    id: "git", title: "7. Git hygiene",
    shell: "zsh", prompt: "szubar@Mac min-practice %",
    intro: "Перед commit: status, diff, secrets не в git.",
    commands: [
      "git status --short",
      "git diff --stat",
      "git check-ignore -v .env",
      "git check-ignore -v ACCESS.md",
      "grep -l \"password\\|secret\" *.md 2>/dev/null | head -3 || echo \"(scan OK)\""
    ]
  },
  demo: {
    id: "demo", title: "8. DEMO sign-off",
    shell: "zsh", prompt: "szubar@Mac min-practice %",
    intro: "Фінальна перевірка: DEMO кроки й Done when у README.",
    commands: [
      "grep -c \"^- \\[\" DEMO.md",
      "grep \"Done when\" README.md | head -5",
      "grep \"\\[x\\]\" TASKS.md | wc -l",
      "tail -3 SESSION.md",
      "echo '## [2026-07-03] close-out | phase-1 DONE' >> SESSION.md"
    ]
  }
};

const UK_HINTS = {
  "ls -1": "Перелік root kit — STANDART, METHODOLOGY, template/, index.html.",
  "ls -1 template/": "Файли, що копіюються в новий проєкт.",
  "cp -r template/. /tmp/min-practice/": "Bootstrap: копіюємо вміст template/, не саму папку template.",
  "ls -1 /tmp/min-practice/": "Перевірка: README, CLAUDE, TASKS, SESSION, docs/.",
  "head -8 /tmp/min-practice/README.md": "TL;DR і статус нового проєкту.",
  "grep -c \"Done when\" /tmp/min-practice/README.md": "Done when має бути в README (placeholder або заповнений).",
  "cat SESSION.md | head -12": "Mode + останні записи — єдине джерело Current Execution Mode.",
  "grep \"Current Execution Mode\" SESSION.md": "Перевірити READ-ONLY / WRITE перед роботою.",
  "cat TASKS.md | head -18": "Canonical backlog — не плутати з tasks/.",
  "grep -E \"\\[ \\].*READY\" TASKS.md": "Задачі готові до виконання.",
  "grep \"Done when\" TASKS.md | head -3": "Кожна задача має спостережуваний критерій.",
  "grep -A 12 \"P0-001\" TASKS.md": "Повний контекст однієї задачі.",
  "grep \"Safety:\" TASKS.md | head -3": "Safety має відповідати Current Execution Mode.",
  "sed -n '1,5p' DEMO.md": "Приймальний сценарій — фінальний тест.",
  "grep \"READ-ONLY\" CLAUDE.md": "Default mode в правилах агента.",
  "grep \"UNKNOWN\" docs/00-README.md || echo \"no UNKNOWN in docs map\"": "Lint: невідомі факти позначені явно.",
  "grep -r \"UNKNOWN\" docs/ 2>/dev/null || echo \"(no UNKNOWN)\"": "Lint wiki — факти без evidence.",
  "cat docs/01-domain-template.md | head -10": "Query доменної документації.",
  "echo '## [2026-07-03] ingest | P0-001' >> SESSION.md": "Ingest: хронологічний запис (log.md-стиль).",
  "echo '- Updated docs/01 from verification' >> SESSION.md": "Деталі ingest — що оновлено з evidence.",
  "tail -5 SESSION.md": "Перевірити append-only журнал.",
  "find . -maxdepth 2 -name 'Untitled*' -type f": "Mode B: кандидати на карантин.",
  "find . -name '.DS_Store' | wc -l": "OS-сміття в legacy.",
  "wc -l *.md 2>/dev/null | tail -5": "Огляд обсягу markdown у root.",
  "test -f START_HERE.md && echo OK || echo MISSING: START_HERE.md": "Mode B pass 2: точка входу.",
  "mkdir -p _attic/2026-07-03": "Карантин замість видалення.",
  "mv Untitled.md _attic/2026-07-03/ 2>/dev/null; echo moved: Untitled.md": "Перенос сміття після approval.",
  "ls -1 _attic/2026-07-03/": "Перевірка карантину.",
  "test ! -f Untitled.md && echo OK: root clean": "Root без сміття.",
  "echo 'D-001: quarantine legacy noise' >> DECISIONS.md": "ADR для необоротних cleanup-рішень.",
  "git status --short": "Що змінилось перед commit.",
  "git diff --stat": "Обсяг змін.",
  "git check-ignore -v .env": "Секрети мають бути ignored.",
  "git check-ignore -v ACCESS.md": "ACCESS.md не в git.",
  "grep -l \"password\\|secret\" *.md 2>/dev/null | head -3 || echo \"(scan OK)\"": "Швидкий scan на витік у markdown.",
  "grep -c \"^- \\[\" DEMO.md": "Кількість кроків DEMO.",
  "grep \"Done when\" README.md | head -5": "Критерії приймання проєкту.",
  "grep \"\\[x\\]\" TASKS.md | wc -l": "Скільки задач закрито.",
  "tail -3 SESSION.md": "Останній контекст сесії.",
  "echo '## [2026-07-03] close-out | phase-1 DONE' >> SESSION.md": "Закриття фази в SESSION."
};

const QUIZ = [
  {
    id: "mindset", label: "Harness mindset", questions: [
      { title: "Harness", question: "Що таке harness у контексті MIN?",
        options: [{text:"Операційна рамка: структура + ритуали + safety",correct:true},{text:"Тільки папка scripts/",correct:false},{text:"Docker-compose для dev",correct:false}],
        feedback:"Harness = control room + session cycle + TASKS protocol + modes." },
      { title: "Один факт", question: "Де живе Current Execution Mode?",
        options: [{text:"Тільки в SESSION.md",correct:true},{text:"В TASKS.md і SESSION.md",correct:false},{text:"В CLAUDE.md",correct:false}],
        feedback:"Правило 4: один факт — один власник. Mode тільки в SESSION." },
      { title: "Default", question: "Який режим за замовчуванням?",
        options: [{text:"READ-ONLY",correct:true},{text:"WRITE",correct:false},{text:"RISKY",correct:false}],
        feedback:"Mode підвищується явно на конкретну задачу." },
      { title: "Bootstrap", question: "Скільки часу має займати bootstrap Mode A?",
        options: [{text:"~10 хвилин",correct:true},{text:"2–3 дні",correct:false},{text:"Тиждень планування",correct:false}],
        feedback:"cp template + PROMPT A1–A10. >30 хв = сигнал проблеми." }
    ]
  },
  {
    id: "structure", label: "Структура", questions: [
      { title: "TASKS vs tasks", question: "Де canonical backlog?",
        options: [{text:"TASKS.md у root",correct:true},{text:"Папка tasks/",correct:false},{text:"README.md",correct:false}],
        feedback:"tasks/ — матеріали (prompts, evidence), не backlog." },
      { title: "DEMO", question: "Навіщо DEMO.md?",
        options: [{text:"Фінальний спостережуваний sign-off",correct:true},{text:"Демо для інвесторів",correct:false},{text:"Дубль README",correct:false}],
        feedback:"Кожен Done when → крок DEMO. Живе проходження обов'язкове." },
      { title: "template", question: "Що копіюється в новий проєкт?",
        options: [{text:"Вміст template/ (крапка після template/)",correct:true},{text:"Вся папка AGENT-PROJECT_CREATOR_MIN",correct:false},{text:"Тільки README.md",correct:false}],
        feedback:"cp -r <KIT>/template/. <target>/ — без PROMPT.md kit-рівня." },
      { title: "docs", question: "Що в docs/?",
        options: [{text:"Доменна wiki / operational memory",correct:true},{text:"Raw .env файли",correct:false},{text:"Git objects",correct:false}],
        feedback:"artifacts/ = evidence. docs/ = compiled knowledge." }
    ]
  },
  {
    id: "tasks", label: "TASKS протокол", questions: [
      { title: "Done when", question: "Задача без Done when — це…",
        options: [{text:"Не задача — спочатку критерій",correct:true},{text:"Нормально для P2",correct:false},{text:"OK якщо агент впевнений",correct:false}],
        feedback:"«Працює» не критерій. «Файл X містить N рядків» — критерій." },
      { title: "Safety RISKY", question: "Коли Safety: RISKY?",
        options: [{text:"Deploy, delete, production side effects",correct:true},{text:"Читання README",correct:false},{text:"Оновлення SESSION.md",correct:false}],
        feedback:"RISKY потребує одноразового approval на задачу." },
      { title: "Одна задача", question: "Скільки задач паралельно в одній сесії?",
        options: [{text:"Одна",correct:true},{text:"Скільки встигну",correct:false},{text:"Мінімум три P0",correct:false}],
        feedback:"Правило 6: одна задача за раз." },
      { title: "P0", question: "Коли починати P1?",
        options: [{text:"Коли всі P0 DONE або BLOCKED",correct:true},{text:"Одразу паралельно з P0",correct:false},{text:"Ніколи",correct:false}],
        feedback:"Пріоритет жорсткий: P0 першим." }
    ]
  },
  {
    id: "safety", label: "Safety & modes", questions: [
      { title: "Карантин", question: "Що робити з legacy-сміттям у Mode B?",
        options: [{text:"mv у _attic/YYYY-MM-DD/",correct:true},{text:"rm -rf одразу",correct:false},{text:"Залишити в root",correct:false}],
        feedback:"Правило 7: карантин замість видалення." },
      { title: "Факти", question: "Немає verification — як позначити в docs?",
        options: [{text:"UNKNOWN або NOT VERIFIED",correct:true},{text:"VERIFIED — агент сказав",correct:false},{text:"Не писати нічого",correct:false}],
        feedback:"Правило 9: не вигадувати. Evidence → VERIFIED." },
      { title: "Secrets", question: "Що не комітити?",
        options: [{text:".env, ACCESS.md, *.key",correct:true},{text:"TASKS.md",correct:false},{text:"DEMO.md",correct:false}],
        feedback:"ACCESS.example.md — шаблон у git. ACCESS.md — локально." },
      { title: "AI write", question: "Чи може агент сам виконати rm -rf / deploy?",
        options: [{text:"Ні без explicit approval",correct:true},{text:"Так для P0",correct:false},{text:"Так у READ-ONLY",correct:false}],
        feedback:"AI advisory. Небезпечні дії — людина + approval." }
    ]
  },
  {
    id: "migration", label: "Mode B", questions: [
      { title: "Прохід 1", question: "Прохід 1 Mode B — що дозволено?",
        options: [{text:"Тільки READ-ONLY аудит",correct:true},{text:"Видалення дублів",correct:false},{text:"Авто-merge файлів",correct:false}],
        feedback:"Три таблиці → approval → pass 2." },
      { title: "START_HERE", question: "Що створює Прохід 2?",
        options: [{text:"START_HERE.md + відсутні MIN-файли",correct:true},{text:"Видалення legacy",correct:false},{text:"Новий git repo",correct:false}],
        feedback:"START_HERE = MIN-роль → реальний файл." },
      { title: "Merge дублів", question: "Чи merge-ити дублі автоматично?",
        options: [{text:"Ні — merge задача людини",correct:true},{text:"Так, 90% схожості достатньо",correct:false},{text:"Так, агент знає краще",correct:false}],
        feedback:"10% відмінностей можуть бути критичними." },
      { title: "Mode B prompt", question: "Як запустити Mode B?",
        options: [{text:"PROMPT.md Mode B у папці legacy-проєкту",correct:true},{text:"Mode A у новій папці",correct:false},{text:"Тільки вручну без PROMPT",correct:false}],
        feedback:"cd legacy && claude → Прочитай PROMPT.md Mode B." }
    ]
  },
  {
    id: "memory", label: "Agent memory", questions: [
      { title: "Schema", question: "Що є schema для агента?",
        options: [{text:"CLAUDE.md / AGENTS.md — policy",correct:true},{text:"SESSION.md only",correct:false},{text:".git/config",correct:false}],
        feedback:"Schema = правила гри. Wiki = docs/. Memory = SESSION." },
      { title: "Ingest", question: "Що таке ingest у harness?",
        options: [{text:"Оновити docs/ з evidence після роботи",correct:true},{text:"Видалити TASKS.md",correct:false},{text:"Auto-commit від AI",correct:false}],
        feedback:"Ingest — з CLI/file evidence, людина в loop." },
      { title: "Lint", question: "Lint wiki — це…",
        options: [{text:"UNKNOWN, суперечності, orphan docs",correct:true},{text:"Видалити всі markdown",correct:false},{text:"Reformat git history",correct:false}],
        feedback:"Lint = health-check, не auto-fix." },
      { title: "Source of truth", question: "Конфлікт: файл vs пам'ять агента?",
        options: [{text:"Пріоритет у файлу проєкту",correct:true},{text:"Пріоритет у агента",correct:false},{text:"Видалити файл",correct:false}],
        feedback:"Правило 8: файли > agent memory." }
    ]
  }
];

const SIM = {
  cwd: "kit",
  bootstrapped: false,
  legacy: { hasUntitled: true, attic: [] },
  kitList: ["STANDART.md", "METHODOLOGY.md", "PROMPT.md", "RUN.md", "AGENTS.md", "template/", "index.html", "lessons/", "trainer.js"],
  templateList: ["README.md", "CLAUDE.md", "TASKS.md", "SESSION.md", "DECISIONS.md", "RISKS.md", "DEMO.md", "WORK_MODES.md", "simple_words.md", "ACCESS.example.md", "docs/"],
  projectList: ["README.md", "CLAUDE.md", "TASKS.md", "SESSION.md", "DECISIONS.md", "RISKS.md", "DEMO.md", "WORK_MODES.md", "simple_words.md", "docs/", "artifacts/"],
  legacyList: ["README.md", "notes-old.md", "Untitled.md", "TASKS.md", "random-backup.bak", "docs/"],
  files: {
    kit: {},
    project: {
      "README.md": "# min-practice\n\n> MIN harness project\n\n**Status:** in-progress\n\n## Done when\n- [ ] DEMO.md passes step by step\n- [ ] P0-001 closed with artifact",
      "CLAUDE.md": "# CLAUDE.md\n\nDefault mode: READ-ONLY\n\nForbidden without approval: rm -rf, deploy, delete production data",
      "TASKS.md": "# TASKS\n\n### [ ] P0-001: Document API contract\n- Status: READY\n- Safety: READ-ONLY\n- Output: docs/01-api.md draft\n- Done when: file docs/01-api.md exists with 3 endpoints\n\n### [!] P0-002: Deploy staging\n- Status: BLOCKED\n- Safety: RISKY",
      "SESSION.md": "Current Execution Mode: READ-ONLY\n\n## 2026-07-03 bootstrap\n- Mode A completed via PROMPT\n- Next: P0-001",
      "DECISIONS.md": "# DECISIONS\n\n",
      "DEMO.md": "# DEMO\n\n- [ ] Step 1: open README, see project name\n- [ ] Step 2: run health check command\n- [ ] Step 3: verify docs/01-api.md",
      "docs/00-README.md": "# docs map\n- 01-domain-template.md — domain guide",
      "docs/01-domain-template.md": "# Domain template\n\n## Endpoints\n- GET /health — VERIFIED\n- POST /items — UNKNOWN"
    },
    legacy: {
      "README.md": "# Legacy project (messy)",
      "Untitled.md": "",
      "TASKS.md": "# Old TODO list",
      "notes-old.md": "duplicate of README?",
      "DECISIONS.md": "# DECISIONS\n"
    }
  },
  git: { staged: [], unstaged: ["SESSION.md"], ignored: [".env", "ACCESS.md"] }
};

let currentModule = "bootstrap";
let triedByModule = Object.fromEntries(Object.keys(MODULES).map(k => [k, new Set()]));
let termHistory = [];
let histIdx = -1;
let quizState = { section: null, index: 0, answers: {}, mode: "one" };

function projectPath() {
  return SIM.cwd === "legacy" ? "legacy-messy-project" : (SIM.cwd === "project" ? "min-practice" : "AGENT-PROJECT_CREATOR_MIN");
}

function renderTheoryNav() {
  const nav = document.getElementById("theoryNav");
  nav.innerHTML = THEORY.map((m, i) =>
    `<li data-id="${m.id}" class="${i === 0 ? "active" : ""}">${m.title}</li>`
  ).join("");
  nav.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      nav.querySelectorAll("li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      document.getElementById("theoryContent").innerHTML = THEORY.find(t => t.id === li.dataset.id).html;
      li.classList.add("done");
    });
  });
  document.getElementById("theoryContent").innerHTML = THEORY[0].html;
}

function renderPracticeNav() {
  const nav = document.getElementById("practiceNav");
  nav.innerHTML = Object.values(MODULES).map(m =>
    `<li data-id="${m.id}" class="${m.id === currentModule ? "active" : ""}">${m.title}</li>`
  ).join("");
  nav.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => switchModule(li.dataset.id));
  });
  updatePracticeUI();
}

function switchModule(id) {
  currentModule = id;
  document.getElementById("termOut").innerHTML = "";
  const mod = MODULES[id];
  if (id === "bootstrap") SIM.cwd = "kit";
  else if (id === "migration" || id === "attic") SIM.cwd = "legacy";
  else SIM.cwd = "project";
  document.getElementById("termTitle").textContent = "macOS zsh — " + mod.title;
  document.getElementById("termPrompt").textContent = mod.prompt;
  appendLine("hint", mod.intro);
  renderPracticeNav();
}

function updatePracticeUI() {
  const mod = MODULES[currentModule];
  const tried = triedByModule[currentModule];
  const total = mod.commands.length;
  const done = tried.size;
  document.getElementById("practiceProgress").style.width = (done / total * 100) + "%";
  document.getElementById("practiceStats").textContent = `${done} / ${total} команд`;
  document.getElementById("cmdList").innerHTML = mod.commands.map(c =>
    `<li class="${tried.has(c) ? "done" : ""}" data-cmd="${encodeURIComponent(c)}">${c}</li>`
  ).join("");
  document.getElementById("cmdList").querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => runCommand(decodeURIComponent(li.dataset.cmd)));
  });
  document.getElementById("practiceNav").querySelectorAll("li").forEach(li => {
    li.classList.toggle("active", li.dataset.id === currentModule);
    if (triedByModule[li.dataset.id]?.size === MODULES[li.dataset.id].commands.length) li.classList.add("done");
  });
}

function appendLine(cls, text) {
  const out = document.getElementById("termOut");
  const d = document.createElement("div");
  d.className = "line " + (cls || "");
  d.textContent = text;
  out.appendChild(d);
  out.scrollTop = out.scrollHeight;
}

function markTried(cmd) {
  if (MODULES[currentModule].commands.includes(cmd)) triedByModule[currentModule].add(cmd);
  updatePracticeUI();
}

function runCommand(raw) {
  const cmd = raw.trim();
  if (!cmd) return;
  termHistory.push(cmd);
  histIdx = termHistory.length;
  const mod = MODULES[currentModule];
  appendLine("prompt", mod.prompt + " " + cmd);

  if (/\brm\s+-rf\b/i.test(cmd) && !/2>\/dev\/null/.test(cmd)) {
    appendLine("danger", "⛔ rm -rf заборонено без explicit approval. Використай _attic/ карантин.");
    return;
  }

  const out = handleCommand(cmd);
  if (out) {
    if (out.type === "danger") appendLine("danger", out.text);
    else appendLine("", out.text || out);
  }
  const hintKey = Object.keys(UK_HINTS).find(k => k === cmd || cmd.startsWith(k.split(" ")[0] + " "));
  if (UK_HINTS[cmd]) appendLine("hint", "💡 " + UK_HINTS[cmd]);
  else if (hintKey && UK_HINTS[hintKey] && mod.commands.includes(cmd)) appendLine("hint", "💡 " + UK_HINTS[hintKey]);
  markTried(cmd);
}

function handleCommand(cmd) {
  const pf = SIM.files.project;
  const lf = SIM.files.legacy;

  if (cmd === "ls -1") {
    if (SIM.cwd === "kit") return { text: SIM.kitList.join("\n") };
    if (SIM.cwd === "legacy") {
      const list = SIM.legacyList.filter(f => f !== "Untitled.md" || SIM.legacy.hasUntitled);
      return { text: list.join("\n") };
    }
    return { text: SIM.projectList.join("\n") };
  }
  if (cmd === "ls -1 template/") return { text: SIM.templateList.join("\n") };
  if (cmd === "cp -r template/. /tmp/min-practice/") {
    SIM.bootstrapped = true;
    SIM.cwd = "project";
    return { text: "(bootstrap OK — template copied to /tmp/min-practice/)" };
  }
  if (cmd === "ls -1 /tmp/min-practice/") return { text: SIM.projectList.join("\n") };
  if (cmd.startsWith("head -8 /tmp/min-practice/README")) return { text: pf["README.md"].split("\n").slice(0, 8).join("\n") };
  if (cmd.includes("grep -c \"Done when\" /tmp/min-practice/README")) return { text: "1" };

  if (cmd.startsWith("cat SESSION.md")) return { text: pf["SESSION.md"].split("\n").slice(0, 12).join("\n") };
  if (cmd.includes("grep \"Current Execution Mode\" SESSION")) return { text: "Current Execution Mode: READ-ONLY" };
  if (cmd.startsWith("cat TASKS.md")) return { text: pf["TASKS.md"].split("\n").slice(0, 18).join("\n") };
  if (cmd.includes("grep -E") && cmd.includes("READY")) return { text: "### [ ] P0-001: Document API contract" };
  if (cmd.includes("grep \"Done when\" TASKS") && cmd.includes("head")) return { text: "- Done when: file docs/01-api.md exists with 3 endpoints" };

  if (cmd.includes("grep -A 12 \"P0-001\"")) return { text: pf["TASKS.md"].split("\n").slice(2, 14).join("\n") };
  if (cmd.includes("grep \"Safety:\" TASKS")) return { text: "- Safety: READ-ONLY\n- Safety: RISKY" };
  if (cmd.startsWith("sed -n '1,5p' DEMO")) return { text: pf["DEMO.md"].split("\n").slice(0, 5).join("\n") };
  if (cmd.includes("grep \"READ-ONLY\" CLAUDE")) return { text: "Default mode: READ-ONLY" };
  if (cmd.includes("UNKNOWN\" docs/00")) return { text: "no UNKNOWN in docs map" };

  if (cmd.includes("grep -r \"UNKNOWN\" docs/")) return { text: "docs/01-domain-template.md:- POST /items — UNKNOWN" };
  if (cmd.startsWith("cat docs/01-domain")) return { text: pf["docs/01-domain-template.md"].split("\n").slice(0, 10).join("\n") };
  if (cmd.startsWith("echo ") && cmd.includes("SESSION.md")) {
    const m = cmd.match(/'([^']+)'/) || cmd.match(/"([^"]+)"/);
    const line = m ? m[1] : cmd.replace(/^echo\s+/, "").replace(/\s*>>.*/, "").replace(/^['"]|['"]$/g, "");
    pf["SESSION.md"] += "\n" + line;
    return { text: "" };
  }
  if (cmd.startsWith("tail")) {
    const n = parseInt(cmd.match(/-(\d+)/)?.[1] || "10", 10);
    return { text: pf["SESSION.md"].split("\n").slice(-n).join("\n") };
  }

  if (cmd.includes("find . -maxdepth 2 -name 'Untitled")) {
    return SIM.legacy.hasUntitled ? { text: "./Untitled.md" } : { text: "" };
  }
  if (cmd.includes("find . -name '.DS_Store'")) return { text: "2" };
  if (cmd.startsWith("wc -l *.md")) return { text: "  12 README.md\n  45 notes-old.md\n   3 Untitled.md\n  60 total" };
  if (cmd.includes("START_HERE.md")) return { text: "MISSING: START_HERE.md" };

  if (cmd === "mkdir -p _attic/2026-07-03") return { text: "" };
  if (cmd.includes("mv Untitled.md _attic")) {
    if (SIM.legacy.hasUntitled) { SIM.legacy.hasUntitled = false; SIM.legacy.attic.push("Untitled.md"); }
    return { text: "moved: Untitled.md" };
  }
  if (cmd === "ls -1 _attic/2026-07-03/") return { text: SIM.legacy.attic.join("\n") || "(empty)" };
  if (cmd.includes("test ! -f Untitled")) return { text: SIM.legacy.hasUntitled ? "FAIL: still in root" : "OK: root clean" };
  if (cmd.includes("DECISIONS.md") && cmd.startsWith("echo")) {
    lf["DECISIONS.md"] += "D-001: quarantine legacy noise\n";
    return { text: "" };
  }

  if (cmd === "git status --short") return { text: " M SESSION.md\n?? docs/01-api.md" };
  if (cmd === "git diff --stat") return { text: " SESSION.md | 4 ++++\n 1 file changed" };
  if (cmd.startsWith("git check-ignore")) {
    const f = cmd.split(/\s+/).pop();
    if (SIM.git.ignored.some(i => f.includes(i.replace(".md", "")) || f === i)) return { text: `.gitignore:8:${f}\t${f}` };
    return { text: "(not ignored — УВАГА!)" };
  }
  if (cmd.includes("password\\|secret")) return { text: "(scan OK)" };

  if (cmd.includes("grep -c \"^- \\[\" DEMO")) return { text: "3" };
  if (cmd.includes("grep \"Done when\" README")) return { text: "## Done when" };
  if (cmd.includes("grep \"\\[x\\]\" TASKS")) return { text: "0" };

  return { text: `command not found: ${cmd}\nСпробуйте команди зі списку зліва.` };
}

function allQuestions() {
  return QUIZ.flatMap(s => s.questions.map(q => ({ ...q, section: s.label, sectionId: s.id })));
}

function renderQuizNav() {
  const nav = document.getElementById("quizNav");
  nav.innerHTML = QUIZ.map(s =>
    `<li data-id="${s.id}">${s.label} <small style="color:var(--muted)">${s.questions.length}</small></li>`
  ).join("");
  nav.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => startQuizSection(li.dataset.id));
  });
}

function startQuizSection(id) {
  quizState = { section: id, index: 0, answers: {}, mode: "section" };
  renderQuizQuestion();
}

function startQuizAll() {
  quizState = { section: "all", index: 0, answers: {}, mode: "all", pool: allQuestions() };
  renderQuizQuestion();
}

function getCurrentQuestions() {
  if (quizState.mode === "all") return quizState.pool;
  const sec = QUIZ.find(s => s.id === quizState.section);
  return sec ? sec.questions.map(q => ({ ...q, section: sec.label })) : [];
}

function renderQuizQuestion() {
  const pool = getCurrentQuestions();
  const area = document.getElementById("quizArea");
  if (!pool.length) { area.innerHTML = "<p>Немає питань.</p>"; return; }
  if (quizState.index >= pool.length) { showQuizResults(pool); return; }

  const q = pool[quizState.index];
  const answered = quizState.answers[quizState.index];
  area.innerHTML = `
    <div class="q-meta">Питання <span>${quizState.index + 1}</span> з <span>${pool.length}</span>
      · Розділ: <span>${q.section || ""}</span></div>
    <div class="q-card">
      <div class="q-title">${q.title}</div>
      <div class="q-text">${q.question}</div>
      ${q.options.map((o, i) => `
        <button type="button" class="opt ${answered !== undefined ? (o.correct ? "correct" : (answered === i ? "wrong" : "")) : ""}"
          data-i="${i}" ${answered !== undefined ? "disabled" : ""}>${o.text}</button>
      `).join("")}
      <div class="feedback ${answered !== undefined ? "show" : ""}">${answered !== undefined ? q.feedback : ""}</div>
    </div>
    <div class="pager">
      <button type="button" class="btn" id="qPrev" ${quizState.index === 0 ? "disabled" : ""}>← Назад</button>
      <button type="button" class="btn btn-primary" id="qNext">${quizState.index < pool.length - 1 ? "Далі →" : "Результат"}</button>
    </div>`;

  area.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      if (quizState.answers[quizState.index] !== undefined) return;
      quizState.answers[quizState.index] = +btn.dataset.i;
      renderQuizQuestion();
      updateQuizProgress();
    });
  });
  document.getElementById("qPrev")?.addEventListener("click", () => { quizState.index--; renderQuizQuestion(); });
  document.getElementById("qNext")?.addEventListener("click", () => { quizState.index++; renderQuizQuestion(); });
  updateQuizProgress();
}

function updateQuizProgress() {
  const pool = getCurrentQuestions();
  const total = pool.length;
  const answered = Object.keys(quizState.answers).length;
  document.getElementById("quizProgress").style.width = total ? (answered / total * 100) + "%" : "0%";
  document.getElementById("quizStats").textContent = `${answered} / ${total} відповідей`;
}

function showQuizResults(pool) {
  let correct = 0;
  pool.forEach((q, i) => {
    if (quizState.answers[i] !== undefined && q.options[quizState.answers[i]]?.correct) correct++;
  });
  const pct = Math.round(correct / pool.length * 100);
  const pass = pct >= 80;
  document.getElementById("quizArea").innerHTML = `
    <div class="score-box">
      <h3>Результат Harness Quiz</h3>
      <div class="score-num" style="color:${pass ? "var(--green)" : "var(--orange)"}">${pct}%</div>
      <p style="color:var(--muted)">${correct} з ${pool.length} правильних · ${pass ? "PASS ✓" : "RETRY — потрібно ≥ 80%"}</p>
      ${!pass ? '<button type="button" class="btn btn-primary" id="retryQuiz">Спробувати знову</button>' : ""}
    </div>
    <h3 style="color:var(--cyan);margin-top:24px">Self-check checklist</h3>
    <ul class="checklist" id="selfCheck">
      <li>Можу bootstrap Mode A за 10 хв</li>
      <li>Розрізняю TASKS.md і tasks/</li>
      <li>Проводжу session start (SESSION → TASKS → Done when)</li>
      <li>Знаю READ-ONLY / WRITE / RISKY</li>
      <li>Mode B: аудит → START_HERE → _attic</li>
      <li>Розрізняю docs / artifacts / SESSION (wiki / raw / memory)</li>
      <li>Перевіряю git status перед commit</li>
      <li>Можу пройти DEMO.md для sign-off</li>
    </ul>`;
  document.getElementById("retryQuiz")?.addEventListener("click", startQuizAll);
  document.getElementById("selfCheck")?.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => li.classList.toggle("checked"));
  });
}

function initTrainer() {
  document.querySelectorAll(".top-nav .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".top-nav .tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("page-" + tab.dataset.page).classList.add("active");
    });
  });

  const termInput = document.getElementById("termInput");
  termInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { runCommand(termInput.value); termInput.value = ""; }
    if (e.key === "ArrowUp" && termHistory.length) {
      e.preventDefault();
      histIdx = Math.max(0, histIdx - 1);
      termInput.value = termHistory[histIdx] || "";
    }
    if (e.key === "ArrowDown" && termHistory.length) {
      e.preventDefault();
      histIdx = Math.min(termHistory.length, histIdx + 1);
      termInput.value = termHistory[histIdx] || "";
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const mod = MODULES[currentModule];
      const match = mod.commands.find(c => c.startsWith(termInput.value));
      if (match) termInput.value = match;
    }
  });

  document.getElementById("btnClear").addEventListener("click", () => {
    document.getElementById("termOut").innerHTML = "";
  });
  document.getElementById("btnReset").addEventListener("click", () => {
    triedByModule[currentModule] = new Set();
    SIM.bootstrapped = false;
    SIM.legacy.hasUntitled = true;
    SIM.legacy.attic = [];
    SIM.files.project["SESSION.md"] = "Current Execution Mode: READ-ONLY\n\n## 2026-07-03 bootstrap\n- Mode A completed via PROMPT\n- Next: P0-001";
    SIM.files.legacy["DECISIONS.md"] = "# DECISIONS\n\n";
    switchModule(currentModule);
  });
  document.getElementById("btnNextMod").addEventListener("click", () => {
    const keys = Object.keys(MODULES);
    switchModule(keys[(keys.indexOf(currentModule) + 1) % keys.length]);
  });
  document.getElementById("btnStartQuiz")?.addEventListener("click", startQuizAll);

  renderTheoryNav();
  renderPracticeNav();
  renderQuizNav();
  switchModule("bootstrap");
}

document.addEventListener("DOMContentLoaded", initTrainer);