# Templates
Sumboard provides configuration of custom templates for emails, excel and pdf files in case someone might want to personalize appearance of their reports. Templates are uploaded at organization level and can be used later by one or many corresponding entities.

### Email Templates

Email consists of body and footer. Footer will always contain unsubscribe and edit schedule link. Body is a simple html that can be changed. You probably want to set `{{body}}` variable to pass message saved in schedule. Email templates can be applied to schedule, dashboard and organization.

> Here is email template fallback

```mermaid
graph LR;
    A(Schedule)-->B(Dashboard);
    B-->C(Organization);
    C-->D(Default);
```

### Excel Templates

You need to upload an excel file with one worksheet where you can define styles for cells and images that will be duplicated on every page. There are a set of variables that will be replaced with corresponding values during generation.

* `{{dashboardName}}` - will be the same of each worksheet
* `{{chartName}}` - will correspond to chart name on respective worksheet
* `{{columnsName}}` - starting point of columns, they will expand to the right and down if there will be some nested columns, all cells will inherit styles from the starting one
* `{{columnsValue}}`- starting point of chart values, will expand to right and down and all cells will inherit style of the starting one
* `{{filterCount}}` - number of applied filters
* `{{generatedDate}}` - generation date of file
* `{{allFilters}}` - filter values separated by comma
* `{{filters.*}}` - `*` needs to be replaced with actual filter key, actual filter value will be applied 

> Example of excel template

![alt text](/excel-template-demo.png)

### Pdf Configuration

For pdf you can configure logo source of your reports as well as size and offsets. You can also change general font size and orientation of pages.

