export interface TableEntry {
  halftime: number
  mSurfaceValueMSW: number
  mSlopeMSW: number
}

const tissueValues: Array<Pick<TableEntry, 'halftime' | 'mSlopeMSW'>> = [
  { halftime: 4, mSlopeMSW: 1.9082 },
  { halftime: 5, mSlopeMSW: 1.7928 },
  { halftime: 8, mSlopeMSW: 1.5352 },
  { halftime: 12.5, mSlopeMSW: 1.3847 },
  { halftime: 18.5, mSlopeMSW: 1.2780 },
  { halftime: 27, mSlopeMSW: 1.2306 },
  { halftime: 38.3, mSlopeMSW: 1.1857 },
  { halftime: 54.3, mSlopeMSW: 1.1504 },
  { halftime: 77, mSlopeMSW: 1.1223 },
  { halftime: 109, mSlopeMSW: 1.0999 },
  { halftime: 146, mSlopeMSW: 1.0844 },
  { halftime: 187, mSlopeMSW: 1.0731 },
  { halftime: 239, mSlopeMSW: 1.0635 },
  { halftime: 305, mSlopeMSW: 1.0552 },
  { halftime: 390, mSlopeMSW: 1.0478 },
  { halftime: 498, mSlopeMSW: 1.0414 },
  { halftime: 635, mSlopeMSW: 1.0359 }
]

const tableANitrogenMSurfaceValues = [32.4, 29.6, 25.4, 22.5, 20.3, 19, 17.8, 16.8, 15.9, 15.2, 14.6, 14.2, 13.9, 13.5, 12.2, 12.9, 12.7]
const tableBNitrogenMSurfaceValues = [32.4, 29.6, 25.4, 22.5, 20.3, 19.0, 17.5, 16.5, 15.7, 15.2, 14.6, 14.2, 13.9, 13.4, 13.2, 12.9, 12.7]
const tableCNitrogenMSurfaceValues = [32.4, 29.6, 25.4, 22.5, 20.3, 18.5, 16.9, 15.9, 15.2, 14.7, 14.3, 14.0, 13.7, 13.4, 13.1, 12.9, 12.7]
const TableANitrogen: TableEntry[] = tissueValues.reduce<TableEntry[]>((acc, row, i) => [
  ...acc,
  { ...row, mSurfaceValueMSW: tableANitrogenMSurfaceValues[i] }
], [])

const TableBNitrogen: TableEntry[] = tissueValues.reduce<TableEntry[]>((acc, row, i) => [
  ...acc,
  { ...row, mSurfaceValueMSW: tableBNitrogenMSurfaceValues[i] }
], [])

const TableCNitrogen: TableEntry[] = tissueValues.reduce<TableEntry[]>((acc, row, i) => [
  ...acc,
  { ...row, mSurfaceValueMSW: tableCNitrogenMSurfaceValues[i] }
], [])

export const TableHelium: TableEntry[] = [
  { halftime: 1.51, mSlopeMSW: 1.9082, mSurfaceValueMSW: 41.0 },
  { halftime: 1.88, mSlopeMSW: 1.7928, mSurfaceValueMSW: 37.2 },
  { halftime: 3.02, mSlopeMSW: 1.5352, mSurfaceValueMSW: 31.2 },
  { halftime: 4.72, mSlopeMSW: 1.3847, mSurfaceValueMSW: 27.2 },
  { halftime: 6.99, mSlopeMSW: 1.2780, mSurfaceValueMSW: 24.3 },
  { halftime: 10.21, mSlopeMSW: 1.2306, mSurfaceValueMSW: 22.4 },
  { halftime: 14.48, mSlopeMSW: 1.1857, mSurfaceValueMSW: 20.8 },
  { halftime: 20.53, mSlopeMSW: 1.1504, mSurfaceValueMSW: 19.4 },
  { halftime: 29.11, mSlopeMSW: 1.1223, mSurfaceValueMSW: 18.2 },
  { halftime: 41.20, mSlopeMSW: 1.0999, mSurfaceValueMSW: 17.4 },
  { halftime: 55.19, mSlopeMSW: 1.0844, mSurfaceValueMSW: 16.8 },
  { halftime: 70.69, mSlopeMSW: 1.0731, mSurfaceValueMSW: 16.4 },
  { halftime: 90.34, mSlopeMSW: 1.0635, mSurfaceValueMSW: 16.2 },
  { halftime: 115.29, mSlopeMSW: 1.0552, mSurfaceValueMSW: 16.1 },
  { halftime: 147.42, mSlopeMSW: 1.0478, mSurfaceValueMSW: 16.1 },
  { halftime: 188.24, mSlopeMSW: 1.0414, mSurfaceValueMSW: 16.0 },
  { halftime: 240.03, mSlopeMSW: 1.0359, mSurfaceValueMSW: 15.9 }
]

export const NitrogenTables = {
  A: TableANitrogen,
  B: TableBNitrogen,
  C: TableCNitrogen
}
