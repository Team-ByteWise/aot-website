export type NavBarItemRecord = { title: string; link: string };
export type NestedRecord = { [k: string]: Array<NavBarItemRecord> | NestedRecord };