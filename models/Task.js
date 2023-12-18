class Task {
  constructor(data) {
    this.id = data?.id || null;
    this.title = data?.title || null;
    this.description = data?.description || null;
    this.created_at = data?.created_at || new Date();
    this.updated_at = data?.updated_at || new Date();
    this.status = data?.status || "idle";
  }
  all() {
    return global.tasks || [];
  }
  find(id) {
    const allTasks = this.all();
    id = parseInt(id);
    return allTasks.find((task) => task.id === id) || [];
  }
  create(params) {

    if (!params.id) {
      params.id = global.tasks.length + 1;
    }

    const newTask = new Task(params);
    global.tasks.push(newTask);
    return newTask;
  }
  update(params) {
    const task = this.find(params.id);
    task.title = params.title || task.title;
    task.description = params.description || task.description;
    task.status = params.status || task.status;
    task.updated_at = new Date();
    return task;
  }
  patch(id, params) {
    const task = this.find(id);
    for (const [key, value] of Object.entries(params)) {
      task[key] = value;
    }
    task.updated_at = new Date();
    return task;
  }
  archive(id) {
    const task = this.find(id);
    task.status = "archived";
    task.updated_at = new Date();
    return task;
  }
}

module.exports = Task;


// class Task {
//   constructor(data) {
//     this.id = data?.id || null;
//     this.title = data?.title || null;
//     this.description = data?.description || null;
//     this.created_at = data?.created_at || new Date();
//     this.updated_at = data?.updated_at || new Date();
//     this.deleted_at = data?.deleted_at || null;
//     this.status = data?.status || "idle";
//   }
//   all() {
//     return global.tasks;
//   }
//   find(id) {
//     return global.tasks.find((task) => task.id === id) || [];
//   }
//   create(params) {
//     const newTask = new Task({ ...params, id: global.tasks.length + 1 });
//     global.tasks.push(newTask);
//     return newTask;
//   }
//   update(params) {
//     const task = this.find(params.id);
//     task.title = params.title || task.title;
//     task.description = params.description || task.description;
//     task.status = params.status || task.status;
//     task.updated_at = new Date();
//     return task;
//   }
//   archive(id) {
//     const task = this.find(id);
//     task.status = "archived";
//     task.updated_at = new Date();
//     return task;
//   }
// }

// module.exports = Task;