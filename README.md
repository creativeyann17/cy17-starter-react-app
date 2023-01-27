# cy17-react-app-starter

Contains the foundation of a react-app repository + commonly used libraries to be like a framework of some sort.

## Libraries

- Rooting `react-router-dom`
- Meta-tags `react-helmet`
- i18n `i18n-next`
- utils `lodash`
- REST `axios-hooks`

### Node

The files should have the same node version:

- `.nvmrc`
- `Dockerfile`

## Actions

- `ci.yml` validate tests + dockerfile

## VSCode

### Extensions

List of recommended extensions:

- Code Spell Checker
- French - Code Spell Checker
- Import cost
- GitLens
- Prettier - Code formatter
- ESLint

### Format

Auto-format will be performed by `husky` on every staged files and on save as defined in `.vscode/settings.json`.

ESLint configuration can be changed with `npx eslint --init`.

### Tabs <=> spaces

There are several places to modify to switch from tabs to spaces (and reverse):

Changes the following files **with consistency**:

- `.vscode/settings.json` editor.tabSize/insertSpaces
- `.eslintrc.js` rules.indent (2 or tab)
- `.prettierrc` tabWidth should be the same as the others
