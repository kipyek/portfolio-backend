module.exports = {
    healthCheck: {
        task: async () => {
            console.log("Health check OK:", new Date().toISOString());
        },
        options: {
            rule: "*/14 * * * *", // every 4 minutes
        },
    },
};