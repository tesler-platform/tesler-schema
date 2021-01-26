import type { WidgetMeta } from '@tesler-ui/core/interfaces/widget'

export interface ViewMetaJson {
    id: number
    name: string
    title?: string
    template?: string
    customizable?: boolean
    editable?: boolean
    url: string
    widgets: WidgetMeta[]
    columns: number | null
    rowHeight: number | null
    readOnly: boolean
    ignoreHistory?: boolean
}
