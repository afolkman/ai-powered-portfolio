## 📝 Commit Convention

This project adheres to the [Conventional Commits](https://www.conventionalcommits.org/) specification. This convention provides a set of simple rules for creating an explicit commit history, which makes it easier to write automated tools, generate changelogs, and keep our project history readable.

### Commit Format

Each commit message should follow this structure:

```text
<type>(<scope>): <description>

[optional body]

```

### Commit Types

We use the following types to categorize changes:

* **`feat`**: A new feature for the user.
* **`fix`**: A bug fix.
* **`docs`**: Documentation only changes.
* **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
* **`refactor`**: A code change that neither fixes a bug nor adds a feature.
* **`chore`**: Changes to the build process or auxiliary tools and libraries (e.g., updating dependencies, consolidating files).

### Examples

**Adding a new feature:**

```text
feat(frontend): add authentication guard to user dashboard

```

**Fixing a bug:**

```text
fix(backend): resolve CORS issue in FastAPI endpoint

```

**Maintenance task:**

```text
chore(repo): consolidate .gitignore files to root level

```