/**
 * Custom shaped progress bar.
 * You can create arbitrary shaped progress bars by passing a SVG path created with e.g. Adobe Illustrator.
 * It's on caller's responsibility to append SVG to DOM.
 */

import { AnimationOptions, AnimationSupport } from "./";
declare class Path<SElement extends Element = SVGPathElement> {
    readonly path?: SElement | undefined;
    constructor(path: SElement | string | null, options?: AnimationOptions);
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface -- adds members from animation contract
interface Path extends AnimationSupport {}

export = Path;
