import { render, screen } from "@testing-library/react"
import Task from "./Task"

describe("Task component", () => {
    test(`Given the required prop,
        When the component is rendered
        then the task text should be present`, () => {
        const requiredProps = {
            complete: false,
            text: 'This is a testing task',
            id: "001",
            deleteTask: () => { }
        }
        render(<Task {...requiredProps} />)
        expect(screen.getByText('This is a testing task')).toBeInTheDocument()
    })
    test(`Given the required prop,
        When the component is rendered
        then the delete button should be present`, () => { })
    test(`Given a completed task,
        When the component is rendered
        then the complete button should not be present`, () => { })
    test(`Given an incompleted task,
        When the component is rendered
        then the complete button should  be present`, () => { })
    test(`Given a task is rendered,
        When the delete button is clicked
        then the delete task function is called with the correct task id`, () => { })
})