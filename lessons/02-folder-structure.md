# Урок 2. Структура MIN-проєкту

## Канонічне дерево

```text
my-project/
├── README.md
├── CLAUDE.md
├── TASKS.md
├── SESSION.md
├── DECISIONS.md
├── RISKS.md
├── DEMO.md
├── WORK_MODES.md
├── simple_words.md
├── docs/
├── artifacts/    (опц.)
├── tasks/        (опц.)
└── _attic/       (Mode B)
```

## Що куди

| Шар | Папка/файл | Зміст |
|---|---|---|
| Control | README, TASKS, SESSION | навігація, backlog, mode |
| Policy | CLAUDE.md, WORK_MODES | правила для агента і людини |
| Wiki | docs/ | доменні знання |
| Evidence | artifacts/ | raw outputs, exports |
| Materials | tasks/ | prompts, evidence задач (не backlog) |

## Помилки

- Backlog у `tasks/` замість `TASKS.md`
- `Current Execution Mode` у двох файлах
- Raw dumps у root

## Команда bootstrap

```bash
ls -1 template/
cp -r <KIT_PATH>/template/. <target>/
```

**Ризик:** без крапки після `template/` скопіюється папка `template`, а не вміст.

## Практика

[index.html](index.html) → Практика → «1. Bootstrap Mode A»