# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Цей файл задає правила роботи з **цим** репозиторієм (template-kit). Прочитати ПЕРШИМ.

> **SSOT методики:**
> - [STANDART.md](STANDART.md) — 12 золотих правил MIN (концентрат на 1 сторінку).
> - [METHODOLOGY.md](METHODOLOGY.md) — повний стандарт (документи, життєвий цикл, чого не робити).
>
> Усі інші файли тут — [PROMPT.md](PROMPT.md), [template/](template/) — є виконавчим шаром цього стандарту. Пріоритет при суперечності: `STANDART.md` > `METHODOLOGY.md` > решта; інші файли треба синхронізувати, а не обходити.

---

## ⚠ Цей репозиторій — template-kit, не звичайний проєкт

`AGENT-PROJECT_CREATOR_MIN` — це **набір шаблонів + bootstrap-промпт** для запуску нових проєктів за методикою MIN (minimal documentation set для CLI-агента). Сам репозиторій нічого не "білдить" і не "запускає".

**Структура:**

- [PROMPT.md](PROMPT.md) — головний deliverable. Промпт між `--- BEGIN ---` і `--- END ---` копіюється у CLI-агент (Claude / Gemini / Cursor) і веде користувача через інтерв'ю в одному з двох режимів:
  - **Mode A** — bootstrap нового проєкту з нуля (копіює `template/` → заповнює README/CLAUDE/simple_words/DEMO/TASKS).
  - **Mode B** — міграція існуючого складного проєкту на методику MIN (створює тільки гепи, не чіпає існуючі файли).
- [template/](template/) — каталог із шаблонами, які копіюються у новий проєкт через `cp -r template/. <target>/`. Усе всередині `template/` (`README.md`, `CLAUDE.md`, `TASKS.md`, `SESSION.md`, `DECISIONS.md`, `RISKS.md`, `DEMO.md`, `simple_words.md`, `ACCESS.example.md`, `.gitignore`, `docs/00-README.md`, `docs/01-domain-template.md`) — **шаблони**, які копіюються as-is.

**Заповнені placeholder-и є інтенціональними.** У файлах навмисно стоять `<2–3 речення...>`, `YYYY-MM-DD`, `P0-001: <короткий опис задачі>`, `R-001: <назва ризику>`, `D-001`, `<ім'я>`. Це не TODO. **Не "виправляти" placeholder-и прикладами** — це зламає шаблон для downstream-проєктів.

## Working on this repo: що можна і чого не можна

**Можна:**
- Покращувати [PROMPT.md](PROMPT.md) — питання інтерв'ю, інструкції агенту, summary в кінці.
- Покращувати структуру / навігацію / формулювання у шаблонних файлах усередині [template/](template/), **зберігаючи placeholder-и**.
- Додавати нові шаблонні файли у [template/](template/) — тоді оновити [PROMPT.md](PROMPT.md) (Mode A крок "Заповнити" або крок "Лишити як шаблон") і [template/README.md](template/README.md) (таблиця документів).
- Оновлювати [template/README.md](template/README.md) — таблицю документів, інструкції користувачу нового проєкту.

**НЕ можна без явного запиту користувача:**
- Заповнювати placeholder-и у [template/](template/) прикладами ("замінити `<назва>` на `Anna-News`" — НІ).
- Видаляти / перейменовувати файли всередині [template/](template/) — на них зав'язаний `cp -r` у [PROMPT.md](PROMPT.md) і ручні інструкції.
- Додавати реальний `ACCESS.md` у [template/](template/) (тільки `.example`).

## Як перевіряти зміни

У цьому репо немає `build`, `lint`, `test`. Перевірка коректності — це **dogfooding промпту**:

1. Запустити блок з [PROMPT.md](PROMPT.md) в окремому Claude-сесії на тестовій папці (напр. `/tmp/min-test-A/`).
2. Пройти Mode A інтерв'ю до кінця.
3. Переконатись, що отримана папка містить заповнений `README.md`/`CLAUDE.md`/`simple_words.md`/`DEMO.md`/`TASKS.md` і незмінені (як шаблон) `RISKS.md`/`DECISIONS.md`/`SESSION.md`/`ACCESS.example.md`/`docs/00-README.md`/`docs/01-domain-template.md`.
4. Те саме для Mode B на копії реального існуючого проєкту.

## Зв'язки між файлами (як шаблон тримається купи)

- [template/README.md](template/README.md) → table of contents усіх інших файлів шаблону. Якщо додано новий файл у `template/` — оновити цю таблицю.
- [PROMPT.md](PROMPT.md) Крок 0 → список файлів, які агент має прочитати перед інтерв'ю. Якщо додано новий обов'язковий шаблон — додати у цей список.
- [PROMPT.md](PROMPT.md) Mode A крок 2 → перелік файлів, які заповнюються. Mode A крок 3 → перелік файлів, які лишаються як шаблон. Будь-який новий файл має потрапити в один з цих двох списків.
- `Current Execution Mode` живе **тільки** в [template/SESSION.md](template/SESSION.md) (single source of truth). У [template/TASKS.md](template/TASKS.md) дубль навмисно прибрано.

---

## Що це за проєкт

Template-kit для bootstrap-у нових проєктів за методикою MIN. Розв'язує проблему "кожен новий проєкт починається з порожньої папки і трьох днів узгодження структури": один промпт із [PROMPT.md](PROMPT.md) → за 10 хв є проєкт із чіткими файлами `README/CLAUDE/TASKS/SESSION/DEMO/RISKS/DECISIONS` і ритуалом роботи з CLI-агентом.
