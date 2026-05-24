# WORK_MODES

This file defines how to use humans, chat tools, CLI agents, local terminal commands, and real systems in this project.

The goal is simple:

Model decides. CLI executes. Results guide the next step.

AI tools may help reason, review, draft, and plan. Real changes happen only through controlled commands, reviewed diffs, explicit approval, and observable verification.

---

## 1. Core operating principle

Use small verified steps.

Default loop:

1. Define one goal.
2. Inspect current state.
3. Propose one small action.
4. Execute through the appropriate tool.
5. Review the actual output.
6. Decide the next step.
7. Record the result.

Do not batch unrelated work.

Bad:

- clean documentation
- refactor code
- change production config
- update secrets
- push to GitHub

all in one task.

Good:

- add one document
- review one diff
- run one read-only audit
- update one changelog entry
- commit one completed change

---

## 2. Work modes

### ChatGPT Project Mode

Use for:

- planning the next small step
- explaining command output
- reviewing diffs pasted by the operator
- writing safe task prompts for CLI agents
- creating summaries, session briefs, and documentation drafts
- deciding when to stop

Default permission:

- read-only reasoning
- no direct system changes

Must not:

- assume live system state without current output
- claim success without verification
- mix unrelated tasks
- ask agents to modify real systems without explicit approval

---

### ChatGPT Agent Mode

Use for:

- reading multiple project files
- comparing documentation
- preparing reports
- finding inconsistencies
- summarizing repository state
- drafting task plans for Codex CLI, Claude CLI, or other agents

Default permission:

- read-only

May:

- inspect repository files
- summarize project state
- prepare patch plans
- draft new documentation

Must not without explicit approval:

- commit
- push
- delete files
- rewrite history
- modify real systems
- run live SSH against infrastructure
- touch secrets or raw sensitive artifacts

---

### Codex CLI

Use for:

- read-only repository review
- code review
- documentation consistency checks
- test and structure analysis
- preparing patch plans
- proposing narrow edits

Preferred first run:

    codex exec --cd <project_dir> --sandbox read-only "<task>"

After any Codex run, verify:

    git status --short
    git diff
    git log --oneline --decorate --max-count=3

Default permission:

- read-only

Write mode is allowed only when the task defines:

- goal
- scope
- allowed files to modify
- forbidden actions
- expected output
- verification commands

Codex must not:

- touch live systems
- run SSH against infrastructure
- delete files
- rewrite Git history
- commit or push unless explicitly requested
- modify secrets or raw artifacts

---

### Claude CLI / Claude Code

Use for:

- larger documentation edits
- structured refactors
- multi-file code changes
- long-form analysis
- implementation tasks with a clear scope

Default permission:

- read-only review first

Before write mode, define:

- context
- goal
- allowed files
- forbidden files
- expected diff
- tests or verification
- rollback plan if applicable

Claude CLI must not:

- modify live infrastructure
- run RouterOS write commands
- delete files without explicit approval
- fill template placeholders with fake real-world examples
- alter project scope without asking

---

### Local Terminal Mode

Use for:

- Git commands
- file inspection
- tests
- scripts
- SSH commands run manually by the operator
- creating local logs with `script`

The terminal output is the source of truth.

Rules:

- commands must be copy-safe
- avoid huge command blocks
- avoid nested heredocs
- verify after edits
- use `git status --short` and `git diff` before commit

---

### Live System Mode

Use when the project touches a real system such as:

- router
- server
- Raspberry Pi
- cloud service
- database
- production app
- paid API
- physical hardware

Default mode:

- inspect first
- no changes until current state is known

Before risky changes:

1. State the goal.
2. Inspect current state.
3. Create backup or export if applicable.
4. Define exact change.
5. Define expected result.
6. Define verification.
7. Define rollback.
8. Execute one small change.
9. Verify immediately.
10. Document result.

Never let an AI agent autonomously modify a live system unless the project explicitly allows that and has a tested rollback path.

---

## 3. Artifact policy

Not every file belongs in Git or in a ChatGPT Project.

Safe to commit when reviewed:

- README files
- task files
- decision logs
- risk logs
- session summaries
- sanitized reports
- sanitized exports
- source code
- tests
- templates

Keep local unless sanitized:

- raw terminal logs
- raw device exports
- binary backups
- screenshots with secrets or serials
- photos with labels or credentials
- `.env`
- real access files
- private keys
- certificates
- API tokens

Raw artifacts may be used as evidence, but the committed version should be summarized or sanitized.

---

## 4. ChatGPT Project files policy

Good project files:

- README.md
- START_HERE.md
- TASKS.md
- ROADMAP.md
- RISKS.md
- DECISIONS.md
- SESSION.md or SESSION_LOG.md
- CLAUDE.md
- WORK_MODES.md
- safety rules
- current state
- inventory
- architecture docs
- sanitized reports

Do not upload to ChatGPT Project:

- `.env`
- ACCESS.md with real values
- private keys
- certificates
- raw exports
- binary backups
- unsanitized logs
- photos containing credentials
- generated cache folders
- dependency folders
- large noisy output folders

Project files should be curated memory, not a dump of the whole repository.

---

## 5. Session logging

Raw terminal session logs are useful, but they are not documentation by default.

Recommended pattern:

1. Record locally if needed.
2. Review for sensitive data.
3. Extract a short session summary.
4. Commit only the summary or changelog entry.
5. Keep raw logs local unless explicitly sanitized.

Example local log folder:

    output_for_ChatGPT/session_logs/

Do not commit raw logs automatically.

---

## 6. Agent handoff template

Use this when delegating work to Codex CLI, Claude CLI, ChatGPT Agent Mode, or another agent.

### Context

What project is this?
What is the current state?
What files are relevant?

### Goal

What should be achieved?

### Scope

What is included?
What is excluded?

### Allowed to read

List files or directories.

### Allowed to modify

List files or directories.
Use "none" for read-only tasks.

### Forbidden actions

Examples:

- no live SSH
- no commits
- no pushes
- no file deletion
- no secrets
- no raw artifact changes

### Expected output

Examples:

- patch plan
- diff
- report
- list of findings
- updated file

### Verification

What command or review proves the result?

### Safety notes

What could go wrong?
What requires human approval?

---

## 7. Choosing the right mode

Use ChatGPT Project Mode when you need:

- operational guidance
- small next steps
- explanation
- safe command planning

Use ChatGPT Agent Mode when you need:

- broad repository reading
- cross-file analysis
- report preparation

Use Codex CLI when you need:

- code or documentation review
- repository consistency checks
- patch planning

Use Claude CLI when you need:

- larger edits
- structured refactors
- implementation work

Use Local Terminal when you need:

- source-of-truth command output
- Git verification
- tests
- manual SSH

Use Live System Mode when:

- the task affects real infrastructure, production, hardware, or paid services

---

## 8. Final rule

If the real system output contradicts a document, the output wins.

If Git diff contradicts an agent summary, the diff wins.

If safety rules contradict convenience, safety wins.
