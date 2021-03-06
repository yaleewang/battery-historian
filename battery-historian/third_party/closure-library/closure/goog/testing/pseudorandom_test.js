// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('goog.testing.PseudoRandomTest');
goog.setTestOnly('goog.testing.PseudoRandomTest');

goog.require('goog.testing.PseudoRandom');
goog.require('goog.testing.jsunit');

function runFairnessTest(sides, rolls, chiSquareLimit) {
  // Initialize the count table for dice rolls.
  var counts = [];
  for (var i = 0; i < sides; ++i) {
    counts[i] = 0;
  }
  // Roll the dice many times and count the results.
  for (var i = 0; i < rolls; ++i) {
    ++counts[Math.floor(Math.random() * sides)];
  }
  // If the dice is fair, we expect a uniform distribution.
  var expected = rolls / sides;
  // Pearson's chi-square test for a distribution fit.
  var chiSquare = 0;
  for (var i = 0; i < sides; ++i) {
    chiSquare += (counts[i] - expected) * (counts[i] - expected) / expected;
  }
  assert(
      'Chi-square test for a distribution fit failed',
      chiSquare < chiSquareLimit);
}

function testInstall() {
  var random = new goog.testing.PseudoRandom();
  var originalRandom = Math.random;

  assertFalse(!!random.installed_);

  random.install();
  assertTrue(random.installed_);
  assertNotEquals(Math.random, originalRandom);

  random.uninstall();
  assertFalse(random.installed_);
  assertEquals(originalRandom, Math.random);
}

function testBounds() {
  var random = new goog.testing.PseudoRandom();
  random.install();

  for (var i = 0; i < 100000; ++i) {
    var value = Math.random();
    assert('Random value out of bounds', value >= 0 && value < 1);
  }

  random.uninstall();
}

function testFairness() {
  var random = new goog.testing.PseudoRandom(0, true);

  // Chi-square statistics: p-value = 0.05, df = 5, limit = 11.07.
  runFairnessTest(6, 100000, 11.07);
  // Chi-square statistics: p-value = 0.05, df = 100, limit = 124.34.
  runFairnessTest(101, 100000, 124.34);

  random.uninstall();
}

function testReseed() {
  var random = new goog.testing.PseudoRandom(100, true);

  var sequence = [];
  for (var i = 0; i < 64000; ++i) {
    sequence.push(Math.random());
  }

  random.seed(100);
  for (var i = 0; i < sequence.length; ++i) {
    assertEquals(sequence[i], Math.random());
  }

  random.uninstall();
}
