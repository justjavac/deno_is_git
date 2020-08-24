import { join, isAbsolute } from "https://deno.land/std/path/mod.ts";
import { exists, existsSync } from "https://deno.land/std/fs/exists.ts";

/**
 * Return `true` if the file apth is a git repository.
 *
 * Requires the `--allow-read` flag.
 * 
 * @param filepath default is `Deno.cwd()`, the current working directory.
 */
export function isGitSync(filepath = Deno.cwd()): boolean {
  let current = isAbsolute(filepath) ? filepath : join(Deno.cwd(), filepath);
  let parent = join(current, "..");

  for (; parent! !== current; parent = join(current, "..")) {
    if (existsSync(join(current, ".git"))) {
      return true;
    }
    current = parent!;
  }

  return existsSync(join(current, ".git"));
}

/**
 * Return `true` if the file path is a git repository synchronously.
 *
 * Requires the `--allow-read` flag.
 * 
 * @param filepath default is `Deno.cwd()`, the current working directory.
 */
export async function isGit(filepath = Deno.cwd()): Promise<boolean> {
  let current = isAbsolute(filepath) ? filepath : join(Deno.cwd(), filepath);
  let parent = join(current, "..");

  for (; parent! !== current; parent = join(current, "..")) {
    if (await exists(join(current, ".git"))) {
      return true;
    }
    current = parent!;
  }

  return exists(join(current, ".git"));
}
