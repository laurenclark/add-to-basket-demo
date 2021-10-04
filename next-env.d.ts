/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import { CSSProp } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        // Your theme stuff here
    }
}

declare module "react" {
    interface Attributes {
        css?: CSSProp;
    }
}
