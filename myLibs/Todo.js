class Todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }
    getTodo() {
        return { id: this.id, description: this.description }
    }
    setDescription(newDescription) {
        newDescription = this.description
    }
}

module.exports = Todo;