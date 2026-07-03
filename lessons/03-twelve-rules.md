# Урок 3. 12 золотих правил (STANDART.md)

Повний текст: [STANDART.md](../STANDART.md)

## Концентрат

1. Один проєкт — одна папка.
2. Bootstrap ≤10 хв.
3. Done when — спостережуване.
4. Один факт — один власник.
5. READ-ONLY default.
6. Одна задача за раз.
7. `_attic/` замість `rm -rf`.
8. Файли > agent memory.
9. UNKNOWN / NOT VERIFIED / VERIFIED.
10. Атомарний цикл сесії.
11. DEMO.md — фінальний тест.
12. Шаблон kit не «прикрашати» прикладами.

## Done when — приклади

| Погано | Добре |
|---|---|
| «API працює» | «curl /health → 200, body contains ok» |
| «Документація готова» | «docs/01-api.md містить 3 endpoints» |
| «Користувачі задоволені» | «DEMO крок 4 пройдено без помилок» |

## STOP-gates

Перезапис папки, deploy, mass rename, `rm -rf` — **завжди** explicit approval.

## Quiz

[index.html](index.html) → Quiz → «Harness mindset»