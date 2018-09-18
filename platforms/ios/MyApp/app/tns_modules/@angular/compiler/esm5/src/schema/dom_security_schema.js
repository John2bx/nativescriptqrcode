/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { SecurityContext } from '../core';
// =================================================================================================
// =================================================================================================
// =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
// =================================================================================================
// =================================================================================================
//
//        DO NOT EDIT THIS LIST OF SECURITY SENSITIVE PROPERTIES WITHOUT A SECURITY REVIEW!
//                               Reach out to mprobst for details.
//
// =================================================================================================
/** Map from tagName|propertyName SecurityContext. Properties applying to all tags use '*'. */
export var SECURITY_SCHEMA = {};
function registerContext(ctx, specs) {
    var e_1, _a;
    try {
        for (var specs_1 = tslib_1.__values(specs), specs_1_1 = specs_1.next(); !specs_1_1.done; specs_1_1 = specs_1.next()) {
            var spec = specs_1_1.value;
            SECURITY_SCHEMA[spec.toLowerCase()] = ctx;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (specs_1_1 && !specs_1_1.done && (_a = specs_1.return)) _a.call(specs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
// Case is insignificant below, all element and attribute names are lower-cased for lookup.
registerContext(SecurityContext.HTML, [
    'iframe|srcdoc',
    '*|innerHTML',
    '*|outerHTML',
]);
registerContext(SecurityContext.STYLE, ['*|style']);
// NB: no SCRIPT contexts here, they are never allowed due to the parser stripping them.
registerContext(SecurityContext.URL, [
    '*|formAction', 'area|href', 'area|ping', 'audio|src', 'a|href',
    'a|ping', 'blockquote|cite', 'body|background', 'del|cite', 'form|action',
    'img|src', 'img|srcset', 'input|src', 'ins|cite', 'q|cite',
    'source|src', 'source|srcset', 'track|src', 'video|poster', 'video|src',
]);
registerContext(SecurityContext.RESOURCE_URL, [
    'applet|code',
    'applet|codebase',
    'base|href',
    'embed|src',
    'frame|src',
    'head|profile',
    'html|manifest',
    'iframe|src',
    'link|href',
    'media|src',
    'object|codebase',
    'object|data',
    'script|src',
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX3NlY3VyaXR5X3NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY2hlbWEvZG9tX3NlY3VyaXR5X3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUV4QyxvR0FBb0c7QUFDcEcsb0dBQW9HO0FBQ3BHLG9HQUFvRztBQUNwRyxvR0FBb0c7QUFDcEcsb0dBQW9HO0FBQ3BHLEVBQUU7QUFDRiwyRkFBMkY7QUFDM0Ysa0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixvR0FBb0c7QUFFcEcsOEZBQThGO0FBQzlGLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBbUMsRUFBRSxDQUFDO0FBRWxFLHlCQUF5QixHQUFvQixFQUFFLEtBQWU7OztRQUM1RCxLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBO1lBQW5CLElBQU0sSUFBSSxrQkFBQTtZQUFXLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7U0FBQTs7Ozs7Ozs7O0FBQ3RFLENBQUM7QUFFRCwyRkFBMkY7QUFFM0YsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUU7SUFDcEMsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0NBQ2QsQ0FBQyxDQUFDO0FBQ0gsZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3BELHdGQUF3RjtBQUN4RixlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTtJQUNuQyxjQUFjLEVBQUUsV0FBVyxFQUFRLFdBQVcsRUFBUSxXQUFXLEVBQUssUUFBUTtJQUM5RSxRQUFRLEVBQVEsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFNLGFBQWE7SUFDbkYsU0FBUyxFQUFPLFlBQVksRUFBTyxXQUFXLEVBQVEsVUFBVSxFQUFNLFFBQVE7SUFDOUUsWUFBWSxFQUFJLGVBQWUsRUFBSSxXQUFXLEVBQVEsY0FBYyxFQUFFLFdBQVc7Q0FDbEYsQ0FBQyxDQUFDO0FBQ0gsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7SUFDNUMsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtDQUNiLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4uL2NvcmUnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PSBTIFQgTyBQICAgLSAgUyBUIE8gUCAgIC0gIFMgVCBPIFAgICAtICBTIFQgTyBQICAgLSAgUyBUIE8gUCAgIC0gIFMgVCBPIFAgID09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gICAgICAgIERPIE5PVCBFRElUIFRISVMgTElTVCBPRiBTRUNVUklUWSBTRU5TSVRJVkUgUFJPUEVSVElFUyBXSVRIT1VUIEEgU0VDVVJJVFkgUkVWSUVXIVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY2ggb3V0IHRvIG1wcm9ic3QgZm9yIGRldGFpbHMuXG4vL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiogTWFwIGZyb20gdGFnTmFtZXxwcm9wZXJ0eU5hbWUgU2VjdXJpdHlDb250ZXh0LiBQcm9wZXJ0aWVzIGFwcGx5aW5nIHRvIGFsbCB0YWdzIHVzZSAnKicuICovXG5leHBvcnQgY29uc3QgU0VDVVJJVFlfU0NIRU1BOiB7W2s6IHN0cmluZ106IFNlY3VyaXR5Q29udGV4dH0gPSB7fTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJDb250ZXh0KGN0eDogU2VjdXJpdHlDb250ZXh0LCBzcGVjczogc3RyaW5nW10pIHtcbiAgZm9yIChjb25zdCBzcGVjIG9mIHNwZWNzKSBTRUNVUklUWV9TQ0hFTUFbc3BlYy50b0xvd2VyQ2FzZSgpXSA9IGN0eDtcbn1cblxuLy8gQ2FzZSBpcyBpbnNpZ25pZmljYW50IGJlbG93LCBhbGwgZWxlbWVudCBhbmQgYXR0cmlidXRlIG5hbWVzIGFyZSBsb3dlci1jYXNlZCBmb3IgbG9va3VwLlxuXG5yZWdpc3RlckNvbnRleHQoU2VjdXJpdHlDb250ZXh0LkhUTUwsIFtcbiAgJ2lmcmFtZXxzcmNkb2MnLFxuICAnKnxpbm5lckhUTUwnLFxuICAnKnxvdXRlckhUTUwnLFxuXSk7XG5yZWdpc3RlckNvbnRleHQoU2VjdXJpdHlDb250ZXh0LlNUWUxFLCBbJyp8c3R5bGUnXSk7XG4vLyBOQjogbm8gU0NSSVBUIGNvbnRleHRzIGhlcmUsIHRoZXkgYXJlIG5ldmVyIGFsbG93ZWQgZHVlIHRvIHRoZSBwYXJzZXIgc3RyaXBwaW5nIHRoZW0uXG5yZWdpc3RlckNvbnRleHQoU2VjdXJpdHlDb250ZXh0LlVSTCwgW1xuICAnKnxmb3JtQWN0aW9uJywgJ2FyZWF8aHJlZicsICAgICAgICdhcmVhfHBpbmcnLCAgICAgICAnYXVkaW98c3JjJywgICAgJ2F8aHJlZicsXG4gICdhfHBpbmcnLCAgICAgICAnYmxvY2txdW90ZXxjaXRlJywgJ2JvZHl8YmFja2dyb3VuZCcsICdkZWx8Y2l0ZScsICAgICAnZm9ybXxhY3Rpb24nLFxuICAnaW1nfHNyYycsICAgICAgJ2ltZ3xzcmNzZXQnLCAgICAgICdpbnB1dHxzcmMnLCAgICAgICAnaW5zfGNpdGUnLCAgICAgJ3F8Y2l0ZScsXG4gICdzb3VyY2V8c3JjJywgICAnc291cmNlfHNyY3NldCcsICAgJ3RyYWNrfHNyYycsICAgICAgICd2aWRlb3xwb3N0ZXInLCAndmlkZW98c3JjJyxcbl0pO1xucmVnaXN0ZXJDb250ZXh0KFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIFtcbiAgJ2FwcGxldHxjb2RlJyxcbiAgJ2FwcGxldHxjb2RlYmFzZScsXG4gICdiYXNlfGhyZWYnLFxuICAnZW1iZWR8c3JjJyxcbiAgJ2ZyYW1lfHNyYycsXG4gICdoZWFkfHByb2ZpbGUnLFxuICAnaHRtbHxtYW5pZmVzdCcsXG4gICdpZnJhbWV8c3JjJyxcbiAgJ2xpbmt8aHJlZicsXG4gICdtZWRpYXxzcmMnLFxuICAnb2JqZWN0fGNvZGViYXNlJyxcbiAgJ29iamVjdHxkYXRhJyxcbiAgJ3NjcmlwdHxzcmMnLFxuXSk7XG4iXX0=