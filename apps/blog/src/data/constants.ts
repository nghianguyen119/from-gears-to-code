const GITHUB = "GitHub";

// Contact me
const TELEGRAM = "Telegram";
const GMAIL = "GMail";
const TWITTER = "Twitter";
const GITHUB_LINK = "https://github.com/nghianguyen119/";
const TELEGRAM_LINK = "https://t.me/nghianguyen119/";
const EMAIL_ADDRESS = "trongnghia.nguyen@outlook.com";

interface ContactMeData {
  readonly github: string;
  readonly telegram: string;
  readonly gmail: string;
  readonly twitter: string;
  readonly githubLink: string;
  readonly telegramLink: string;
  readonly emailAddress: string;
}

const contactMeData: ContactMeData = {
  github: GITHUB,
  telegram: TELEGRAM,
  gmail: GMAIL,
  twitter: TWITTER,
  githubLink: GITHUB_LINK,
  telegramLink: TELEGRAM_LINK,
  emailAddress: EMAIL_ADDRESS,
};

export { contactMeData };
