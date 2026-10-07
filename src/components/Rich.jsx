import { Fragment } from "react";

// Renders "**bold**" markers from data.js as <strong>.
export default function Rich({ text }) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (
      <Fragment key={i}>{i % 2 ? <strong>{part}</strong> : part}</Fragment>
    ));
}
