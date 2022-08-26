export interface WagoWeakAura {
  name: string;
  slug: string;
  url: string;
  user: {
    name: string;
  };
  versions: {
    total: number;
    versions: WagoWeakAuraVersion[];
  };
}

export interface WagoWeakAuraVersion {
  version: number;
  versionString: string;
  date: string;
  changelog: {
    text?: string;
  };
}
