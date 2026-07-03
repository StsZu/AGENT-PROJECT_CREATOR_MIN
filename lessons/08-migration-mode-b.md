# Урок 8. Migration Mode B

Для **існуючого** брудного проєкту. Контракт: без видалень без approval.

## Три проходи

### Прохід 1 — аудит (READ-ONLY)

```bash
ls -1
find . -maxdepth 2 -name 'Untitled*' -type f
wc -l *.md
```

Три таблиці: один кандидат · дублі · сміття. STOP до approval.

### Прохід 2 — START_HERE + гепи

- Створити `START_HERE.md` (MIN-роль → файл)
- Додати відсутні MIN-файли
- `TASKS.md` якщо немає структури MIN-TASKS

Можна зупинитись тут — проєкт уже мінімально MIN.

### Прохід 3 — карантин

```bash
mkdir -p _attic/YYYY-MM-DD
mv <files> _attic/YYYY-MM-DD/
```

Один список Y/N. **Не merge** дублів автоматично.

## Запуск

```bash
cd /path/to/legacy-project
claude
```

```
Прочитай <KIT_PATH>/PROMPT.md і виконай Mode B на поточній папці.
```