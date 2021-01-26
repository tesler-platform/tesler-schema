import { WidgetTypes, WidgetOptions, WidgetShowCondition, WidgetListField, WidgetFormField } from '@tesler-ui/core/interfaces/widget'

/**
 * *.widget.json file format
 *
 * Describes a widget
 */
export interface WidgetMetaJsonBase {
    /**
     * Displayed name
     */
    title: string
    /**
     * Widget type
     */
    type: WidgetTypes
    /**
     * Business component name
     */
    bc: string
    /**
     * For list-like widget this option will limit the number of displayed records
     */
    limit?: number
    /**
     * Options specific for differet widget types and also a space to customize your own widget
     */
    options?: WidgetOptions
    /**
     * When specified widget will not be displayed until specific conditions are met
     */
    showCondition?: WidgetShowCondition
    /**
     * Fields that will be displayed on widget
     */
    fields: Array<WidgetListField | WidgetFormField>
}

/**
 * Widget can be uniquely identified by numeric id
 *
 * @deprecated TODO: Will be removed in Tesler 2.0.0
 */
export interface WidgetMetaJsonNumber extends WidgetMetaJsonBase {
    /**
     * Unique identifier for the widget
     *
     * @deprecated Support will be removed in Tesler UI 2.0.0
     */
    id: number
}

/**
 * Widget can be uniquely identified by numeric id
 *
 * @deprecated TODO: Will be removed in Tesler 2.0.0
 */
export interface WidgetMetaJsonString extends WidgetMetaJsonBase {
    /**
     * Unique identifier for the widget
     */
    name: string
}

export type WidgetMetaJson = WidgetMetaJsonNumber | WidgetMetaJsonString
