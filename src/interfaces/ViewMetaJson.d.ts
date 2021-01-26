export interface ViewMetaJson {
    /**
     * Unique identifier for the view
     */
    name: string
    /**
     * Displayed name
     */
    title: string
    /**
     * Url for the view (usually in form of `${screen.name}/${view.name}`)
     */
    url: string
    /**
     * Widgets present on the view
     */
    widgets: ViewMetaWidget
}

type ViewMetaWidget = ViewMetaWidgetNumber | ViewMetaWidgetString

interface ViewMetaWidgetBase {
    position: number
    gridWidth?: number
}

/**
 * Widget can be uniquely identified by numeric id
 *
 * @deprecated TODO: Will be removed in Tesler 2.0.0
 */
interface ViewMetaWidgetNumber extends ViewMetaWidgetBase {
    /**
     * Reference to `id` property from *.widget.json file
     *
     * @deprecated TODO: Will be removed in Tesler 2.0.0
     */
    widgetId: number
}

/**
 * Widget can be uniquely identified by string id
 */
interface ViewMetaWidgetString extends ViewMetaWidgetBase {
    /**
     * Reference to `name` property from *.widget.json file
     */
    widgetName: string
}
