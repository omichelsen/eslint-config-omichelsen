# eslint-config-omichelsen

My shared eslint and prettier config for personal projects.

## Install

```bash
yarn add -D eslint-config-omichelsen
```

Add the config to your `.eslintrc`:

```json
{
  "extends": "omichelsen"
}
```

For prettier plugins in VS Code you might have to add the following to your `package.json`:

```json
{
  "prettier": "eslint-config-omichelsen/.prettierrc"
}
```

## Usage

To run add the following to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src --ext .js,.ts,.tsx"
  }
}
```
