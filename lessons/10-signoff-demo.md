# Урок 10. Sign-off і DEMO

## Завершення фази / проєкту

1. Пройти [DEMO.md](../template/DEMO.md) крок за кроком.
2. README → Done when: усі `[x]`.
3. P0 закриті або Won't do з причиною.
4. Фінальний запис SESSION: `DONE` / `FROZEN`.

## DEMO ≠ презентація

Кожен Done when → один крок DEMO з **спостережуваним** результатом.

Відмічені чекбокси без живого проходження — недостатньо.

## Команди перевірки

```bash
grep -c "^- \[" DEMO.md
grep "Done when" README.md
grep "\[x\]" TASKS.md | wc -l
echo '## [date] close-out | phase DONE' >> SESSION.md
```

## 14-денний план (після курсу)

| День | 20–30 хв |
|---|---|
| 1–2 | Пройти index.html теорія + quiz |
| 3 | Bootstrap реального проєкту Mode A |
| 4–5 | 2 сесії P0 (session → task → ingest) |
| 6 | Git hygiene + lint docs |
| 7 | Mode B на маленькому legacy (опц.) |
| 8–10 | Закрити P0, оновити docs/ |
| 11–12 | Пройти DEMO.md |
| 13 | Quiz ≥ 80% |
| 14 | Peer review + README sign-off |

## Фінальний deliverable

Реальний MIN-проєкт з:

- заповненим README + TASKS + SESSION
- одним закритим P0 з артефактом
- пройденим DEMO (хоча б частково)