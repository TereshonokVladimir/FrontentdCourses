# Practice: DOM Exercises

## Tasks

### Task 1
Select an element by id, class, and tag. Change its textContent. Add a class using classList.add. Toggle the class on click. Use querySelector and getElementById.

### Task 2
Create a dynamic list: button adds a new li to a ul. Each li has a remove button. Clicking remove deletes that li. Use createElement, append, remove. Use event delegation for the remove buttons (listen on ul, check target).

### Task 3
Build a simple tab component: 3 tabs, 3 panels. Clicking a tab shows its panel and hides others. Add "active" class to the selected tab and panel. Use data attributes to link tab to panel (data-tab, data-panel). No framework.

### Task 4
Create a modal: button opens modal ( overlay + content box). Clicking overlay or close button closes it. Trap focus inside modal when open (tab cycles within modal). Restore focus to trigger button on close. Use aria-hidden and role="dialog" for accessibility.

### Task 5
Build an accordion: multiple sections, each with a header and content. Clicking header toggles that section's content. Only one open at a time (collapse others when opening one), or allow multiple open. Animate height (CSS transition or JS). Use aria-expanded and aria-controls. Keyboard: Enter/Space to toggle.
