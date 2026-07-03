# Шпаргалка Harness Engineering (MIN)

> Ідея без жаргону: [SIMPLE_WORDS.md](SIMPLE_WORDS.md)

## Словник в одному рядку

| Термін | Простими словами |
|---|---|
| Harness | Звички + файли проти хаосу |
| Wiki | Папка `docs/` — блокнот знань |
| Ingest | Факти після роботи → `docs/` |
| Lint | Перевірка `UNKNOWN` у wiki |
| Kit | AGENT-PROJECT_CREATOR_MIN (шаблон) |
| Target | Твоя нова папка проєкту |

## Bootstrap Mode A

```bash
cp -r <KIT_PATH>/template/. <target>/
claude
# Прочитай <KIT_PATH>/PROMPT.md і виконай Mode A. Ціль: <target>
```

## Session start

```bash
grep "Current Execution Mode" SESSION.md
grep -E "\[ \].*READY" TASKS.md
grep "Done when" TASKS.md | head -5
```

## Close-out

```bash
echo '## [YYYY-MM-DD] ingest | P0-XXX' >> SESSION.md
grep -r "UNKNOWN" docs/
git status --short && git diff --stat
```

## Mode B audit

```bash
find . -maxdepth 2 -name 'Untitled*' -type f
test -f START_HERE.md && echo OK || echo MISSING
mkdir -p _attic/YYYY-MM-DD && mv <file> _attic/YYYY-MM-DD/
```

## Файли MIN

| Файл | Роль |
|---|---|
| README.md | TL;DR + Done when |
| CLAUDE.md | Schema / rules для агента |
| TASKS.md | Canonical backlog |
| SESSION.md | Mode + журнал (append-only) |
| DEMO.md | Sign-off сценарій |
| docs/ | Wiki |
| artifacts/ | Raw evidence |
| _attic/ | Карантин legacy |

## Safety

- Default: **READ-ONLY**
- **WRITE** — локальні файли проєкту
- **RISKY** — deploy/delete → approval на задачу
- Не комітити: `.env`, `ACCESS.md`, `*.key`

## Agent prompt (скорочено)

```text
Mode: READ-ONLY
Read: README.md, TASKS.md, SESSION.md, CLAUDE.md
Task: P0-XXX only
Forbidden: rm -rf, secrets, auto-commit, unrelated edits
```