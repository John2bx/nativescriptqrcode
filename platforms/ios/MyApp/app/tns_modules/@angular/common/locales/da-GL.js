/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/da-GL", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        if (n === 1 || !(t === 0) && (i === 0 || i === 1))
            return 1;
        return 5;
    }
    exports.default = [
        'da-GL', [['a', 'p'], ['AM', 'PM'], u], [['AM', 'PM'], u, u],
        [
            ['S', 'M', 'T', 'O', 'T', 'F', 'L'], ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
            ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
            ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
        ],
        [
            ['S', 'M', 'T', 'O', 'T', 'F', 'L'], ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
            ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
            ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
            [
                'januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september',
                'oktober', 'november', 'december'
            ]
        ],
        u, [['fKr', 'eKr'], ['f.Kr.', 'e.Kr.'], u], 1, [6, 0],
        ['dd/MM/y', 'd. MMM y', 'd. MMMM y', 'EEEE \'den\' d. MMMM y'],
        ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'], ['{1} {0}', u, '{1} \'kl\'. {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'kr.', 'dansk krone', {
            'AUD': ['AU$', '$'],
            'DKK': ['kr.'],
            'ISK': [u, 'kr.'],
            'JPY': ['JP¥', '¥'],
            'NOK': [u, 'kr.'],
            'RON': [u, 'L'],
            'SEK': [u, 'kr.'],
            'THB': ['฿'],
            'TWD': ['NT$']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGEtR0wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9kYS1HTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLGdCQUFnQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQ7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVB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KiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksXG4gICAgICB0ID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj98MCskL2csICcnKSwgMTApIHx8IDA7XG4gIGlmIChuID09PSAxIHx8ICEodCA9PT0gMCkgJiYgKGkgPT09IDAgfHwgaSA9PT0gMSkpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnZGEtR0wnLCBbWydhJywgJ3AnXSwgWydBTScsICdQTSddLCB1XSwgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIFtcbiAgICBbJ1MnLCAnTScsICdUJywgJ08nLCAnVCcsICdGJywgJ0wnXSwgWydzw7huLicsICdtYW4uJywgJ3Rpci4nLCAnb25zLicsICd0b3IuJywgJ2ZyZS4nLCAnbMO4ci4nXSxcbiAgICBbJ3PDuG5kYWcnLCAnbWFuZGFnJywgJ3RpcnNkYWcnLCAnb25zZGFnJywgJ3RvcnNkYWcnLCAnZnJlZGFnJywgJ2zDuHJkYWcnXSxcbiAgICBbJ3PDuCcsICdtYScsICd0aScsICdvbicsICd0bycsICdmcicsICdsw7gnXVxuICBdLFxuICBbXG4gICAgWydTJywgJ00nLCAnVCcsICdPJywgJ1QnLCAnRicsICdMJ10sIFsnc8O4bicsICdtYW4nLCAndGlyJywgJ29ucycsICd0b3InLCAnZnJlJywgJ2zDuHInXSxcbiAgICBbJ3PDuG5kYWcnLCAnbWFuZGFnJywgJ3RpcnNkYWcnLCAnb25zZGFnJywgJ3RvcnNkYWcnLCAnZnJlZGFnJywgJ2zDuHJkYWcnXSxcbiAgICBbJ3PDuCcsICdtYScsICd0aScsICdvbicsICd0bycsICdmcicsICdsw7gnXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFsnamFuLicsICdmZWIuJywgJ21hci4nLCAnYXByLicsICdtYWonLCAnanVuLicsICdqdWwuJywgJ2F1Zy4nLCAnc2VwLicsICdva3QuJywgJ25vdi4nLCAnZGVjLiddLFxuICAgIFtcbiAgICAgICdqYW51YXInLCAnZmVicnVhcicsICdtYXJ0cycsICdhcHJpbCcsICdtYWonLCAnanVuaScsICdqdWxpJywgJ2F1Z3VzdCcsICdzZXB0ZW1iZXInLFxuICAgICAgJ29rdG9iZXInLCAnbm92ZW1iZXInLCAnZGVjZW1iZXInXG4gICAgXVxuICBdLFxuICB1LCBbWydmS3InLCAnZUtyJ10sIFsnZi5Lci4nLCAnZS5Lci4nXSwgdV0sIDEsIFs2LCAwXSxcbiAgWydkZC9NTS95JywgJ2QuIE1NTSB5JywgJ2QuIE1NTU0geScsICdFRUVFIFxcJ2RlblxcJyBkLiBNTU1NIHknXSxcbiAgWydISC5tbScsICdISC5tbS5zcycsICdISC5tbS5zcyB6JywgJ0hILm1tLnNzIHp6enonXSwgWyd7MX0gezB9JywgdSwgJ3sxfSBcXCdrbFxcJy4gezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICcuJ10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSwgJ2tyLicsICdkYW5zayBrcm9uZScsIHtcbiAgICAnQVVEJzogWydBVSQnLCAnJCddLFxuICAgICdES0snOiBbJ2tyLiddLFxuICAgICdJU0snOiBbdSwgJ2tyLiddLFxuICAgICdKUFknOiBbJ0pQwqUnLCAnwqUnXSxcbiAgICAnTk9LJzogW3UsICdrci4nXSxcbiAgICAnUk9OJzogW3UsICdMJ10sXG4gICAgJ1NFSyc6IFt1LCAna3IuJ10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1RXRCc6IFsnTlQkJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19