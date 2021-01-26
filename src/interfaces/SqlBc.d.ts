/**
 * *.sqlbc.json file format
 *
 * Describes SQL-based business components
 */
export interface SqlBcJson {
    /**
     * Name for the business component
     */
    name: string
    /**
     * Path to sql file that describes business component
     *
     * @example db/migration/liquibase/data/latest/sqlbc/example.sqlbc.sql
     *
     */
    queryFile: string
    /**
     * Number of records to fetch for this business component
     */
    pageLimit: number
    /**
     * Not supported
     */
    editable: 0
    /**
     * Configuration for bind variables passed to sql request from API query
     */
    binds: unknown[]
}
