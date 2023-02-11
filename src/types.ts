export interface OCGas {
  o2Fraction: number
  heFraction: number
}

export interface CCGas {
  lowSetpoint: number
  highSetpoint: number
  decentSwitchDepth: number
  ascentSwitchDepth: number
  diluantHeFraction: number
}

interface ProfilePoint {
  depthMSW: number
  CNS: number
  OTU: number
  pO2: number
  pHe: number
  pN: number
  bailoutGas: boolean
}

export interface Profile {
  points: ProfilePoint[]
  finalCNS: number
  finalOTU: number
  warnings: string[]
}
