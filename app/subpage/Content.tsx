"use client"

import { useState } from "react";
import { Button, FormControl, Input, ModelessDialog, NotificationBar, Textarea } from "smarthr-ui";

export const Content = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Button onClick={() => setExpanded(v => !v)}>Click me</Button>

      <NotificationBar type="info">これは最初から見えています</NotificationBar>

      <Textarea maxLetters={100} autoFocus />

      <ModelessDialog heading="あいうえお" isOpen />

      <div className="mt-2">
        {expanded && (
          <NotificationBar type="warning">こんにちは</NotificationBar>
        )}
      </div>

      <FormControl label="入力してね" errorMessages={["foo", "bar", "baz"]}>
        <Input />
      </FormControl>
    </div>
  );
}
