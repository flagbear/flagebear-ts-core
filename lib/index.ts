import { ReleaseToggle as rt } from './models/ReleaseToggle'
import { ContextToggle as ct } from './models/ContextToggle'
import { Conditions as c } from './models/Conditions'
import { Toggle as t } from './models/Toggle'
import sm from './strategies'
import MAT from './helpers/mapper'

export type ReleaseToggle = rt
export type ContextToggle = ct
export type Conditions = c
export type Toggle = t
export const strategyMaps = sm
export const mapArrayofToggles = MAT
