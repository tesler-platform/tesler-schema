import { ViewNavigationGroup, ViewNavigationItem } from '@tesler-ui/core/interfaces/navigation'

export interface ScreenMetaJson {
    name: string
    title: string
    primaryViewName: string
    primaryViews: string[]
    navigation: {
        menu: Array<ViewNavigationGroup | ViewNavigationItem>
    }
}
