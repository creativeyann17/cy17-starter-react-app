# cy17-react-app-starter

Contains the foundation of a react-app repository.

## VSCode

### Extensions

Bellow list of recommended extensions:

- Code Spell Checker
- French - Code Spell Checker
- Import cost
- GitLens
- Prettier - Code formatter
- ESLint

### Format

Auto-format will be performed by `husky` on every staged files and on save as defined in `.vscode/settings.json`.

### Tabs <=> spaces

There are several places to modify to switch from tabs to spaces (and reverse):

Changes the following files **with consistency**:

- `.vscode/settings.json` editor.tabSize/insertSpaces
- `.eslintrc.js` rules.indent (2 or tab)
- `.prettierrc` tabWidth should be the same as the others
