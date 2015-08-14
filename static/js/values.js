/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Sayohatdan foydalanish',
    'description': '<p><a href="http://golang.org">Go dasturlash tili bo`yicha sayohatga xush kelibsiz</a>. Sayohat o`z ichiga dasturlash tilining asosiy  yutuqlarini oladi.</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Asoslar',
    'description': '<p>Boshlang`ich nuqta, tilning batcha boshlang`ich tushunchalarini o`rgatadi.</p><p>O`zgaruvchilarni e`lon qilish, funksiyalarni chaqirish va navbatdagi mashg`ulotga o`tishingizdan oldin bilishingiz kerak bo`lgan barcha narsalarni o`rgatadi.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Metodlar va interfeyslar',
    'description': '<p>Turlarda qanday qilib metodlarni aniqlab olishni, qanday qilib interfeyslarni e`lon qilishni va ularni birgalikda qanday qo`llashni o`rgatadi.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': 'Raqobat',
    'description': '<p>Go raqobatlik funksiyasini til yadrosining qismi sifatida qo`llaydi.</p><p>Ushbu modulda gap gorutinlar (goroutine - go tartibi degan ma`noni anglatadi) va kanallar va qanday qilib ular qanday qilib raqobat qoliblarini qo`llashi ustida boradi.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'o`chirish',
    'on': 'yoqish',
    'syntax': 'Sintaksis-ranglansin',
    'lineno': 'Satr-Raqamlari',
    'reset': 'Slaydni qayta o`qish',
    'format': 'Manbani formatlash',
    'kill': 'Dasturni to`xtatish',
    'run': 'Ishga tushir',
    'compile': 'Kompilyatsiya va Ishga tushirish',
    'more': 'Sozlamalar',
    'toc': 'Mundarija',
    'prev': 'Avvalgi',
    'next': 'Navbatdagi',
    'waiting': 'Uzoq masofadagi serverni kutamiz...',
    'errcomm': 'Uzoq masofadagi server bilan bog`lanishda xatolik yuz berdi.',
    'submit-feedback': 'Ushbu sahifa haqida javob yozing',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'github.com/golang/go',
    'issue-title': 'sayohat: [QISQA IZOH BILAN ALMASHTIRING]',
    'issue-message': 'Yuqoridagi sarlavhani issue (xatolik) ma`nosiga moslab nomlang va javob xatingizni xatolikka tegishli kod bilan birga shu yerga kiriting.',
    'context': 'Mazmuni',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
});
