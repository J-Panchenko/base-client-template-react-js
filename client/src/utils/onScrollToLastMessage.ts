import { RefObject } from 'react';

export function onScrollToLastMessage<T extends (HTMLElement | null)>(
  chatRef: RefObject<T>,
  timeout = 0,
) {
  const elem = chatRef.current;
  setTimeout(
    () => elem
      && elem.scrollBy({ behavior: 'smooth', top: elem.scrollHeight }),
    timeout);
}
