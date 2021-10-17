# 😂 KEKW Github Action

GitHub Action to randomly laugh at people who open an issue on your repository. (R.I.P El Risitas 🥲)

# 🖋️ Inputs

## `chance` (optional)

Chance of action to run (percentage)

## `AUTH_TOKEN` (required)

Github personal auth token for commenting on issue

# 🤓 Example

```yml
name: Random KEKW

on:
    issues:
        types: [opened]

jobs:
    comment:
        runs-on: ubuntu-latest
        steps:
            - name: KEKW
              uses: barbarbar338/kekw@v1.0.3
              with:
                  chance: 70
                  AUTH_TOKEN: ${{ secrets.AUTH_TOKEN }}
```
