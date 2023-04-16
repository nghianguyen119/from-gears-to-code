function isMobile(): boolean {
  const userAgent: string = navigator.userAgent.toUpperCase();
  if (/IPHONE|IPOD/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return true;
  } else if (/ANDROID/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return true;
  } else if (/IPAD/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return false;
  } else {
    return false;
  }
}

async function setClipBoardText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

export { isMobile, setClipBoardText };
