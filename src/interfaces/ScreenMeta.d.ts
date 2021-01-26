import { ViewNavigationGroup, ViewNavigationItem } from '@tesler-ui/core/interfaces/navigation'

/**
 * *.screen.json file format
 *
 * Describes a screen
 */
export interface ScreenMetaJson {
    /**
     * Unique identifier for the screen
     */
    name: string
    /**
     * Displayed name
     *
     * Required, but not used at the moment; `text` field from `responsibilities` table will be shown instead
     */
    title: string
    /**
     * Default view for the screen; will be opened if no view name is specified when navigating to a screen
     */
    primaryViewName: string
    /**
     * Not used
     */
    primaryViews: string[]
    /**
     *
     */
    navigation: {
        menu: Array<ViewNavigationGroupNew | ViewNavigationItemNew>
    }
}

/**
 * Omit deprecated fields
 */
type ViewNavigationGroupNew = Omit<ViewNavigationGroup, 'id'>

/**
 * Omit deprecated fields and include mandatory fields from 2.0.0
 */
type ViewNavigationItemNew = Omit<ViewNavigationItem, 'id'> & { viewName: string }
