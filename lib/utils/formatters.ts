import numeral from 'numeral'

export function formatTax(value: number): string {
  return `${numeral(value * 100).format('0')}%`
}

export function formatStake(value: string | number): string {
  const numValue = typeof value === 'string' ? parseFloat(value) : value
  return `₳${numeral(numValue / 1_000_000).format('0.00a').toUpperCase()}`
}

export function formatPledge(value: string | number): string {
  const numValue = typeof value === 'string' ? parseFloat(value) : value
  return `₳${numeral(numValue / 1_000_000).format('0.00a').toUpperCase()}`
}

export function formatDelegators(value: number): string {
  return numeral(value).format('0,0')
}

export function formatNumber(value: number, format = '0,0'): string {
  return numeral(value).format(format)
}
