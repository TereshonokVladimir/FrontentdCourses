# Practice: Composition

## Tasks

### Task 1
Create a `Layout` component with `header` and `children` props. Render header at top, children below. Use it: `<Layout header={<h1>My App</h1>}>...</Layout>`. Add `sidebar` prop—render three sections. No semicolons.

### Task 2
Build a `Card` that accepts `title`, `actions` (element or array of elements for top-right), and `children`. Use composition. Create a `CardActions` subcomponent that renders a div with flex for action buttons. Compose: `<Card title="Profile" actions={<CardActions><Button>Edit</Button></CardActions>}>...</Card>`.

### Task 3
Create a `Tabs` compound component: `Tabs`, `TabsList`, `Tab`, `TabPanel`. Use Context to share active tab state. TabsList renders the tab buttons. TabPanel renders only when its tab is active. Usage: `<Tabs><TabsList><Tab id="a">A</Tab><Tab id="b">B</Tab></TabsList><TabPanel id="a">Content A</TabPanel><TabPanel id="b">Content B</TabPanel></Tabs>`.

### Task 4
Build a `DataFetcher` with render prop: `children` is a function `(data) => ReactNode`. DataFetcher fetches from url, passes data to children. Handle loading: children receives `{ data, loading, error }`. Usage: `<DataFetcher url="...">{({ data, loading }) => loading ? <Spinner /> : <List items={data} />}</DataFetcher>`.

### Task 5
Create a `Form` compound component: `Form`, `FormField`, `FormActions`. Form uses a ref or context to collect values from FormFields. FormField wraps Label + Input, registers with Form. FormActions renders submit/cancel. On submit, Form calls onSubmit with all values. Support validation: FormField can have a `validate` prop. Form shows errors. Build a registration form using this. Support nested structure (FormSection, FormRow). Make it flexible: FormField can be text, select, checkbox. Document the API.
