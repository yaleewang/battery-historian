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

goog.provide('goog.testing.style.layoutassertsTest');
goog.setTestOnly('goog.testing.style.layoutassertsTest');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.style');
goog.require('goog.testing.TestCase');
goog.require('goog.testing.jsunit');
/** @suppress {extraRequire} */
goog.require('goog.testing.style.layoutasserts');

var div1;
var div2;
var DEFAULT_WIDTH = 200;
var DEFAULT_HEIGHT = 100;

function setUp() {
  // TODO(b/25875505): Fix unreported assertions (go/failonunreportedasserts).
  goog.testing.TestCase.getActiveTestCase().failOnUnreportedAsserts = false;

  div1 = goog.dom.createDom(goog.dom.TagName.DIV, {
    id: 'test',
    className: 'test',
    style: 'position:absolute;top:0;left:0;' +
        'width:' + DEFAULT_WIDTH + 'px;' +
        'height:' + DEFAULT_HEIGHT + 'px;' +
        'background-color:#EEE',
    innerHTML: 'abc'
  });
  div2 = goog.dom.createDom(goog.dom.TagName.DIV, {
    id: 'test2',
    className: 'test2',
    style: 'position:absolute;' +
        'top:0;left:0;' +
        'width:' + DEFAULT_WIDTH + 'px;' +
        'height:' + DEFAULT_HEIGHT + 'px;' +
        'background-color:#F00',
    innerHTML: 'abc'
  });
}


function tearDown() {
  div1 = null;
  div2 = null;
}


/**
 * Tests assertIsVisible.
 */
function testAssertIsVisible() {
  assertThrows(
      'Exception should be thrown when asserting visibility.',
      goog.bind(assertIsVisible, null, null));  // assertIsVisible(null)

  // Attach it to BODY tag and assert that it is visible.
  document.body.appendChild(div1);
  assertIsVisible('Div should be visible.', div1);

  // Tests with hidden element
  failed = false;
  goog.style.setElementShown(div1, false /* display */);
  assertThrows(
      'Exception should be thrown when asserting visibility.',
      goog.bind(assertIsVisible, null, div1));

  // Clean up.
  document.body.removeChild(div1);
}


/**
 * Tests assertNotVisible.
 */
function testAssertNotVisible() {
  // Tests null as a parameter.
  var element = null;
  assertNotVisible(element);

  // Attach the element to BODY element, assert should fail.
  document.body.appendChild(div1);
  assertThrows(
      'Exception should be thrown when asserting non-visibility.',
      goog.bind(assertNotVisible, null, div1));

  // Clean up.
  document.body.removeChild(div1);
}


/**
 * Tests assertIsIntersect.
 */
function testAssertIntersect() {
  document.body.appendChild(div1);
  document.body.appendChild(div2);

  // No intersection
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 500, 500);
  assertThrows(
      'Exception should be thrown when asserting intersection.',
      goog.bind(assertIntersect, null, div1, div2));
  assertNoIntersect(div1, div2);

  // Some intersection
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 50, 50);
  assertThrows(
      'Exception should be thrown when asserting no intersection.',
      goog.bind(assertNoIntersect, null, div1, div2));
  assertIntersect(div1, div2);

  // Completely superimposed.
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 0, 0);
  assertThrows(
      'Exception should be thrown when asserting no intersection.',
      goog.bind(assertNoIntersect, null, div1, div2));
  assertIntersect(div1, div2);
}


/**
 * Tests assertWidth.
 */
function testAssertWidth() {
  document.body.appendChild(div1);

  // Test correct width
  assertWidth(div1, DEFAULT_WIDTH);

  // Test wrong width
  assertThrows(
      'Exception should be thrown when elements has wrong width',
      goog.bind(assertWidth, null, div1, 400));

  // Test a valid tolerance value
  assertWidthWithinTolerance(div1, 180, 20);

  // Test exceeding tolerance value
  assertThrows(
      'Exception should be thrown when element\'s width exceeds tolerance',
      goog.bind(assertWidthWithinTolerance, null, div1, 100, 0.1));
}


/**
 * Tests assertHeight.
 */
function testAssertHeight() {
  document.body.appendChild(div1);

  // Test correct height
  assertHeight(div1, DEFAULT_HEIGHT);

  // Test wrong height
  assertThrows(
      'Exception should be thrown when element has wrong height.',
      goog.bind(assertHeightWithinTolerance, null, div1, 300));

  // Test a valid tolerance value
  assertHeightWithinTolerance(div1, 90, 10);

  // Test exceeding tolerance value
  assertThrows(
      'Exception should be thrown when element\'s height exceeds tolerance',
      goog.bind(assertHeight, null, div1, 50, 0.2));
}


/**
 * Tests assertIsLeftOf.
 */
function testAssertIsLeftOf() {
  document.body.appendChild(div1);
  document.body.appendChild(div2);

  // Test elements of same size & location
  assertThrows(
      'Exception should be thrown when elements intersect.',
      goog.bind(assertIsLeftOf, null, div1, div2));
  assertThrows(
      'Exception should be thrown when elements intersect.',
      goog.bind(assertIsStrictlyLeftOf, null, div1, div2));

  // Test elements that are not left to right
  goog.style.setPosition(div1, 100, 0);
  goog.style.setPosition(div2, 0, 0);
  assertThrows(
      'Exception should be thrown when elements are not left to right.',
      goog.bind(assertIsLeftOf, null, div1, div2));
  assertThrows(
      'Exception should be thrown when elements are not left to right.',
      goog.bind(assertIsStrictlyLeftOf, null, div1, div2));

  // Test elements that intersect, but is left to right
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 100, 0);
  assertIsLeftOf(div1, div2);
  assertThrows(
      'Exception should be thrown when elements intersect.',
      goog.bind(assertIsStrictlyLeftOf, null, div1, div2));

  // Test elements that are strictly left to right
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 999, 0);
  assertIsLeftOf(div1, div2);
  assertIsStrictlyLeftOf(div1, div2);
}


/**
 * Tests assertIsAbove.
 */
function testAssertIsAbove() {
  document.body.appendChild(div1);
  document.body.appendChild(div2);

  // Test elements of same size & location
  assertThrows(
      'Exception should be thrown when elements intersect.',
      goog.bind(assertIsAbove, null, div1, div2));
  assertThrows(
      'Exception should be thrown when elements intersect.',
      goog.bind(assertIsStrictlyAbove, null, div1, div2));

  // Test elements that are not top to bottom
  goog.style.setPosition(div1, 0, 999);
  goog.style.setPosition(div2, 0, 0);
  assertThrows(
      'Exception should be thrown when elements are not top to bottom.',
      goog.bind(assertIsAbove, null, div1, div2));
  assertThrows(
      'Exception should be thrown when elements are not top to bottom.',
      goog.bind(assertIsStrictlyAbove, null, div1, div2));

  // Test elements that intersect, but is top to bottom
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 0, 50);
  assertIsAbove(div1, div2);
  assertThrows(
      'Exception should be thrown when elements intersect.',
      goog.bind(assertIsStrictlyAbove, null, div1, div2));

  // Test elements that are top to bottom
  goog.style.setPosition(div1, 0, 0);
  goog.style.setPosition(div2, 0, 999);
  assertIsAbove(div1, div2);
  assertIsStrictlyAbove(div1, div2);
}
