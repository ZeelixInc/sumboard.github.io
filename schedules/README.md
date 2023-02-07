# Schedules

Schedules are automated tasks that send emails to configured addresses at a certain period or when triggered by someone.

> Note: You need to have `use schedules`, and, additionally, `use custom triggers` turned on for dashboard and link that you are using in order to use this feature.

#### Opening schedules view

In order to see and configure schedules you need to click on 3 dots in top-right corner of dashboard and click on `Schedules` option. You will see a popup with currently active list of schedules. Here you can also delete them.

![alt text](/schedules-list.png)

> Note: For every user with different token filters will be different schedules.

#### Creating/updating

* `Send to` - list of emails addresses that will receive this report, minimum address
* `Subject` - email subject
* `Message` - email message (can use variables: specific filter value, dashboard name, filters count)
* `Format` - types of reports that will be attached to emails, available values are: `excel`, `pdf`, `image`, minimum 1 attachment
* `Type` - is a radio button, you can chose `Time based` (aka auto) or `Custom trigger`

If type is `Custom Trigger`, it will generate a trigger url that can be queried through a POST request with an organization token. If type is `Time based` an additional configuration is required.


Here you can chose 4 values for orientation: `day`, `week`, `month`, `year`.

* `day` - you can configure interval between days when email will be sent
* `week` - you can configure interval between weeks adn week day
* `month` - interval between months and month days or relative to last day of the week or month 
* `year` - interval between years, months and day of these months or relative

`At` is  required for all 4 cases, i represents time when email will be sent.

> Email will always have link to edit and unsubscribe from schedule.