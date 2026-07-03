# Урок 9. Agent memory в MIN

## Три шари

```text
artifacts/     → raw sources (evidence)
docs/          → compiled wiki
CLAUDE.md      → schema (policy)
SESSION.md     → agent memory (chronicle)
TASKS.md       → agent memory (intent)
```

## RAG vs Wiki vs Memory

| Підхід | Питання | У MIN |
|---|---|---|
| RAG | Що в raw файлі? | pipeline / grep artifacts |
| Wiki | Що знаємо про домен? | docs/ |
| Memory | Що робили? | SESSION, DECISIONS |

## Prompt-режими

**Query:** read docs, cite paths, UNKNOWN для прогалин.

**Ingest:** update docs з CLI evidence; людина підтверджує.

**Lint:** grep UNKNOWN; суперечності; не auto-fix.

## Safe prompt

```text
Mode: READ-ONLY
Read: README.md, TASKS.md, SESSION.md, CLAUDE.md
Task: P0-001 only
Forbidden: rm -rf, secrets, auto-commit
```

## Quiz

[index.html](index.html) → Quiz → «Agent memory»