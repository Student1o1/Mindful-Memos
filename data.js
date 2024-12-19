var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Gabe",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Gabe",
                date: Date.now(),
                content: "Hi everyone!"
            },
            {
                author: "John",
                date: Date.now(),
                content: "Hey whats up"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "John",
        date: Date.now(),
        content: "What do I post here lol",
        comments: [
            {
                author: "John",
                date: Date.now(),
                content: "What do I post here"
            },
            {
                author: "Gabe",
                date: Date.now(),
                content: "Just post your thoughts ig "
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}