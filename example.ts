import { isGit } from "./mod.ts";

console.log(`current directory is a git repository: ${await isGit()}`);
