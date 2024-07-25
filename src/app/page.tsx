import { Button, Input } from "antd";

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-5 items-start">
      <h1 className="text-3xl">
        ZiCV Builder
      </h1>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Input placeholder='Basic input...' />
    </div>
  );
}
