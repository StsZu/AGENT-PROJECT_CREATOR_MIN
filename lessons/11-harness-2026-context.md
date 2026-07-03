# Урок 11. Harness 2026 і Ralph Loop (контекст)

**Додаткові матеріали** — не обов'язкові для bootstrap, але поясняють, *чому* MIN влаштований саме так.

| Відео | Тема |
|---|---|
| [HARNESS — ТОП-7 і 1% в 2026](https://youtu.be/tC28qXlPHC0) | Огляд harness-підходів для AI-агентів |
| [Harness і Ralph Loop](https://youtu.be/OSG05Xq7np4) | Цикл «агент працює, поки не готово» |
| [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/) | Стаття (лютий 2026) — repo як середовище для агента |

---

## Головна ідея з індустрії (простими словами)

> **Люди керують напрямком. Агенти виконують.**

Інженер у 2026 частіше проектує не «який код написати», а **середовище**: папки, правила, перевірки, зворотний зв'язок — щоб агент не губився. Це і є **harness engineering**.

MIN — **побутова версія** цієї ідеї для одного проєкту, не мільйон рядків за 5 місяців.

---

## Що з відео / OpenAI стикується з MIN

| Ідея ззовні | У MIN |
|---|---|
| Repo = system of record | `docs/`, `TASKS.md`, `SESSION.md` — не чат і не Slack |
| `AGENTS.md` — **карта**, не енциклопедія | `CLAUDE.md` короткий + `docs/00-README.md` |
| Progressive disclosure | Спочатку README/START_HERE → потім глибші docs |
| Plans як артефакти | `TASKS.md` з Done when, Steps |
| Legibility для агента | Структура папки, UNKNOWN/VERIFIED, один факт — один файл |
| Lint / garbage collection | Wiki **lint**, Mode B **карантин** `_attic/` |
| Feedback loops | DEMO.md, verification у задачі, SESSION |

---

## Ralph Loop — що це

**Ralph Loop** (Geoffrey Huntley) — цикл:

```text
задача → агент робить → перевіряє → виправляє → знову, поки не ОК
```

У великих harness-системах агент може годинами крутити PR: review → fix → test → repeat.

### Як MIN це приймає (обережно)

| Ralph «як у відео» | MIN |
|---|---|
| Автономно мерджити в prod | **Ні** — RISKY + approval людини |
| Годинами без нагляду | **Ні** за замовчуванням — одна P0, READ-ONLY |
| Цикл «зробив → перевірив → виправив» у **репо** | **Так** — в межах однієї задачі |
| Self-review diff перед commit | **Так** — агент пропонує, людина `git diff` |

**Mini-Ralph у MIN** для однієї задачі:

```text
1. Взяти P0 з TASKS.md
2. Агент: зміни + self-review
3. Людина: git diff, DEMO-крок, verification
4. Якщо не ОК — ще ітерація (той самий P0)
5. SESSION + ingest docs → закрити P0
```

---

## Чого MIN свідомо не копіює

- «0 рядків коду від людини» — не мета MIN.
- Гігантський monolithic `AGENTS.md` — у нас короткий `CLAUDE.md`.
- Auto-deploy / auto-merge без людини — заборонено для RISKY.
- Все в одному prompt без файлів — файли = source of truth.

---

## Практична порада

Після перегляду відео запитай себе:

1. Чи є в **моєму** проєкті карта для агента (`CLAUDE.md` + `docs/00-README.md`)?
2. Чи знання з Slack/Google Docs потрапляють у `docs/`?
3. Чи Ralph-цикл обмежений **однією P0** і **verification**, а не «агент сам усе»?

---

## Чекліст

- [ ] Переглянув хоча б одне відео або статтю OpenAI
- [ ] Розумію: MIN = harness для **мого** масштабу
- [ ] Ralph Loop — ітерація **з** людиною в loop, не замість неї

Назад: [Урок 10. Sign-off](10-signoff-demo.md)