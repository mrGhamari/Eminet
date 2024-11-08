export interface IEmigrantCard {
  immigo: IImmigo;
}

export interface IImmigo {
  user: IUser;
  _id: string;
  price: number;
  days: number[];
  length: number;
  status: string;
  platforms: string[];
}

interface IUser {
  image: string;
  biography: string;
  lastName: string;
  firstName: string;
  location: ILocation;
  visaTypeId: IvisaTypeId;
  media_assets: IMediaAssets;
}

interface ILocation {
  town: ITown;
  country: ICountry;
}
interface ITown {
  name_en: string;
  name_fa: string;
}
interface ICountry {
  flag: string;
  name_en: string;
  name_fa: string;
}

interface IMediaAssets {
  image_path: string;
  video_path: string;
}

interface IvisaTypeId {
  name_fa: string;
  name_en: string;
}

export interface ISchedule {
  date: string;
  _id: string;
  from: string;
  to: string;
  day: number | string;
  status: string;
  room: IRoomSchedule;
  schedule?: {
    from: string;
    to: string;
  }[];
}

interface IRoomSchedule {
  _id: string;
  price: number;
  length: number;
}
