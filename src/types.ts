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

function hasAllRequiredKeys (obj: OCGas | CCGas, expectedKeys: string[]): boolean {
  if (typeof obj === 'object' && obj !== null) {
    const keys = Object.keys(obj)
    return expectedKeys.every(expectedKey => keys.includes(expectedKey))
  }
  return false
}

export function isOpenCircuitGas (gas: OCGas | CCGas): gas is OCGas {
  const stub: OCGas = { o2Fraction: 0, heFraction: 0 }
  return hasAllRequiredKeys(gas, Object.keys(stub))
}

export function isClosedCircuitGas (gas: OCGas | CCGas): gas is CCGas {
  const stub: CCGas = { lowSetpoint: 0, highSetpoint: 0, ascentSwitchDepth: 0, decentSwitchDepth: 0, diluantHeFraction: 0 }
  return hasAllRequiredKeys(gas, Object.keys(stub))
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
