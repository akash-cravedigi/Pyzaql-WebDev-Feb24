export const DBConfig = {
    name: "ExpenseTracker",
    version: 1,
    objectStoresMeta: [
    {
        store: "expenses",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
            { name: "expense-name", keypath: "name", options: { unique: false } },
            { name: "expense-category", keypath: "category", options: { unique: false } },
            { name: "expense-amount", keypath: "amount", options: { unique: false } },
            { name: "expense-date", keypath: "date", options: { unique: false } }
        ],
    },
    {
        store: "earnings",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
            { name: "earning-name", keypath: "name", options: { unique: false } },
            { name: "earning-category", keypath: "category", options: { unique: false } },
            { name: "earning-amount", keypath: "amount", options: { unique: false } },
            { name: "earning-date", keypath: "date", options: { unique: false } }
        ],
    }
    ]
};

