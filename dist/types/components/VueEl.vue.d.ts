declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        required: true;
        validator: (prop: string) => boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        required: true;
        validator: (prop: string) => boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    text: string;
}>;
export default _default;
