# Settings

* [Templates](/settings/templates/)
* [Configure Email Sender Address](/settings/email-sender/)

Dashboard settings
Dashboard can configure visual components and localization aspects. Dashboard is a grid of columns and rows, you can specify minCols, in this case the whole screen will contain selected amount of columns. You also can configure maxCols, when a chart will expand more than min, columns will shrink to add require amount od columns, a chart can't expand more than max. It a chart expands more than minRows, row's height will remain constant and an additional one will be pushed down.

Region formatting
You can set language and timezone for your dashboard. Default language is en and timezone is +0000. You also can specify different configs of individual column types.

Date
locale
timezone
formats for aggregations
Number
digits - comma position and style, number of decimal units
Currency
Same as number but can override currency symbol

Note that formatting configs can be overwritten by charts, then by token config