interface AuthData {
  address: string;
  privateKey: string;
}

type About = string;
type Image = string;
type Language = string;
type Name = string;
type Site = string;

interface UserInfo {
  about: About;
  image: Image;
  language: Language;
  name: Name;
  site: Site;
}

export type { AuthData, UserInfo };
