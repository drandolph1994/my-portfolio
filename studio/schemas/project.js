export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name:"description",
            type:"text",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list:[
                    { value: "Personal", title: "Personal"},
                    { value: "School", title: "School"},
                    { value: "Client", title: "Client"}

                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },

    ],

};