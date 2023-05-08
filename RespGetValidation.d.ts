export interface RespGetValidation {
  computed: Computed;
  documents: Document[];
  expired: boolean;
  flow: Flow;
  identity: Identity;
  steps: Step2[];
  masJobToBePostpone: boolean;
  id: string;
  deviceFingerprint: DeviceFingerprint;
  hasProblem: boolean;
}

export interface DeviceFingerprint {
  ua: string;
  browser: Browser;
  engine: Engine;
  os: Engine;
  cpu: Cpu;
  app: App;
  ip: string;
  vpnDetectionEnabled: boolean;
}

export interface App {
  platform: string;
  version: string;
}

export interface Cpu {
  architecture: string;
}

export interface Engine {
  name: string;
  version: string;
}

export interface Browser {
  name: string;
  version: string;
  major: string;
}

export interface Step2 {
  status: number;
  id: string;
  data: Datum[] | Data22;
  error?: any;
}

export interface Data22 {
  videoUrl: string;
  spriteUrl: string;
  selfieUrl: string;
}

export interface Datum {
  nameSearched: string;
  profileUrl: string;
  searchedOn: string;
  searchId: number;
  originalMatchStatus: string;
  birthYear: number;
  country: string;
  documentType: string;
  dataSource: string;
  matchFound: boolean;
}

export interface Identity {
  status: string;
}

export interface Flow {
  id: string;
  name: string;
}

export interface Document {
  country: string;
  merchantFields: any[];
  region?: any;
  type: string;
  steps: Step[];
  fields: Fields;
  photos: string[];
}

export interface Fields {
  dateOfBirth: DateOfBirth;
  documentNumber: DateOfBirth;
  documentType: DateOfBirth;
  emissionDate: DateOfBirth;
  expirationDate: DateOfBirth;
  firstName: DateOfBirth;
  fullName: DateOfBirth;
  issueCountry: DateOfBirth;
  nationality: DateOfBirth;
  personalNumber: DateOfBirth;
  sex: DateOfBirth;
  surname: DateOfBirth;
}

export interface DateOfBirth {
  value: string;
}

export interface Step {
  status: number;
  id: string;
  data?: Data2;
  error?: any;
}

export interface Data2 {
  age?: number;
  ageThreshold?: number;
  underage?: boolean;
  score?: number;
  fullName?: FullName;
  emissionDate?: EmissionDate;
  documentNumber?: FullName;
  dateOfBirth?: EmissionDate;
  expirationDate?: EmissionDate;
  documentType?: FullName;
  firstName?: FullName;
  issueCountry?: FullName;
  nationality?: FullName;
  personalNumber?: FullName;
  sex?: FullName;
  surname?: FullName;
}

export interface EmissionDate {
  value: string;
  required: boolean;
  label: string;
  format: string;
}

export interface FullName {
  value: string;
  required: boolean;
  label: string;
}

export interface Computed {
  age: Age;
  isDocumentExpired: IsDocumentExpired;
}

export interface IsDocumentExpired {
  data: Data;
}

export interface Data {
  passport: boolean;
}

export interface Age {
  data: number;
}