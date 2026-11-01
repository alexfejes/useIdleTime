import { useState } from 'react'

const INITIAL_TASKS = [
  { id: 1, title: 'Review pull request for checkout flow', done: false },
  { id: 2, title: 'Update Q4 roadmap doc', done: false },
  { id: 3, title: 'Reply to design feedback thread', done: true },
  { id: 4, title: 'Prep notes for sprint planning', done: false },
]

const SCHEDULE = [
  { time: '09:30', title: 'Daily stand-up', length: '15 min' },
  { time: '11:00', title: 'Design review', length: '45 min' },
  { time: '14:00', title: 'Sprint planning', length: '1 hr' },
  { time: '16:30', title: '1:1 with manager', length: '30 min' },
]

const TEAM = [
  { name: 'Frontend Developer', role: 'Web', status: 'active' },
  { name: 'Backend Developer', role: 'API', status: 'away' },
  { name: 'Product Designer', role: 'Design', status: 'active' },
  { name: 'QA Engineer', role: 'Testing', status: 'offline' },
]

const STATUS_LABELS = { active: 'Active', away: 'Away', offline: 'Offline' }

export function Dashboard() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [draft, setDraft] = useState('')

  const remaining = tasks.filter((task) => !task.done).length

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )

  const addTask = (event) => {
    event.preventDefault()
    const title = draft.trim()
    if (!title) return
    setTasks((prev) => [...prev, { id: Date.now(), title, done: false }])
    setDraft('')
  }

  const clearCompleted = () => setTasks((prev) => prev.filter((task) => !task.done))

  return (
    <main className="dashboard">
      <section className="card card--tasks">
        <div className="card__header">
          <h2>My tasks</h2>
          <span className="card__meta">{remaining} remaining</span>
        </div>

        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Add a task…"
            aria-label="New task"
          />
          <button type="submit">Add</button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? 'task task--done' : 'task'}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.title}</span>
              </label>
            </li>
          ))}
        </ul>

        {tasks.some((task) => task.done) && (
          <button type="button" className="link-button" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </section>

      <section className="card">
        <div className="card__header">
          <h2>Today</h2>
          <span className="card__meta">{SCHEDULE.length} meetings</span>
        </div>
        <ul className="schedule">
          {SCHEDULE.map((item) => (
            <li key={item.time}>
              <span className="schedule__time">{item.time}</span>
              <span className="schedule__title">{item.title}</span>
              <span className="schedule__length">{item.length}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <div className="card__header">
          <h2>Team</h2>
        </div>
        <ul className="team">
          {TEAM.map((member) => (
            <li key={member.name}>
              <span className={`presence presence--${member.status}`} aria-hidden="true" />
              <span className="team__name">{member.name}</span>
              <span className="team__role">{member.role}</span>
              <span className="team__status">{STATUS_LABELS[member.status]}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
