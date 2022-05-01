// Copyright (c) 2021-2022 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

import { writeFile } from "fs/promises";
import { resolve } from "path";

import { getLines } from "./_util.mjs";

/// --------------------------------------------------------

export class Palette {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.data = {
      variables: {},
      globals: {},
    };
  }

  /**
   * @param {string} path - The data source.
   * @return {Palette}
   */
  async load(path) {
    for (const line of await getLines(path)) {
      if (line.startsWith("$") || line.startsWith("%")) {
        const [key, val] = line.slice(1).split(/\s*=\s*/);
        this.data[KindMap[line.charAt(0)]][key] = val;
      }
    }
    return this;
  }

  /**
   * @param {{ dir, ext }} rules
   * @param {Rule[]} rules
   */
  async compile({ dir, ext }, rules) {
    const data = JSON.stringify({ ...this.data, rules }, null, 2);
    console.log("  ", data.length, "...");
    await writeFile(resolve(dir, this.name + ext), data);
    // await sleep(1);
    console.log("\x1b[1A  ", data.length, this.name);
  }
}

/// --------------------------------------------------------

const KindMap = {
  "$": "variables",
  "%": "globals",
};

const sleep = (sec) => (
  new Promise((send) => {
    setTimeout(() => send(true), sec * 1000);
  })
);
