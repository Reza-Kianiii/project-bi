export interface WidgetProps {
  children: React.ReactNode;
}

export function Widget({ children }: WidgetProps) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}

export default Widget;
