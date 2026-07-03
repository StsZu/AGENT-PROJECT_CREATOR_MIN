# Урок 4. Bootstrap Mode A

## Коли використовувати

Новий проєкт з нуля. Ціль: робоча папка за ~10 хв.

## Кроки

1. `cp -r <KIT_PATH>/template/. <target>/`
2. Запустити [PROMPT.md](../PROMPT.md) Mode A у CLI-агенті.
3. Відповісти A1–A10 (по одному питанню).
4. Агент заповнює: README, CLAUDE, simple_words, DEMO, TASKS.
5. Перший запис SESSION: `Current Execution Mode: READ-ONLY`.

## Інтерв'ю A1–A10

| # | Питання |
|---|---|
| A1 | Назва проєкту |
| A2 | Абсолютний шлях (не перезаписувати!) |
| A3 | Що це (2–3 речення) |
| A4 | Яку проблему вирішує |
| A5 | Done when (3–7 спостережуваних) |
| A6 | Default mode |
| A7 | Мова docs |
| A8 | Заборонені дії без approval |
| A9 | Перші P0 задачі |
| A10 | Наявний матеріал |

## Запуск (Claude CLI)

```bash
cd <PROJECTS_ROOT>
claude
```

```
Прочитай <KIT_PATH>/PROMPT.md і виконай Mode A.
Цільова папка: <PROJECTS_ROOT>/my-api-project
```

Деталі: [RUN.md](../RUN.md)

## Не заповнювати при bootstrap

RISKS, DECISIONS (порожні), WORK_MODES (шаблон), ACCESS.example (шаблон).