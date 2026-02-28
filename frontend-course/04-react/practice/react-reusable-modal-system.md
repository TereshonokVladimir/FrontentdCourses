# Practice: Reusable Modal System (Mini-Project)

## Tasks

### Task 1
Create a basic `Modal` component: `isOpen`, `onClose`, `children`. When open, render overlay (backdrop) and content div. Use `createPortal` to render into document.body. Close when clicking overlay. Add a close (X) button. Style overlay (semi-transparent) and center the modal. No semicolons.

### Task 2
Add `ModalHeader`, `ModalBody`, `ModalFooter` as subcomponents. Accept `title` prop for header. Footer gets `children` for buttons. Compose: `<Modal><ModalHeader title="Confirm" /><ModalBody>...</ModalBody><ModalFooter><Button>OK</Button></ModalFooter></Modal>`. Close on Escape key. Use `useEffect` to add/remove keydown listener.

### Task 3
Implement focus trap: when modal opens, focus first focusable element. Tab cycles only within modal. When modal closes, return focus to trigger element. Use `useRef` for modal content and trigger. Store `previousActiveElement` before open. Use `focus()` and `tabIndex` for trap. Handle no focusable elements.

### Task 4
Create a `useModal` hook: returns `{ isOpen, open, close, toggle }`. Use it in a parent that renders `<Modal isOpen={isOpen} onClose={close}>...</Modal>`. Build a `ConfirmModal` that accepts `message`, `onConfirm`, `onCancel`. Used like: `confirm("Delete item?").then(...)`. Use a promise-based API: store resolve/reject in ref, call from button handlers.

### Task 5
Build a complete modal system: base Modal with header/body/footer, useModal hook, ConfirmModal. Add `AlertModal` (info/success/warning/error with icon and single OK button). Support `size` ("sm" | "md" | "lg"). Add animation: fade in overlay, scale in content (CSS transition). Ensure scroll lock: body overflow hidden when modal open. Support multiple modals (stack/z-index). Document usage with examples. Export from a single `modals` module.
