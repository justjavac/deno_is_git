# deno_is_git

[![tag](https://img.shields.io/github/release/justjavac/deno_is_git)](https://github.com/justjavac/deno_is_git/releases)
[![Build Status](https://github.com/justjavac/deno_is_git/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_is_git/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_is_git)](https://github.com/justjavac/deno_is_git/blob/master/LICENSE)

Whether the filepath is a **git repository**.

## Usage

```ts
import { isGit, isGitSync } from "https://deno.land/x/is_git/mod.ts";

await isGit(); // true or false of Deno.cwd()
await isGit('any/git/repo'); // true or false

isGitSync(); // true or false of Deno.cwd()
isGitSync('any/git/repo'); // true or false
```

## Example

```bash
deno run --allow-read https://deno.land/x/is_git/example.ts
```

## License

[deno_is_git](https://github.com/justjavac/deno_is_git) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
