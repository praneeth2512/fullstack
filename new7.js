function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("⏳ Fetching data...");

        // Simulate network delay of 2 seconds
        setTimeout(() => {
            const success = true;  // You can toggle this to false to test rejection

            if (success) {
                resolve("✅ Data fetched successfully!");
            } else {
                reject("❌ Failed to fetch data.");
            }
        }, 2000);
    });
}

// Run the async function
fetchData()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
