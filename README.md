# Harness Engineering — MIN Project Creator

Інтерактивний курс + template-kit для створення **універсального AI-ready проєкту** з operational harness.

**Мета курсу:** навчити створювати структуру папок і harness для будь-якої задачі (API, web, infra, курс, hardware) — не хаотичну папку, а керовану систему з session cycle, TASKS protocol і safety modes.

## Швидкий старт

**Вперше?** Відкрий [simple-words.html](simple-words.html) (5–10 хв) — ідея kit простими словами, словник термінів.

```bash
open index.html
# → Теорія → «0. Простими словами»
```

Уроки, «простими словами» і шпаргалка працюють **без сервера** (контент у `content.js`, стилі в `assets/site.css`). Після змін у `lessons/*.md`, `SIMPLE_WORDS.md`, `cheatsheet.md` або `STANDART.md`:

```bash
node scripts/build-content.js
```

## Сторінки курсу

| Сторінка | Зміст |
|---|---|
| [index.html](index.html) | Теорія (11 модулів) · Практика (8 сценаріїв) · Quiz |
| [simple-words.html](simple-words.html) | Ідея kit простими словами (старт тут) |
| [course.html](course.html) | Markdown-уроки |
| [cheatsheet.html](cheatsheet.html) | Шпаргалка команд і файлів |
| [standart.html](standart.html) | 12 правил MIN (оформлено) |

### Додаткові матеріали (відео)

| Матеріал | Зв'язок з MIN |
|---|---|
| [Harness ТОП-7 (2026)](https://youtu.be/tC28qXlPHC0) | Контекст harness — модуль 11 |
| [Harness + Ralph Loop](https://youtu.be/OSG05Xq7np4) | Цикл ітерацій — mini-Ralph у P0 |
| [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/) | docs/ як system of record |

## Kit (методика)

| Файл | Призначення |
|---|---|
| [STANDART.md](STANDART.md) | 12 золотих правил (1 сторінка) |
| [METHODOLOGY.md](METHODOLOGY.md) | Повний стандарт MIN |
| [PROMPT.md](PROMPT.md) | Bootstrap Mode A / Migration Mode B |
| [RUN.md](RUN.md) | Як запустити PROMPT у CLI |
| [template/](template/) | Файли для `cp -r template/. <project>/` |

## Практика після курсу

1. Bootstrap реального проєкту: `cp -r template/. ~/Projects/my-project/`
2. PROMPT.md Mode A (A1–A10)
3. Одна повна сесія P0-001 (session → task → ingest → git)
4. Quiz ≥ 80% в index.html

## Структура репозиторію

```text
AGENT-PROJECT_CREATOR_MIN/
├── index.html          # тренажер
├── trainer.js          # емулятор
├── course.html         # уроки MD
├── cheatsheet.md
├── lessons/            # 01–10
├── STANDART.md
├── METHODOLOGY.md
├── PROMPT.md
└── template/           # шаблон нового проєкту
```