# Refactoring

## Signals that refactoring is needed

### A lot of assignment.

**problem**: Keeping track of state is hard. A lot of assignment is a signal that there is a lot of state to keep track of.

**solution**: Use a container type (array or custom built) to capture assignment and construct a serially composed path (linear data flow).
