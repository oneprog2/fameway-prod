export interface SpacingTypes {
  none: 0
  xxs: 2.5
  xs: 5
  s: 10
  m: 15
  xm: 20
  xxm: 25
  l: 30
  xl: 35
  xxl: 40
  xxxl: 45
  xxxxl: 50
  big: 55
  xbig: 60
  xxbig: 70
  xxxbig: 80
  huge: 100
  xhuge: 130
  xxhuge: 150
  xxxhuge: 170
}

export interface BorderRadiusTypes {
  none: 0
  xs: 5
  s: 10
  m: 20
  l: 40
  full: 99999
}

export interface BreakpointsTypes {
  mobileS: 320
  mobileM: 375
  mobileL: 425
  tablet: 768
}

export interface MetricsTypes {
  borderRadius:BorderRadiusTypes
  breakpoints:BreakpointsTypes
  spacing:SpacingTypes
}
