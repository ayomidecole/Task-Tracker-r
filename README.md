# Creating a Tracker

## Step 1: Define the HTML Structure

---

The first step is to define the HTML skeleton of the application. We use semantic HTML to make the structure clear and accessible. There are two main sections in the body of the webpage:

1. **Header**  
2. **Main Content**  
   - The main section is further divided into two parts:
     - The task input bar and button (`id="task-input"`)
     - The task list where added tasks will appear (`id="task-list"`)

The begginer body skeleton code and image is below:
 ```html
<body>
    <header>
        <h1>Task Tracker</h1>
    </header>

    <main>
        <section id="task-input">
            <input type="text" id="new-task" placeholder="Enter a new task..">
            <button id="add-task">Add Task</button>
        </section>

        <section id="task-list">
            <ul>
                
            </ul>
        </section>
    </main>
</body>
```

This is how it looks without styling:

![Initial HTML Skeleton](images/init-skeleton.png)

