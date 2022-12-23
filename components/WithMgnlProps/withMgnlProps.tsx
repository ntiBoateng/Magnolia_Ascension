import { PropsWithChildren } from "react";

export function withMgnlProps<P extends object>(
    Component: React.ComponentType<P>,
    Builder: any
): React.FC<P> {
    const WithMgnlProps = (props: PropsWithChildren<P>) => {
        const transformed = Builder.build(props);

        // @ts-ignore
        return <Component {...transformed} />;
    };
    const displayName = Component.displayName || Component.name || "Component";
    WithMgnlProps.displayName = `WithMgnlProps(${displayName})`;
    return WithMgnlProps;
}
