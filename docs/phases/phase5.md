# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Reminder

### Controllers
* Api::RemindersController (create, destroy, index, show, update)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)
* RemindersIndex
  - ReminderIndexItem
* ReminderShow
* ReminderForm

### Stores
* Reminder

### Actions
* RecipeActions.receiveAllReminders -> triggered by ApiUtil
* RecipeActions.receiveSingleReminder
* RecipeActions.deleteReminder
* ReminderActions.fetchAllReminders -> triggers ApiUtil
* ReminderActions.fetchSingleReminder
* ReminderActions.createReminder
* ReminderActions.updateReminder
* ReminderActions.destroyReminder

### ApiUtil
* ApiUtil.fetchAllReminders
* ApiUtil.fetchSingleReminder
* ApiUtil.createReminder
* ApiUtil.updateReminder
* ApiUtil.destroyReminder

## Gems/Libraries
