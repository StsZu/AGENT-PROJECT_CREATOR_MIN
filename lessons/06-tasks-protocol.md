# Урок 6. TASKS.md протокол

## Шаблон задачі

```markdown
### [ ] P0-001: Назва

- **Status:** READY
- **Safety:** READ-ONLY
- **Output:** <артефакт>
- **Steps:**
  1. ...
- **Do not:** ...
- **Done when:** <спостережуваний критерій>
```

## Status

- `[ ]` READY
- `[~]` IN PROGRESS
- `[x]` DONE
- `[!]` BLOCKED
- `[A]` APPROVAL

## Safety

| Рівень | Сенс |
|---|---|
| READ-ONLY | не змінює зовнішні системи |
| WRITE | локальні файли проєкту |
| RISKY | deploy, delete — approval |

## Правила

- P0 перед P1.
- Без `Done when` — не задача.
- `Current Execution Mode` — **не** в TASKS (тільки SESSION).

## Команди

```bash
grep -A 12 "P0-001" TASKS.md
grep "Safety:" TASKS.md
```