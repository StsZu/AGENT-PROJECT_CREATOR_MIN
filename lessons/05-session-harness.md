# Урок 5. Session harness

## Атомарний цикл

```text
SESSION.md → TASKS.md → виконання → SESSION.md + TASKS.md
```

Одна сесія = **одна** задача. Не «потім запишу».

## Session start

```bash
grep "Current Execution Mode" SESSION.md
cat TASKS.md | head -20
grep -E "\[ \].*READY" TASKS.md
```

Перевірити: Safety задачі відповідає mode.

## Wiki-операції harness

| Операція | Коли | Дія |
|---|---|---|
| Query | Старт | README, TASKS, SESSION, docs/ |
| Ingest | Після роботи | docs/ з evidence |
| Lint | Close-out | UNKNOWN, суперечності |

Префікс логу:

```text
## [2026-07-03] ingest | P0-001
```

## Практика

[index.html](index.html) → «2. Session start» → «4. Wiki ingest & lint»