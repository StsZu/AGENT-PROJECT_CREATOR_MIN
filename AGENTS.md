# Repository Guidelines

## Project Structure & Module Organization

This repository is a MIN template kit, not an application. The root Markdown files define the methodology and operating instructions:

- `STANDART.md` is the one-page rule set.
- `METHODOLOGY.md` is the full source of truth for the MIN workflow.
- `PROMPT.md` is the main reusable prompt for agent-led bootstrap and migration.
- `RUN.md` explains how to invoke the prompt in a CLI agent.
- `template/` contains files copied into new projects with `cp -r template/. <target>/`.
- `template/docs/` holds optional domain-document templates.

Keep placeholders in `template/` intentional: values such as `<НАЗВА ПРОЄКТУ>`, `YYYY-MM-DD`, and `P0-001` are part of the reusable template.

## Build, Test, and Development Commands

There is no package manager, build step, or app server in this repository. Use shell and Markdown review commands:

- `rg --files` lists all tracked project files quickly.
- `sed -n '1,200p' PROMPT.md` reviews prompt sections without opening an editor.
- `cp -r template/. /tmp/min-test-A/` creates a scratch project for Mode A testing.

Do not initialize shared dependencies such as `node_modules` or `.venv` for this kit.

## Coding Style & Naming Conventions

Most content is Markdown. Use concise headings, short paragraphs, and tables only where they clarify ownership or workflow. Preserve Ukrainian terminology already used by the methodology. Number domain docs as `00-README.md`, `01-domain-template.md`, and continue that pattern for additions.

When changing template files, update linked references in `METHODOLOGY.md`, `PROMPT.md`, and `template/README.md` together.

## Testing Guidelines

Testing is dogfooding, not automated unit testing. Verify changes by running the relevant prompt flow in a scratch directory:

1. Test Mode A on an empty `/tmp/min-test-A/`.
2. Confirm generated project files are filled where expected.
3. Confirm untouched template files remain placeholders.
4. For Mode B changes, test against a disposable copy of an existing project.

## Commit & Pull Request Guidelines

This working copy has no local Git history, so no repository-specific commit convention is available. Use short imperative commit subjects, for example `Tighten Mode B cleanup rules`. Pull requests should describe the changed workflow, list affected files, and note the dogfooding scenario used for verification.

## Security & Configuration Tips

Never add real secrets to `template/`. Keep only `ACCESS.example.md` in the kit. Real `ACCESS.md`, `.env`, key, and certificate files belong only in local downstream projects and should not be committed.
