import { type CCGas, type OCGas, type Profile, isClosedCircuitGas, isOpenCircuitGas } from './types'
import { NitrogenTables, type TableEntry, TableHelium } from './tables'

export class TissueLoading {
  private readonly startingAtmosphericMillibars: number
  private readonly tissueLoading: number[]
  private readonly tableNitrogen: TableEntry[]
  private readonly gradientFactorHigh: number
  private readonly gradientFactorLow: number
  private readonly resolutionSeconds: number

  constructor (startingAtmosphericMillibars: number, table: 'A' | 'B' | 'C', gradientFactorHigh: number, gradientFactorLow: number, resolutionSeconds = 60) {
    if (['A', 'B', 'C'].includes(table)) {
      throw new Error(`Expected table to be one of A, B or C but received: ${table}`)
    }

    if (startingAtmosphericMillibars < 700 || startingAtmosphericMillibars > 1200) {
      throw new Error(`Expected starting atmospheric millibar to be between 700 and 1200 but received: ${startingAtmosphericMillibars}`)
    }

    if (gradientFactorLow < 0 || gradientFactorLow > 100) {
      throw new Error(`Expected low gradient factor to be between 0 and 100, but received: ${gradientFactorLow}`)
    }

    if (gradientFactorHigh < 0 || gradientFactorHigh > 100) {
      throw new Error(`Expected high gradient factor to be between 0 and 100, but received: ${gradientFactorHigh}`)
    }

    if (resolutionSeconds < 1 || resolutionSeconds > 60) {
      throw new Error(`Expected resolution to be between 1 second and 60 seconds but received: ${resolutionSeconds}`)
    }

    this.gradientFactorHigh = gradientFactorHigh
    this.gradientFactorLow = gradientFactorLow
    this.resolutionSeconds = resolutionSeconds
    this.tableNitrogen = NitrogenTables[table]
    this.startingAtmosphericMillibars = startingAtmosphericMillibars
    this.tissueLoading = Array.from(new Array(17), () => 0) // TODO - Use pressure at surface
  }

  calculateProfile (gas: OCGas | CCGas, depthMSW: number, bottomTimeMinutes: number, decentMetersPerMin = 20, ascentMetersPerMin = 10): Profile {
    const gasType: 'CC' | 'OC' | null = isOpenCircuitGas(gas) ? 'OC' : isOpenCircuitGas(gas) ? 'CC' : null
    if (gasType === null) {
      throw new Error('Unexpected gas. Ensure it has all required properties of OC gas or CC gas')
    }

    // TODO - On gas tissues and return profile
  }

  addSurfaceInterval (minutes: number): void {
    if (minutes < 0 || minutes > 48 * 60) {
      throw new Error(`Expected surface interval to be between 0 and ${48 * 60} minutes but received ${minutes}`);
    }

    // TODO - Off gas tissues at startingAtmosphericMillibars for n minutes
  }
}
