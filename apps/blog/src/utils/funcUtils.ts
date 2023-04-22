async function setClipBoardText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export { setClipBoardText };
