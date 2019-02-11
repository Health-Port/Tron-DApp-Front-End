"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be changed per component
 * basis. See `app/main/pages/authentication/login/login.component.ts` constructor method to learn more
 * about changing these options per component basis.
 */
exports.fuseConfig = {
    layout: {
        style: 'horizontal-layout-1',
        width: 'fullwidth',
        navbar: {
            background: 'mat-white-700-bg',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'horizontal-style-1'
        },
        toolbar: {
            background: 'mat-white-500-bg',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            background: 'mat-fuse-dark-900-bg',
            hidden: false,
            position: 'above-static'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    },
    customScrollbars: true
};
//# sourceMappingURL=index.js.map