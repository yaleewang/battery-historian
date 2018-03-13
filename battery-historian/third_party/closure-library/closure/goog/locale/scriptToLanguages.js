// Copyright 2008 The Closure Library Authors. All Rights Reserved.
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

/**
 * @fileoverview Script to Languages mapping. Typically, one script is used by
 * many languages of the world. This map captures that information as a mapping
 * from script to array of two letter or three letter language codes.
 *
 * This map is used by goog.locale.genericFontNames for listing
 * font fallbacks for a font family for a locale. That file
 * uses this map in conjunction with goog.locale.genericFontNamesData.
 *
 * Warning: this file is automatically generated from CLDR.
 * Please contact i18n team or change the script and regenerate data.
 * Code location: http://go/generate_genericfontnames.py
 *
 */

// clang-format off

/**
 * Namespace for Script to Languages mapping
 */
goog.provide('goog.locale.scriptToLanguages');

goog.require('goog.locale');

/**
 * The script code to list of language codes map.
 * @type {!Object<string, !Array<string>>}
 */

/* ~!@# genmethods.scriptToLanguages() #@!~ */
goog.locale.scriptToLanguages = {
  'Arab': [
    'prd',
    'doi',
    'lah',
    'uz',
    'cjm',
    'swb',
    'az',
    'ps',
    'ur',
    'ks',
    'fa',
    'ar',
    'tk',
    'ku',
    'tg',
    'bal',
    'ha',
    'ky',
    'ug',
    'sd'
  ],
  'Armn': ['hy'],
  'Beng': [
    'mni',
    'grt',
    'bn',
    'syl',
    'as',
    'ril',
    'ccp'
  ],
  'Blis': ['zbl'],
  'Cans': [
    'cr',
    'iu',
    'cwd',
    'crk'
  ],
  'Cham': ['cja'],
  'Cher': ['chr'],
  'Cyrl': [
    'ab',
    'rom',
    'mns',
    'mdf',
    'ce',
    'myv',
    'ude',
    'sah',
    'inh',
    'uk',
    'tab',
    'av',
    'yrk',
    'az',
    'cv',
    'koi',
    'ru',
    'dng',
    'sel',
    'tt',
    'chm',
    'ady',
    'tyv',
    'abq',
    'kum',
    'xal',
    'tg',
    'cjs',
    'tk',
    'be',
    'kaa',
    'bg',
    'kca',
    'ba',
    'nog',
    'krl',
    'bxr',
    'kbd',
    'dar',
    'krc',
    'lez',
    'ttt',
    'udm',
    'evn',
    'kpv',
    'uz',
    'kk',
    'kpy',
    'kjh',
    'mn',
    'gld',
    'mk',
    'ckt',
    'aii',
    'kv',
    'ku',
    'sr',
    'lbe',
    'ky',
    'os'
  ],
  'Deva': [
    'btv',
    'kfr',
    'bho',
    'mr',
    'bhb',
    'bjj',
    'hi',
    'mag',
    'mai',
    'awa',
    'lif',
    'xsr',
    'mwr',
    'kok',
    'gon',
    'hne',
    'hoc',
    'gbm',
    'hoj',
    'ne',
    'kru',
    'ks',
    'bra',
    'bft',
    'new',
    'bfy',
    'sd'
  ],
  'Ethi': [
    'byn',
    'wal',
    'ti',
    'tig',
    'am'
  ],
  'Geor': ['ka'],
  'Grek': ['el'],
  'Gujr': ['gu'],
  'Guru': ['pa'],
  'Hans': [
    'zh',
    'za'
  ],
  'Hant': ['zh'],
  'Hebr': [
    'lad',
    'yi',
    'he'
  ],
  'Jpan': ['ja'],
  'Khmr': ['km'],
  'Knda': [
    'kn',
    'tcy'
  ],
  'Kore': ['ko'],
  'Laoo': ['lo'],
  'Latn': [
    'gv',
    'sco',
    'scn',
    'mfe',
    'hnn',
    'suk',
    'tkl',
    'gd',
    'ga',
    'gn',
    'gl',
    'rom',
    'hai',
    'lb',
    'la',
    'ln',
    'tsg',
    'tr',
    'ts',
    'li',
    'lv',
    'to',
    'lt',
    'lu',
    'tk',
    'tg',
    'fo',
    'fil',
    'bya',
    'bin',
    'kcg',
    'ceb',
    'amo',
    'yao',
    'mos',
    'dyu',
    'de',
    'tbw',
    'da',
    'fan',
    'st',
    'hil',
    'fon',
    'efi',
    'tl',
    'qu',
    'uz',
    'kpe',
    'ban',
    'bal',
    'gor',
    'tru',
    'mo',
    'mdh',
    'en',
    'tem',
    'ee',
    'tvl',
    'cr',
    'eu',
    'et',
    'tet',
    'nbf',
    'es',
    'rw',
    'lut',
    'kmb',
    'ast',
    'sms',
    'lua',
    'sus',
    'smj',
    'fy',
    'tmh',
    'rm',
    'rn',
    'ro',
    'dsb',
    'sma',
    'luo',
    'hsb',
    'wa',
    'lg',
    'wo',
    'bm',
    'jv',
    'men',
    'bi',
    'tum',
    'br',
    'bs',
    'smn',
    'om',
    'ace',
    'ilo',
    'ty',
    'oc',
    'srr',
    'krl',
    'tw',
    'nds',
    'os',
    'xh',
    'ch',
    'co',
    'nso',
    'ca',
    'sn',
    'eo',
    'son',
    'pon',
    'cy',
    'cs',
    'kfo',
    'fj',
    'tn',
    'srn',
    'pt',
    'sm',
    'chk',
    'bbc',
    'chm',
    'lol',
    'frs',
    'frr',
    'chr',
    'yap',
    'vi',
    'kos',
    'gil',
    'ak',
    'pl',
    'sid',
    'hr',
    'ht',
    'hu',
    'hmn',
    'ho',
    'gag',
    'buc',
    'ha',
    'bug',
    'gaa',
    'mg',
    'fur',
    'bem',
    'ibb',
    'mi',
    'mh',
    'war',
    'mt',
    'uli',
    'ms',
    'sr',
    'haw',
    'sq',
    'aa',
    've',
    'af',
    'gwi',
    'is',
    'it',
    'sv',
    'ii',
    'sas',
    'ik',
    'tpi',
    'zu',
    'ay',
    'kha',
    'az',
    'tzm',
    'id',
    'ig',
    'pap',
    'nl',
    'pau',
    'nn',
    'no',
    'na',
    'nb',
    'nd',
    'umb',
    'ng',
    'ny',
    'nap',
    'gcr',
    'nyn',
    'hop',
    'lis',
    'so',
    'nr',
    'pam',
    'nv',
    'kv',
    'kab',
    'fr',
    'nym',
    'kaj',
    'rcf',
    'yo',
    'snk',
    'kam',
    'dgr',
    'mad',
    'fi',
    'mak',
    'niu',
    'kg',
    'pag',
    'gsw',
    'ss',
    'kj',
    'ki',
    'min',
    'sw',
    'cpe',
    'su',
    'kl',
    'sk',
    'kr',
    'kw',
    'cch',
    'ku',
    'sl',
    'sg',
    'tiv',
    'se'
  ],
  'Lepc': ['lep'],
  'Limb': ['lif'],
  'Mlym': ['ml'],
  'Mong': [
    'mnc',
    'mn'
  ],
  'Mymr': [
    'my',
    'kht',
    'shn',
    'mnw'
  ],
  'Nkoo': [
    'nqo',
    'emk'
  ],
  'Orya': ['or'],
  'Sinh': ['si'],
  'Tale': ['tdd'],
  'Talu': ['khb'],
  'Taml': [
    'bfq',
    'ta'
  ],
  'Telu': [
    'te',
    'gon',
    'lmn'
  ],
  'Tfng': ['tzm'],
  'Thaa': ['dv'],
  'Thai': [
    'tts',
    'lwl',
    'th',
    'kdt',
    'lcp'
  ],
  'Tibt': [
    'bo',
    'dz'
  ],
  'Yiii': ['ii'],
  'und': ['sat']
};
/* ~!@# END #@!~ */
