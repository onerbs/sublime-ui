// Copyright (c) 2021-2022 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

import { makeRules } from "./_rules.mjs";
import { getPalettes } from "./_util.mjs";

/// --------------------------------------------------------

export async function compile(src, out, userRules) {
  const rules = makeRules(userRules);
  for await (const it of getPalettes(src)) {
    await it.compile(out, rules);
  }
}
