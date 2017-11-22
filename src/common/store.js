const STORE = {
    _id: "bU4rMI7fEeeqxlvy4NOyyA==",
    ProjectId: "bOd74o7fEeeqxlvy4NOyyA==",
    AcctId: "GVb1w0skuUKO+FfzgvG+JA==",
    Stages: [

        {
            "id": 1,
            "action": "Import",
            "isStart": true,
            "prevStage": null,
            "nextStage": 2,
        },
        {
            "id": 2,
            "action": "Sort",
            "isStart": false,
            "prevStage": 1,
            "nextStage": 3,
        },
        {
            "id": 3,
            "action": "Extract",
            "isStart": false,
            "prevStage": 2,
            "nextStage": null,
        },
        {
            "id": 4,
            "action": "Export",
            "isStart": false,
            "prevStage": null,
            "nextStage": null,
        }
    ]
};

export function getWorkflow() {
    return STORE.Stages;
}

export function setWorkflow(input) {
    STORE.Stages = input;
}