// Copyright (c) 2021-2022 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

import { readFile, readdir as readDir } from "fs/promises";
import { resolve } from "path";

import { Palette } from "./_palette.mjs";

/// --------------------------------------------------------

export async function* getPalettes({ dir, ext }) {
  const files = await readDir(dir);
  for (const file of files) {
    if (file.endsWith(ext)) {
      const name = file.split(".").shift();
      if (name.length > 0) {
        const src = resolve(dir, file);
        yield new Palette(name).load(src);
      }
    }
  }
}

/**
 * @param {string} path - The path to the input file.
 */
export const getLines = async (path) =>
  (await readFile(path, { encoding: "utf8" }))
    .split(/\r?\n/)
    .map((s) => s.trim());
