module "mdn-random" {
  export function get(): number;
  export function getArbitrary(min: number, max: number): number;
  export function getInt(min: number, max: number): number;
  export function getIntInclusive(min: number, max: number): number;
}
