# Урок 7. WORK_MODES і safety

Повний гайд: [template/WORK_MODES.md](../template/WORK_MODES.md)

## Принцип

> Model decides. CLI executes. Results guide the next step.

## Режими

| Інструмент | Для чого |
|---|---|
| ChatGPT Project | план, review diff, prompt для CLI |
| Claude / Codex CLI | repo worker, read-only audit |
| Terminal | реальні команди + verification |
| Live systems | production — RISKY + approval |

## Global prohibitions

- `rm -rf`, `--force`, `--no-verify` без approval
- Коміт `.env`, `ACCESS.md`, `*.key`
- AI не auto-execute небезпечних змін

## Карантин

Замість видалення legacy:

```bash
mkdir -p _attic/2026-07-03
mv Untitled.md _attic/2026-07-03/
```

Запис у DECISIONS: `D-001: quarantine ...`

## Практика

[index.html](index.html) → «5. Mode B audit» → «6. Карантин _attic»