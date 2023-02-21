import { component$, QRL } from "@builder.io/qwik";

export const MyButton = component$((props: { onClick$: QRL<() => any> }) => {
  return <button onClick$={props.onClick$}></button>;
});
