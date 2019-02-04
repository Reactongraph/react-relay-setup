let TOPIC = "React";

export function author() {
    return {
        name: "dev.reactjs",
        id: 9,
        topic: TOPIC,
    };
}

export function updateTopic(param) {
    const { topic } = param;
    TOPIC = topic;
    return { topic: TOPIC };
}